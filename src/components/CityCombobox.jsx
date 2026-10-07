import { forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import { MUNICIPIOS } from "../data/municipios";

const MAX_RESULTS = 40;

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

// Nombres de municipio que existen en más de un departamento (para desambiguar en la lista).
const HOMONYMS = (() => {
  const counts = new Map();
  for (const m of MUNICIPIOS) counts.set(m.municipio, (counts.get(m.municipio) || 0) + 1);
  return new Set([...counts.entries()].filter(([, count]) => count > 1).map(([name]) => name));
})();

function optionLabel(item) {
  return HOMONYMS.has(item.municipio) ? `${item.municipio} (${item.departamento})` : item.municipio;
}

const CityCombobox = forwardRef(function CityCombobox(
  { city, department, onSelect, error, inputClassName, resetKey },
  ref
) {
  const [query, setQuery] = useState(city ? optionLabel({ municipio: city, departamento: department }) : "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [manualMode, setManualMode] = useState(department === "Sin dato");
  const [manualValue, setManualValue] = useState(department === "Sin dato" ? city : "");
  const [coords, setCoords] = useState(null);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const listboxId = useId();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  // El padre resetea el formulario (ej. tras un envío exitoso) cambiando resetKey;
  // el combobox no se entera solo porque guarda su propio texto en estado local.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setQuery("");
    setManualMode(false);
    setManualValue("");
    setIsOpen(false);
  }, [resetKey]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return MUNICIPIOS.slice(0, MAX_RESULTS);

    const starts = [];
    const includes = [];
    for (const item of MUNICIPIOS) {
      const n = normalize(item.municipio);
      if (n.startsWith(q)) starts.push(item);
      else if (n.includes(q)) includes.push(item);
      if (starts.length + includes.length >= MAX_RESULTS * 3) break;
    }
    return [...starts, ...includes].slice(0, MAX_RESULTS);
  }, [query]);

  const FALLBACK_INDEX = filtered.length;

  const updateCoords = () => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    setCoords({ top: rect.bottom, left: rect.left, width: rect.width });
  };

  useEffect(() => {
    if (!isOpen) return;
    updateCoords();
    const handler = () => updateCoords();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, [isOpen]);

  const commit = (item) => {
    setQuery(optionLabel(item));
    setManualMode(false);
    setManualValue("");
    setIsOpen(false);
    onSelect(item.municipio, item.departamento);
  };

  const enterManualMode = () => {
    setManualMode(true);
    setQuery("");
    setIsOpen(false);
    onSelect("", "Sin dato");
  };

  const exitManualMode = () => {
    setManualMode(false);
    setManualValue("");
    onSelect("", "");
  };

  const revertToCommitted = () => {
    setQuery(city ? optionLabel({ municipio: city, departamento: department }) : "");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    setHighlightedIndex(0);
    if (city) onSelect("", "");
  };

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setIsOpen(true);
      return;
    }
    if (!isOpen) return;

    const optionCount = filtered.length + 1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => (i + 1) % optionCount);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => (i - 1 + optionCount) % optionCount);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex === FALLBACK_INDEX) {
        enterManualMode();
      } else if (filtered[highlightedIndex]) {
        commit(filtered[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      revertToCommitted();
    } else if (e.key === "Tab") {
      setIsOpen(false);
      if (!city) revertToCommitted();
    }
  };

  const handleBlur = () => {
    window.setTimeout(() => {
      setIsOpen(false);
      if (!city) revertToCommitted();
    }, 150);
  };

  const dropdown =
    isOpen && coords
      ? createPortal(
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            className="fixed z-[200] max-h-60 overflow-y-auto bg-[#17171A] border border-white/[0.08] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            style={{ top: coords.top + 4, left: coords.left, width: coords.width }}
          >
            {filtered.length === 0 && (
              <li className="px-4 py-2.5 text-xs text-[#8F8F98]">Sin coincidencias</li>
            )}
            {filtered.map((item, index) => (
              <li
                key={`${item.municipio}-${item.departamento}`}
                id={`${listboxId}-${index}`}
                role="option"
                aria-selected={index === highlightedIndex}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => commit(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-4 py-2.5 text-sm cursor-pointer ${
                  index === highlightedIndex ? "bg-[#5B108B] text-white" : "text-[#E5E5E8]"
                }`}
              >
                {optionLabel(item)}
              </li>
            ))}
            <li
              id={`${listboxId}-${FALLBACK_INDEX}`}
              role="option"
              aria-selected={highlightedIndex === FALLBACK_INDEX}
              onMouseDown={(e) => e.preventDefault()}
              onClick={enterManualMode}
              onMouseEnter={() => setHighlightedIndex(FALLBACK_INDEX)}
              className={`px-4 py-2.5 text-sm border-t border-white/[0.08] cursor-pointer ${
                highlightedIndex === FALLBACK_INDEX ? "bg-[#5B108B] text-white" : "text-[#C9A227]"
              }`}
            >
              Mi ciudad no aparece
            </li>
          </ul>,
          document.body
        )
      : null;

  if (manualMode) {
    return (
      <div className="flex flex-col gap-1">
        <input
          type="text"
          value={manualValue}
          onChange={(e) => {
            setManualValue(e.target.value);
            onSelect(e.target.value, "Sin dato");
          }}
          placeholder="Escribe el nombre de tu ciudad"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "city-error" : undefined}
          className={inputClassName}
        />
        <button
          type="button"
          onClick={exitManualMode}
          className="self-start text-[11px] text-[#A0A0A8] underline hover:text-white"
        >
          Volver a buscar en la lista
        </button>
        {error && (
          <p id="city-error" role="alert" className="text-[11px] text-[#E05252]">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={isOpen ? `${listboxId}-${highlightedIndex}` : undefined}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "city-error" : undefined}
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            setIsOpen(true);
            updateCoords();
          }}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Ciudad / municipio"
          autoComplete="off"
          className={`${inputClassName} pr-9`}
        />
        <ChevronDown
          size={16}
          strokeWidth={1.8}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8F8F98]"
        />
      </div>
      {error && (
        <p id="city-error" role="alert" className="text-[11px] text-[#E05252]">
          {error}
        </p>
      )}
      {dropdown}
    </div>
  );
});

export default CityCombobox;
