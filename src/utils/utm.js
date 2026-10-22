const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
const STORAGE_KEY = "utm_params";

// Guarda los UTM de la URL al entrar (la URL se pierde al navegar dentro de la app)
export function captureUtm() {
try {
    const params = new URLSearchParams(window.location.search);
    const found = {};
    KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) found[k] = v.slice(0, 150);
    });
    if (Object.keys(found).length) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
    } catch (e) {}
}

export function getUtm() {
try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
} catch (e) {
    return {};
    }
}