function messagePersonalized(vaga) {
  
  const messageHtml =
    `<html>
      <body ${styleBody()}>
        <div ${styleDiv()}>
          <h2 ${styleH2()}>Candidatura para Vaga de ${vaga}</h2>
          <p>Prezado(a) recrutador(a),</p>
          <p>Gostaria de expressar meu interesse pela vaga de ${vaga} anunciada. Embora eu ainda não esteja cursando uma graduação, sou formado como Técnico em Desenvolvimento de Sistemas e planejo iniciar minha graduação no primeiro semestre do próximo ano, caso a empresa possa considerar essa expectativa de início.</p>
          <p>Estudo Java com Spring Boot, mas estou aberto a aprender C# e .NET conforme as necessidades da empresa. Tenho também noções de Git e metodologias ágeis. Estou motivado para contribuir com a equipe e desenvolver minhas habilidades.</p>
          <p>Em anexo, envio meu currículo para sua análise.</p>
          <p>Agradeço a oportunidade e fico à disposição para um eventual contato.</p>
          <br>
          <p>Atenciosamente,</p>
          <p><strong>Lucas Gonçalves</strong></p>
        </div>
      </body>
    </html>`;
  return messageHtml;






}
