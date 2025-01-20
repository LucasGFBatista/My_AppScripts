
// Função para formatar a data e hora atual no formato 'yyyy-MM-dd HH:mm'
function dateFormatHour() {
  var currentDate = new Date();
  return Utilities.formatDate(currentDate, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
}

// Função para formatar a data atual no formato 'yyyy-MM-dd'
function dateFormat() {
  var currentDate = new Date();
  return Utilities.formatDate(currentDate, Session.getScriptTimeZone(), 'yyyy-MM-dd');
}

//Estilo corpo de email

function styleBody() {
  return `style="font-family: Arial, sans-serif; color:#333;"`;
}

function styleDiv() {
  return `style="max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;"`;
}

function styleH2() {
  return `style="color: #4CAF50;"`;
}

