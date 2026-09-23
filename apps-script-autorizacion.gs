const SPREADSHEET_ID = "1FvnQS7DXlptURcl7LVQ441tpTN6kKbjyFKdPjUBL2ko";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet =
      spreadsheet.getSheetByName("Autorizaciones") || spreadsheet.insertSheet("Autorizaciones");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha y hora (servidor)",
        "Nombre completo / Razón social",
        "C.C. / NIT",
        "Es representante legal",
        "Nombre representante legal",
        "C.C. representante legal",
      ]);
    }

    const timestamp = Utilities.formatDate(new Date(), "America/Bogota", "yyyy-MM-dd HH:mm:ss");

    sheet.appendRow([
      timestamp,
      data.nombre || "",
      data.documento || "",
      data.esRepresentanteLegal ? "Sí" : "No",
      data.representanteNombre || "",
      data.representanteDocumento || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    console.error("Error guardando autorización: " + error);
    return ContentService.createTextOutput(JSON.stringify({ result: "error" })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
