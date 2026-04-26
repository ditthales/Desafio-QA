CT-COL-001 - Submeter coleta individual com dados válidos
Cenário relacionado: SCN-COLETA-001
Pré-condição:
- Usuário autenticado como "admin"
- Usuário está na página de coleta
Passos:
1. Preencher ID "BEN001"
2. Preencher nome "João Silva"
3. Preencher taxa de conclusão "85"
4. Preencher frequência "92"
5. Preencher nota "8.5"
6. Selecionar status "Completo"
7. Submeter a coleta
Resultado Esperado:
- Coleta aceita com sucesso
- Formulário limpo após envio

CT-COL-002 - Rejeitar coleta sem ID do beneficiário
Cenário relacionado: SCN-COLETA-002
Pré-condição:
- Usuário autenticado
Passos:
1. Deixar o campo ID vazio
2. Preencher nome "João Silva"
3. Preencher taxa de conclusão "85"
4. Preencher frequência "92"
5. Preencher nota "8.5"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro exibida para ID obrigatório

CT-COL-003 - Rejeitar coleta sem nome do beneficiário
Cenário relacionado: SCN-COLETA-002
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN002"
2. Deixar o campo nome vazio
3. Preencher taxa de conclusão "85"
4. Preencher frequência "92"
5. Preencher nota "8.5"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro exibida para nome obrigatório

CT-COL-004 - Rejeitar coleta sem indicadores principais
Cenário relacionado: SCN-COLETA-002
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN003"
2. Preencher nome "Maria Santos"
3. Deixar taxa de conclusão, frequência e nota vazios
4. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro exibida para indicadores obrigatórios

CT-COL-005 - Validar nota fora da faixa permitida
Cenário relacionado: SCN-COLETA-003
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN004"
2. Preencher nome "Pedro Oliveira"
3. Preencher taxa de conclusão "85"
4. Preencher frequência "92"
5. Preencher nota "15"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro para faixa inválida de nota

CT-COL-006 - Validar percentuais fora da faixa permitida
Cenário relacionado: SCN-COLETA-003
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN005"
2. Preencher nome "Carlos Mendes"
3. Preencher taxa de conclusão "150"
4. Preencher frequência "200"
5. Preencher nota "8"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro para faixa inválida de percentuais

CT-COL-007 - Rejeitar valores negativos em indicadores
Cenário relacionado: SCN-COLETA-003
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN006"
2. Preencher nome "Ana Costa"
3. Preencher taxa de conclusão "-10"
4. Preencher frequência "-1"
5. Preencher nota "-5"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro para valores negativos

CT-COL-008 - Rejeitar valores não numéricos
Cenário relacionado: SCN-COLETA-003
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN007"
2. Preencher nome "Roberto Silva"
3. Preencher taxa de conclusão "abc"
4. Preencher frequência "xyz"
5. Preencher nota "nota"
6. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada
- Mensagem de erro para valores não numéricos

CT-COL-009 - Aplicar status padrão quando não selecionado
Cenário relacionado: SCN-COLETA-004
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher campos obrigatórios com dados válidos
2. Não selecionar status
3. Submeter a coleta
Resultado Esperado:
- Coleta aceita
- Status padrão aplicado (conforme regra do sistema)

CT-COL-010 - Pré-visualizar dados antes de submeter
Cenário relacionado: SCN-COLETA-005
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher ID "BEN008"
2. Preencher nome "Julia Souza"
3. Preencher taxa de conclusão "88"
4. Preencher frequência "91"
5. Preencher nota "8"
6. Clicar em pré-visualizar
Resultado Esperado:
- Dados exibidos em formato JSON
- Usuário pode submeter a coleta após a pré-visualização

CT-COL-011 - Limite de caracteres em observações
Cenário relacionado: SCN-COLETA-006
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher campos obrigatórios com dados válidos
2. Informar observação muito longa
3. Submeter a coleta
Resultado Esperado:
- Coleta rejeitada ou observação truncada conforme limite definido

CT-COL-012 - Sanitização de campos exibidos
Cenário relacionado: SCN-COLETA-006
Pré-condição:
- Usuário autenticado
Passos:
1. Preencher observações com conteúdo HTML/JS
2. Submeter a coleta
3. Acessar o histórico
Resultado Esperado:
- Conteúdo exibido como texto simples
- Nenhuma execução de HTML/JS

CT-COL-013 - Acesso à coleta sem autenticação
Cenário relacionado: SCN-COLETA-007
Pré-condição:
- Usuário não autenticado
Passos:
1. Acessar a página de coleta
Resultado Esperado:
- Redirecionamento para a página de login

CT-COL-014 - Histórico filtra por usuário
Cenário relacionado: SCN-COLETA-008
Pré-condição:
- Usuário 1 e Usuário 2 possuem coletas registradas
Passos:
1. Autenticar como Usuário 1
2. Acessar o histórico
Resultado Esperado:
- Histórico mostra apenas coletas do Usuário 1

CT-COL-015 - Histórico não expõe dados sensíveis
Cenário relacionado: SCN-COLETA-008
Pré-condição:
- Usuário autenticado
Passos:
1. Acessar o histórico
Resultado Esperado:
- Não exibir dados de outros usuários
- Não exibir identificadores sensíveis

CT-COL-016 - Upload em lote sem arquivo
Cenário relacionado: SCN-COLETA-009
Pré-condição:
- Usuário autenticado
Passos:
1. Acessar a aba de lote
2. Não selecionar arquivo
3. Clicar em fazer upload
Resultado Esperado:
- Mensagem de erro exibida
- Nenhum processamento iniciado

CT-COL-017 - Upload em lote valida tipo de arquivo
Cenário relacionado: SCN-COLETA-009
Pré-condição:
- Usuário autenticado
Passos:
1. Selecionar arquivo com tipo inválido (ex: .txt)
2. Clicar em fazer upload
Resultado Esperado:
- Upload rejeitado com mensagem de validação

CT-COL-018 - Upload em lote processa arquivo e retorna contagem real
Cenário relacionado: SCN-COLETA-009
Pré-condição:
- Usuário autenticado
- Arquivo CSV válido disponível
Passos:
1. Fazer upload do CSV válido
Resultado Esperado:
- Arquivo processado
- Resposta com contagem real de inserções e erros

CT-COL-019 - Upload em lote valida duplicatas quando marcado
Cenário relacionado: SCN-COLETA-009
Pré-condição:
- Usuário autenticado
- Arquivo CSV com duplicatas disponível
Passos:
1. Marcar a opção "Validar duplicatas"
2. Fazer upload do CSV
Resultado Esperado:
- Duplicatas reportadas e não inseridas

CT-COL-020 - Upload em lote rejeita arquivo vazio ou inválido
Cenário relacionado: SCN-COLETA-009
Pré-condição:
- Usuário autenticado
Passos:
1. Fazer upload de um CSV vazio ou com linhas inválidas
Resultado Esperado:
- Upload rejeitado
- Mensagem com erros encontrados
