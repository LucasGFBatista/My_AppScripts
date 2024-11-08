// Classe para gerenciar a planilha
class SheetManager {
  constructor(sheetName) {
    this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  }

  getApplications() {
    const data = this.sheet.getDataRange().getValues();
    const applications = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const application = new JobApplication(
        row[0], // Vaga
        row[1], // Email
        row[2], // Tipo Vaga
        row[3], // Status
        row[4], // Data/hora envio
        row[5]  // Data envio
      );
      applications.push(application);
    }

    return applications;
  }

  updateStatus(row, status) {
    this.sheet.getRange(row + 1, 4).setValue(status);
    this.sheet.getRange(row + 1, 5).setValue(new Date());
  }
}