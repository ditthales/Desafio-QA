language: pt

Funcionalidade: Coleta de Dados de Beneficiários
  Como um QA tester
  Eu quero coletar dados de beneficiários
  Para avaliar o desempenho da plataforma de gestão

  Pano de Fundo:
    Dado que estou autenticado
    E estou na página de coleta de dados
    E o sistema está pronto para receber coletas

  @SCN-COLETA-001
  Cenário: Submissão de coleta individual com dados válidos
    Quando eu preencho os campos obrigatórios com dados válidos
    E eu submeto a coleta
    Então a coleta deve ser aceita com sucesso
    E o formulário deve ser limpo

  @SCN-COLETA-002
  Cenário: Validação de campos obrigatórios
    Quando eu deixo campos obrigatórios vazios
    E eu tento submeter a coleta
    Então a coleta deve ser rejeitada
    E uma mensagem de erro deve aparecer

  @SCN-COLETA-003
  Cenário: Validação de regras numéricas
    Quando eu informo valores numéricos inválidos
    E eu tento submeter a coleta
    Então a coleta deve ser rejeitada

  @SCN-COLETA-004
  Cenário: Comportamento do status
    Quando eu submeto a coleta sem selecionar status
    Então um status padrão deve ser aplicado

  @SCN-COLETA-005
  Cenário: Pré-visualização de dados
    Quando eu preencho os campos obrigatórios com dados válidos
    E eu clico em pré-visualizar
    Então os dados devem ser mostrados em formato JSON
    E eu devo poder submeter a coleta

  @SCN-COLETA-006
  Cenário: Limites e sanitização de campos de texto
    Quando eu informo textos longos ou com HTML/JS
    E eu submeto a coleta
    Então o conteúdo deve ser validado e exibido como texto simples

  @SCN-COLETA-007
  Cenário: Controle de acesso à coleta
    Quando eu acesso a página de coleta sem autenticação
    Então devo ser redirecionado para a página de login

  @SCN-COLETA-008
  Cenário: Histórico de coletas por usuário
    Quando eu consulto o histórico
    Então devo ver apenas minhas coletas
    E não devo ver dados sensíveis de outros usuários

  @SCN-COLETA-009
  Cenário: Upload em lote com validações
    Quando eu envio um arquivo para coleta em lote
    Então o sistema deve validar o arquivo e processar os registros
