function messageDev(vaga) {
  const messageHtml =
    `<html>
      <body ${styleBody()}>
        <div ${styleDiv()}>
          <h2 ${styleH2()}>Candidatura para Vaga de ${vaga}</h2>
          <p>Prezado(a) recrutador(a),</p>
          <p>Gostaria de me candidatar à vaga de <strong>${vaga}</strong>. Como desenvolvedor, tenho experiência em desenvolvimento de software, programação em várias linguagens e habilidades para trabalhar em projetos ágeis.</p>
          <p>Estou sempre em busca de novas tecnologias e aprimoramento contínuo.</p>
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