// Classe que representa a candidatura
class JobApplication {
  constructor(jobTitle, email, jobType, status, sendDateTime, sendDate) {
    this.jobTitle = jobTitle;
    this.email = email;
    this.jobType = jobType;
    this.status = status;
    this.sendDateTime = sendDateTime;
    this.sendDate = sendDate;
  }
  
  isPending() {
    return this.status === "pendente" || this.status === "agendado";
  }

  markAsSent() {
    this.status = "enviado";
  }

  markAsSchedule() {
    this.status = "agendado";
  }
}





