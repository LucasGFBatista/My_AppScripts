function messageAdm(vaga) {
  const messageHtml =
    `<html>
      <body ${styleBody()}>
        <div ${styleDiv()}>
          <h2 ${styleH2()}>Candidatura para Vaga de ${vaga}</h2>
          <p>Prezado(a) recrutador(a),</p>
          <p>Gostaria de me candidatar à vaga de <strong>${vaga}</strong>. Tenho experiência em tarefas administrativas, habilidades de organização e domínio de ferramentas de produtividade.</p>
          <p>Estou entusiasmado em contribuir para o sucesso da equipe e aprender mais.</p>
          <p>Em anexo, envio meu currículo para sua análise.</p>
          <p>Agradeço a oportunidade e aguardo ansiosamente pelo seu retorno.</p>
          <br>
          <p>Atenciosamente,</p>
          <p><strong>Lucas Gonçalves</strong></p>
        </div>
      </body>
    </html>`;
  return messageHtml;
}