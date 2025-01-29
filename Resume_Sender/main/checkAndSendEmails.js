// Função principal que checa as condições e, se atendidas, executa o processo de envio de e-mails
function checkAndSendEmails() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 = Domingo, 6 = Sábado
  const hour = currentDate.getHours();

  Logger.log("Dia da semana: " + dayOfWeek);  // Loga o dia da semana
  Logger.log("Hora: " + hour); // Loga a hora

  // Verifica se é dia útil (seg a sex) e dentro do horário (entre 6h e 19h)
  const isWorkDay = dayOfWeek >= 1 && dayOfWeek <= 5; // 1 = Segunda, 5 = Sexta
  const isIntoTheTime = hour >= 6 && hour < 19;

  Logger.log("isWorkDay: " + isWorkDay + "\nisIntoTheTime: " + isIntoTheTime);

  // Verifica se tem quota

  const quota = hasQuota();

  // Verifica se é feriado
  const holiday = isHoliday();
  Logger.log("Holiday: " + holiday);

  // Se for dia útil, dentro do horário, não for feriado e tiver cota para enviar, irá enviar os emails
  if (isWorkDay && isIntoTheTime && !holiday && quota) {
    Logger.log("Condições atendidas, enviando emails.");

    const sheetManager = new SheetManager("Main");
    const emailSender = new EmailSender("Curriculos");
    const applications = sheetManager.getApplications();

    applications.forEach((application, index) => {
      if (application.isPending()) {
        emailSender.sendEmail(application);
        application.markAsSent();
        sheetManager.updateStatus(index + 1, "enviado");
      }
    });

  } else {
    Logger.log("Condições não atendidas, emails não enviados.");
    createTrigger(); // Cria um gatilho para tentar novamente mais tarde
  }
}
