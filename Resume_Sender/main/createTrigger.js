function createTrigger() {

  // Remove qualquer gatilho anterior relacionado ao envio de emails para evitar duplicações
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'checkAndSendEmails') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Abra a planilha ativa da página "Main"
  var mainSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main");

  // Cria um novo gatilho para executar `checkAndSendEmails` diariamente às 6h
  ScriptApp.newTrigger('checkAndSendEmails')
    .timeBased()
    .everyDays(1)
    .atHour(6)
    .create();

  Logger.log("Novo gatilho criado para verificar e enviar emails às 6h diariamente.");

  // Atualiza o status na coluna D para todas as linhas que precisam ser processadas
  var lastLine = mainSheet.getLastRow();
  for (var i = 2; i <= lastLine; i++) { // Começa na linha 2 para ignorar o cabeçalho

    var statusCell = mainSheet.getRange(i, 4); // Coluna D
    var dateTimeScheduleCell = mainSheet.getRange(i, 5); // Coluna E
    var dateScheduleCell = mainSheet.getRange(i, 6); // Coluna F

    if (statusCell.getValue().toString().trim().toLowerCase() === 'pendente'
      || statusCell.getValue().toString().trim().toLowerCase() === 'agendado') { // Se estiver diferente de "Enviado"
      
      statusCell.setValue('agendado');

      // Insere o valor retornado pelas funções em vez do código da função
      dateTimeScheduleCell.setValue(dateFormatHour());
      dateScheduleCell.setValue(dateFormat());
    }
  }
}
