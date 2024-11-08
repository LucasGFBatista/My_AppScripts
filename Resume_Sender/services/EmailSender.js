// Classe para gerenciar o envio de e-mails
class EmailSender {
  constructor(curriculumSheetName) {
    this.curriculumSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(curriculumSheetName);
    this.curriculumMap = this.loadCurriculumLinks();
  }

  loadCurriculumLinks() {
    const data = this.curriculumSheet.getDataRange().getValues();
    const map = {};

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      map[row[0]] = row[1]; // Tipo de Vaga => Link do Currículo
    }

    return map;
  }

  sendEmail(application) {
    const subject = `Candidatura para ${application.jobTitle}`;
    const message = this.getEmailTemplate(application);
    const curriculumLink = this.curriculumMap[application.jobType];

    if (!curriculumLink) {
      console.log(`Nenhum currículo encontrado para o tipo de vaga: ${application.jobType}`);
      return;
    }

    const fileId = this.extractFileCurriculumId(curriculumLink);
    const file = DriveApp.getFileById(fileId);

    if (!file) {

      console.log(`Arquivo de currículo não encontrado para o tipo de vaga: ${application.jobType}`);

      return;
    }

    GmailApp.sendEmail(application.email, subject, message, {
      attachments: [file.getAs(MimeType.PDF)],
      htmlBody: message
    });

    console.log(`Email enviado para: ${application.email}`);
  }

  getEmailTemplate(application) {
    // Você pode definir diferentes templates para cada tipo de vaga aqui
    if (application.jobType != 'DEV') {

      return messageAdm(application.jobTitle);

    } else if (application.jobType === "DEV") {

      return messageDev(application.jobTitle);
    }
    return `<p>Prezado candidato,</p><p>Segue em anexo o currículo para a vaga solicitada.</p>`;
  }

  extractFileCurriculumId(url) {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  }
}



