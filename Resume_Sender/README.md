
# Sistema de Envio Automatizado de Candidaturas

Este projeto é um sistema automatizado para envio de e-mails de candidaturas de emprego, desenvolvido com Google Apps Script, Google Sheets e AppSheet. O sistema armazena os dados das candidaturas em uma planilha Google, envia e-mails automaticamente com base em condições específicas, e atualiza o status de envio na planilha. A arquitetura modular e orientada a objetos facilita a manutenção e expansão do sistema.

## Funcionalidades

- **Envio Automático de E-mails**: Envio de e-mails baseado nos dados de candidaturas cadastrados na planilha.
- **Filtragem Condicional**: E-mails são enviados somente em dias úteis, dentro de um horário comercial predefinido e se houver limite disponível de envio. ,(Limite 100/dia)
- **Controle de Status**: Atualização automática do status para "Enviado" após o envio, evitando duplicações.
- **Notificação via AppSheet**: Notificações automáticas são geradas no AppSheet quando o status de uma candidatura é alterado para "Enviado".

## Componentes Principais

1. **Google Sheets**
   - **Planilha Principal ("Main")**:
     - Armazena dados das vagas, incluindo nome da vaga, e-mail, tipo de vaga, status e datas de envio.
     - Estrutura de exemplo:

       | Vaga                      | Email                     | Tipo Vaga | Status   | Data/hora envio    | Data envio |
       |---------------------------|---------------------------|-----------|----------|--------------------|------------|
       | Desenvolvedor Web         | <exemplo@gmail.com>         | DEV       | pendente | 2024-11-04 13:33   | 2024-11-04 |
       | Assistente Administrativo | <outroexemplo@gmail.com>    | ADM       | enviado  | 2024-11-04 13:33   | 2024-11-04 |

   - **Planilha de Currículos ("Curriculos")**:
     - Associa cada tipo de vaga ao link do currículo correspondente.
     - Estrutura de exemplo:

       | Tipo Vaga | Link do Currículo                              |
       |-----------|-----------------------------------------------|
       | DEV       | [https://drive.google.com/curriculo-dev](https://drive.google.com/curriculo-dev) |
       | ADM       | [https://drive.google.com/curriculo-adm](https://drive.google.com/curriculo-adm) |

2. **AppSheet**
   - **Interface de Gerenciamento**:
     - Interface para visualizar, atualizar e gerenciar o status das candidaturas.
     - **Funcionalidades**:
       - Visualização de vagas pendentes, enviadas e agendadas.
       - Edição de status de candidaturas.
       - Acionamento do script de envio diretamente na interface.
       - Notificações automáticas para atualizações de status.

3. **Gmail e Google Apps Script**
   - **Automação de Envio de E-mails**:
     - O script gerencia o envio automatizado de e-mails, realizando verificações de horários, dias úteis, seleção de templates e anexando currículos.

## Estrutura de Pastas

A organização dos arquivos do projeto segue a estrutura:

```plaintext

├── main/
│   ├── Main.js                   # Função principal para iniciar o processo
│   ├── checkAndSendEmails.js     # Verifica condições e dispara o envio de e-mails
│   └── createTrigger.js          # Cria gatilhos para execução automática
├── services/
│   ├── EmailSender.js            # Classe para envio de e-mails com currículo
│   └── SheetManager.js           # Classe para gerenciar a interação com a planilha
├── models/
│   └── JobApplication.js         # Classe para modelar os dados da candidatura
├── messages/
│   ├── messageAdm.js             # Template de e-mail para vagas administrativas
│   ├── messageDev.js             # Template de e-mail para vagas de desenvolvedor
│   └── messagePersonalized.js    # Template de e-mail personalizado
└── utils/
    ├── isHoliday.js              # Função para verificar feriados
    └── util.js                   # Funções utilitárias diversas
```

## Configuração e Instalação

1. **Clone o projeto**: Baixe o repositório para sua máquina local.
2. **Instale o Google Clasp**: Certifique-se de que possui o [Google Clasp](https://github.com/google/clasp) instalado para gerenciar scripts do Google Apps.

   ```bash
   npm install -g @google/clasp
   ```

3. **Autentique o Clasp**: Execute `clasp login` para autenticar o Clasp com sua conta Google.
4. **Sincronize o projeto**: Use o comando abaixo para sincronizar os arquivos com o Google Apps Script.

   ```bash
   clasp push
   ```

## Uso

1. **Configurar a Planilha Google**: Preencha a planilha com as informações das candidaturas, como e-mail, nome e status.
2. **Executar o Script Manualmente**: No Apps Script, execute a função `Main` para testes de envio de e-mails.
3. **Automatizar com Triggers**: O script configura triggers para que o envio seja realizado automaticamente ao detectar alterações na planilha ou em horários específicos.

## Classes Principais

- **`Main.js`**: Função principal que coordena o processo de verificação e envio de e-mails.
- **`EmailSender.js`**: Classe responsável pelo envio de e-mails com currículos anexados.
- **`SheetManager.js`**: Classe que gerencia a leitura e atualização de dados na planilha.
- **`JobApplication.js`**: Modelo de dados para as candidaturas.

## Funções Utilitárias

- **`checkAndSendEmails.js`**: Verifica se as condições de envio são atendidas (dia útil, horário comercial e não ser feriado).
- **`isHoliday.js`**: Função para verificar se o dia atual é feriado.
- **`createTrigger.js`**: Cria gatilhos para execução automática, garantindo o início do processo em eventos específicos.
- **`quota.js`**: Verifica o limite de envio é maior que 0, retorna booleano. 

## Templates de E-mail

Os templates de e-mail possibilitam o envio de mensagens personalizadas para diferentes tipos de vagas:

- **`messageAdm.js`**: Template para vagas administrativas.
- **`messageDev.js`**: Template para vagas de desenvolvimento.
- **`messagePersonalized.js`**: Template para mensagens personalizadas, ajustável conforme necessário.

## Implementação no AppSheet

1. **Conexão com Google Sheets**:
   - Integração das planilhas no AppSheet para visualização e atualização de dados.

2. **Botões de Ação**:
   - Botão para acionar o script de envio de e-mails.

3. **Atualização de Status**:
   - Sincronização de status em tempo real com a planilha "Main".

4. **Notificações**:
   - Notificações automáticas para atualizações de status das candidaturas.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou relatar problemas na seção de Issues.

---

Este projeto foi desenvolvido para simplificar o envio de candidaturas, economizando tempo e evitando duplicações. Ele permite gerenciar o envio de e-mails e o status de cada candidatura de forma prática.
