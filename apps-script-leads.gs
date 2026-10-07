const SPREADSHEET_ID = "1ihveXKIChRLHZ8QTpvyVHiMiDXfgoj3imsONsno_kYA";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha y hora (servidor)",
        "Nombre",
        "Negocio",
        "Ciudad",
        "Teléfono",
        "Compra mensual aproximada",
        "Cantidad de productos por pedido",
        "Calificación del lead",
        "Acepta tratamiento de datos",
        "Acepta comunicaciones comerciales",
        "Versión de la política",
      ]);
    }

    const timestamp = Utilities.formatDate(new Date(), "America/Bogota", "yyyy-MM-dd HH:mm:ss");

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.business || "",
      data.city || "",
      data.phone || "",
      data.purchaseVolume || "",
      data.productQuantity || "",
      data.qualification || "",
      data.aceptaTratamientoDatos ? "Sí" : "No",
      data.aceptaComunicacionesComerciales ? "Sí" : "No",
      data.versionPolitica || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    console.error("Error guardando lead: " + error);
    return ContentService.createTextOutput(JSON.stringify({ result: "error" })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
