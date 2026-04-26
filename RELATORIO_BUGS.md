# Relatório de Bugs

## Índice

- [Registro](#registro)
	- [BUG-001: Registro aceita caracteres especiais no username](#bug-001)
	- [BUG-002: Registro aceita espaços no username](#bug-002)
	- [BUG-003: Sem feedback instantâneo para email e senha](#bug-003)
	- [BUG-004: Sem regra de senha (aceita qualquer valor)](#bug-004)
	- [BUG-005: Registro faz login automaticamente](#bug-005)
	- [BUG-006: Campo username aceita HTML injection](#bug-006)
	- [BUG-007: Campo de email usa tipo texto](#bug-007)
- [Login](#login)
	- [BUG-008: Login sem validação de username (caracteres e espaços)](#bug-008)
	- [BUG-009: Login aceita username apenas com espaços](#bug-009)
	- [BUG-010: Mensagem de erro revela se usuário existe](#bug-010)
	- [BUG-011: Mensagem de erro desaparece rapidamente](#bug-011)
	- [BUG-012: Itens da tela "sambam" ao exibir/esconder mensagem](#bug-012)
	- [BUG-013: Sem bloqueio efetivo por tentativas consecutivas](#bug-013)
	- [BUG-014: Campos não são limpos após submit](#bug-014)
	- [BUG-015: Login aceita senha errada após várias tentativas](#bug-015)
	- [BUG-016: Rate limit não é resetado após login bem-sucedido](#bug-016)
- [Resetar senha](#resetar-senha)
	- [BUG-017: Reset de senha sem verificação de segurança](#bug-017)
	- [BUG-018: Reset de senha aceita usuário vazio](#bug-018)
	- [BUG-019: Reset de senha aceita senha vazia](#bug-019)
	- [BUG-020: Reset de senha sem regra para nova senha](#bug-020)
	- [BUG-021: Reset de senha sem confirmação de senha](#bug-021)
- [Dashboard](#dashboard)
	- [BUG-022: Painel administrativo visível para não-admins](#bug-022)
	- [BUG-023: Painel exibe senha de todos os usuários](#bug-023)
	- [BUG-024: Senha do usuário exibida em informações do usuário](#bug-024)
	- [BUG-025: Botão de sair com tamanho excessivo](#bug-025)
	- [BUG-026: Sessão muito longa mesmo sem lembrar-me](#bug-026)
	- [BUG-027: Botão de dashboard dentro do dashboard](#bug-027)
	- [BUG-028: Endpoint /user retorna senha](#bug-028)
	- [BUG-029: Senha em texto no localStorage](#bug-029)
	- [BUG-030: Bypass por query permite acessar dashboard e dados](#bug-030)
	- [BUG-031: Bypass sem sessão mantém acesso ao dashboard](#bug-031)
- [Coleta de dados individual](#coleta-dados-individual)
	- [BUG-032: Campos obrigatórios sem indicação](#bug-032)
	- [BUG-033: Nota aceita valores maiores que 10](#bug-033)
	- [BUG-034: Nota e campos numéricos aceitam valores negativos](#bug-034)
	- [BUG-035: Permite enviar sem status](#bug-035)
	- [BUG-036: Nota e campos numéricos aceitam potência](#bug-036)
	- [BUG-037: Nome aceita números e caracteres especiais](#bug-037)
	- [BUG-038: Sem retorno para o dashboard a partir da coleta](#bug-038)
	- [BUG-039: Campos sem limite de caracteres](#bug-039)
	- [BUG-040: Campos sem sanitização](#bug-040)
- [Coleta em lote](#coleta-em-lote)
	- [BUG-041: Validação de duplicatas não funciona no lote](#bug-041)
	- [BUG-042: Lote não processa arquivo e retorna sucesso aleatório](#bug-042)
	- [BUG-043: Lote não valida arquivo vazio ou fora do padrão](#bug-043)
- [Histórico](#historico)
	- [BUG-044: Histórico mostra registros duplicados](#bug-044)
	- [BUG-045: Histórico mostra dados de todos os usuários](#bug-045)
	- [BUG-046: Histórico expõe ID de outros usuários](#bug-046)
- [Segurança](#seguranca)
	- [BUG-047: Query de login vulnerável a SQL injection](#bug-047)
	- [BUG-048: /api/user expõe email e senha](#bug-048)
	- [BUG-049: Logout não destrói sessão no servidor](#bug-049)

<a id="registro"></a>
## Registro

<a id="bug-001"></a>
### BUG-001: Registro aceita caracteres especiais no username

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O sistema permite registrar usernames com caracteres especiais sem validação.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "adm!n@#"
3. Informar email válido "adm@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

#### Resultado Esperado

Registro deve rejeitar caracteres especiais no username e exibir mensagem de validação.

#### Resultado Atual

Registro aceito com username contendo caracteres especiais.

#### Impacto

Permite criação de usuários fora do padrão esperado, podendo causar falhas em buscas e integrações.

#### Sugestão de Correção (Opcional)

Validar username com regex, permitindo apenas caracteres alfanuméricos.

<a id="bug-002"></a>
### BUG-002: Registro aceita espaços no username

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O sistema aceita usernames com espaços, sem validação.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "user teste"
3. Informar email válido "userteste@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

#### Resultado Esperado

Registro deve rejeitar espaços no username e exibir mensagem de validação.

#### Resultado Atual

Registro aceito com username contendo espaços.

#### Impacto

Pode gerar inconsistências no login e em integrações externas que não aceitam espaços.

#### Sugestão de Correção (Opcional)

Aplicar trim no username e bloquear espaços internos.

<a id="bug-003"></a>
### BUG-003: Sem feedback instantâneo para email e senha

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Não há validação ou feedback imediato ao preencher email inválido ou senha fraca.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Preencher email com formato inválido "email@"
3. Preencher senha fraca "1"

#### Resultado Esperado

Exibir feedback instantâneo para email inválido e senha fraca.

#### Resultado Atual

Nenhuma validação ou feedback imediato nos campos enquanto digita.

#### Impacto

Usuário só descobre erros após enviar o formulário, aumentando retrabalho.

<a id="bug-004"></a>
### BUG-004: Sem regra de senha (aceita qualquer valor)

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O sistema aceita senhas fracas, sem critérios mínimos.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "userfraco"
3. Informar email "userfraco@test.com"
4. Informar senha "1"
5. Clicar em "Registrar"

#### Resultado Esperado

Registro deve validar política de senha (mínimo de caracteres, letras e números).

#### Resultado Atual

Registro aceito com senha fraca.

#### Impacto

Reduz a segurança das contas e facilita ataques de força bruta.

#### Sugestão de Correção (Opcional)

Aplicar regra mínima de senha no cliente e no servidor.

<a id="bug-005"></a>
### BUG-005: Registro faz login automaticamente

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

Após o registro, o usuário é autenticado automaticamente.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "usernovo"
3. Informar email "usernovo@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

#### Resultado Esperado

Sistema deve redirecionar para login ou solicitar autenticação explícita.

#### Resultado Atual

Usuário é autenticado automaticamente após o registro.

#### Impacto

Fluxo pode violar requisitos de segurança ou de confirmação de cadastro.

<a id="bug-006"></a>
### BUG-006: Campo username aceita HTML injection

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O campo de username aceita HTML e renderiza tags quando exibido.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "&lt;b&gt;Teste&lt;/b&gt;"
3. Informar email "testehtml@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"
6. Acessar local onde o username é exibido

#### Resultado Esperado

Sistema deve sanitizar entradas e exibir texto literal sem interpretar HTML.

#### Resultado Atual

Username é renderizado com HTML (ex: "Teste" em negrito).

#### Impacto

Abre possibilidade de XSS e execução de conteúdo não confiável.

#### Sugestão de Correção (Opcional)

Sanitizar e escapar HTML no backend e frontend.

<a id="bug-007"></a>
### BUG-007: Campo de email usa tipo texto

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O campo de email está configurado como texto, sem validação nativa.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de registro
2. Inspecionar o campo de email

#### Resultado Esperado

Campo de email deve usar type="email" para validação nativa.

#### Resultado Atual

Campo de email está com type="text".

#### Impacto

Usuário não recebe validação nativa do navegador.

#### Sugestão de Correção (Opcional)

Alterar type do input para "email".

<a id="login"></a>
## Login

<a id="bug-008"></a>
### BUG-008: Login sem validação de username (caracteres e espaços)

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O login permite enviar usernames com caracteres especiais ou espaços.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "adm!n@#" ou "user teste"
3. Informar senha "admin123"
4. Clicar em "Entrar"

#### Resultado Esperado

Sistema deve validar o formato do username e bloquear caracteres inválidos e espaços.

#### Resultado Atual

Sistema aceita o envio sem validar caracteres e espaços no username.

#### Impacto

Permite inconsistências de formato e comportamento inesperado no login.

<a id="bug-009"></a>
### BUG-009: Login aceita username apenas com espaços

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O sistema aceita username composto apenas por espaços.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "   "
3. Informar senha "admin123"
4. Clicar em "Entrar"

#### Resultado Esperado

Sistema deve rejeitar username vazio ou composto apenas por espaços.

#### Resultado Atual

Sistema aceita o envio com username apenas com espaços.

#### Impacto

Validação fraca permite inputs inválidos e possíveis erros de autenticação.

<a id="bug-010"></a>
### BUG-010: Mensagem de erro revela se usuário existe

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

A mensagem de erro informa se o usuário existe, permitindo enumeração.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username inexistente "ghost"
3. Informar senha "qualquer123"
4. Clicar em "Entrar"

#### Resultado Esperado

Mensagem deve ser genérica (ex: "Usuário ou senha incorretos").

#### Resultado Atual

Mensagem de erro informa que o usuário não existe.

#### Impacto

Facilita enumeração de usuários válidos.

<a id="bug-011"></a>
### BUG-011: Mensagem de erro desaparece rapidamente

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

A mensagem de erro some antes de o usuário conseguir ler.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha "senhaerrada"
4. Clicar em "Entrar"

#### Resultado Esperado

Mensagem deve permanecer visível tempo suficiente ou até ação do usuário.

#### Resultado Atual

Mensagem de erro desaparece em poucos segundos.

#### Impacto

Usuário pode não conseguir entender o erro.

<a id="bug-012"></a>
### BUG-012: Itens da tela "sambam" ao exibir/esconder mensagem

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Elementos mudam de posição quando a mensagem aparece ou some.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Forçar exibição de mensagem (ex: login inválido)
3. Observar o layout ao aparecer e desaparecer a mensagem

#### Resultado Esperado

Layout deve permanecer estável, sem deslocar elementos.

#### Resultado Atual

Elementos da tela mudam de posição quando a mensagem aparece ou some.

#### Impacto

Experiência visual inconsistente e sensação de instabilidade.

<a id="bug-013"></a>
### BUG-013: Sem bloqueio efetivo por tentativas consecutivas

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O sistema não bloqueia tentativas repetidas de login incorreto.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha "senhaerrada"
4. Repetir o login incorreto várias vezes

#### Resultado Esperado

Bloqueio após 3 a 5 tentativas, com mensagem clara de bloqueio.

#### Resultado Atual

Sistema continua aceitando tentativas sem bloqueio.

#### Impacto

Facilita ataques de força bruta.

<a id="bug-014"></a>
### BUG-014: Campos não são limpos após submit

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Os campos do formulário permanecem preenchidos após a tentativa.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin" e senha "senhaerrada"
3. Clicar em "Entrar"

#### Resultado Esperado

Campos devem ser limpos após tentativa (ou ao menos após sucesso).

#### Resultado Atual

Campos permanecem preenchidos após a tentativa.

#### Impacto

Pode expor credenciais em tela e atrapalhar novas tentativas.

<a id="bug-015"></a>
### BUG-015: Login aceita senha errada após várias tentativas

**Severidade**: Crítica
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Após várias tentativas, o login pode ser aceito com senha incorreta.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha incorreta repetidamente (ex: 10 tentativas)
4. Observar se alguma tentativa é aceita

#### Resultado Esperado

Login deve rejeitar sempre credenciais inválidas.

#### Resultado Atual

Em algumas tentativas, o login é aceito com senha incorreta.

#### Impacto

Permite bypass de autenticação.

#### Sugestão de Correção (Opcional)

Remover lógica aleatória e validar senha de forma determinística.

<a id="bug-016"></a>
### BUG-016: Rate limit não é resetado após login bem-sucedido

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O contador de tentativas continua acumulado mesmo após login correto.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer 2 tentativas de login inválidas
2. Fazer login com credenciais válidas
3. Repetir login inválido

#### Resultado Esperado

Contador deve ser resetado após login bem-sucedido.

#### Resultado Atual

Contador de tentativas continua acumulado.

#### Impacto

Usuário pode sofrer bloqueio indevido após tentativas antigas.

<a id="resetar-senha"></a>
## Resetar senha

<a id="bug-017"></a>
### BUG-017: Reset de senha sem verificação de segurança

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Qualquer pessoa pode resetar a senha de outro usuário apenas informando o username.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

#### Resultado Esperado

O sistema deve exigir verificação de identidade (email, token ou confirmação adicional).

#### Resultado Atual

Senha é alterada sem verificação adicional.

#### Impacto

Qualquer usuário pode comprometer contas de terceiros.

#### Sugestão de Correção (Opcional)

Implementar fluxo com token de verificação e confirmação por email.

<a id="bug-018"></a>
### BUG-018: Reset de senha aceita usuário vazio

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O formulário permite envio com usuário vazio e retorna "Usuário não encontrado".

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Deixar o campo de usuário vazio
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

#### Resultado Esperado

Sistema deve validar campo obrigatório e exibir mensagem de validação.

#### Resultado Atual

Mensagem exibida: "Usuário não encontrado".

#### Impacto

Feedback incorreto e validação insuficiente.

<a id="bug-019"></a>
### BUG-019: Reset de senha aceita senha vazia

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O formulário permite resetar a senha para um valor vazio.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Deixar a nova senha vazia
5. Clicar em "Resetar Senha"

#### Resultado Esperado

Sistema deve bloquear envio com senha vazia e exibir mensagem de validação.

#### Resultado Atual

Senha é alterada para valor vazio.

#### Impacto

Conta fica vulnerável, permitindo login sem senha.

<a id="bug-020"></a>
### BUG-020: Reset de senha sem regra para nova senha

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O reset aceita senhas fracas sem validação.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "1"
5. Clicar em "Resetar Senha"

#### Resultado Esperado

Sistema deve exigir política de senha mínima.

#### Resultado Atual

Senha fraca é aceita.

#### Impacto

Reduz a segurança das contas.

#### Sugestão de Correção (Opcional)

Aplicar regras mínimas no backend e no frontend.

<a id="bug-021"></a>
### BUG-021: Reset de senha sem confirmação de senha

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O fluxo de reset não exige confirmação da nova senha.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

#### Resultado Esperado

Sistema deve solicitar confirmação da senha para evitar erros de digitação.

#### Resultado Atual

Senha é alterada sem confirmação.

#### Impacto

Usuário pode definir senha incorreta sem perceber.

<a id="dashboard"></a>
## Dashboard

<a id="bug-022"></a>
### BUG-022: Painel administrativo visível para não-admins

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O painel administrativo é exibido para usuários sem permissão de admin.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login com usuário comum
2. Acessar o dashboard
3. Observar a seção administrativa

#### Resultado Esperado

Seção administrativa deve estar oculta para usuários não-admins.

#### Resultado Atual

Seção administrativa é visível para qualquer usuário.

#### Impacto

Exposição de funcionalidades que não deveriam ser acessíveis.

<a id="bug-023"></a>
### BUG-023: Painel exibe senha de todos os usuários

**Severidade**: Crítica
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Ao carregar usuários, o painel exibe as senhas de todos.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Clicar em "Carregar Usuários"
3. Observar os dados exibidos

#### Resultado Esperado

Senhas nunca devem ser exibidas no painel.

#### Resultado Atual

Senhas de todos os usuários são exibidas.

#### Impacto

Exposição de credenciais de todos os usuários.

<a id="bug-024"></a>
### BUG-024: Senha do usuário exibida em informações do usuário

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

A seção "Informações do usuário" exibe a senha do usuário logado.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Verificar a seção "Informações do usuário"

#### Resultado Esperado

Senha não deve ser exibida na interface.

#### Resultado Atual

Senha é exibida em texto.

#### Impacto

Exposição de informação sensível na UI.

<a id="bug-025"></a>
### BUG-025: Botão de sair com tamanho excessivo

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O botão de sair ocupa espaço desproporcional na interface.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Observar o botão "Sair"

#### Resultado Esperado

Botão deve ter tamanho proporcional ao layout.

#### Resultado Atual

Botão aparece grande demais, afetando a usabilidade.

#### Impacto

Compromete a estética e a experiência do usuário.

<a id="bug-026"></a>
### BUG-026: Sessão muito longa mesmo sem lembrar-me

**Severidade**: Média
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Sessão permanece ativa por muito tempo mesmo sem marcar "Lembrar-me".

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login sem marcar "Lembrar-me"
2. Aguardar tempo prolongado
3. Recarregar a página

#### Resultado Esperado

Sessão deve expirar em tempo razoável quando "Lembrar-me" não é marcado.

#### Resultado Atual

Sessão permanece válida por tempo excessivo.

#### Impacto

Aumenta risco de acesso indevido em máquinas compartilhadas.

<a id="bug-027"></a>
### BUG-027: Botão de dashboard dentro do dashboard

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

A interface exibe um botão redundante de dashboard dentro do próprio dashboard.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Observar a navegação ou botões disponíveis

#### Resultado Esperado

Não exibir botão redundante para a página atual.

#### Resultado Atual

Botão de dashboard aparece dentro do dashboard.

#### Impacto

Poluição visual e confusão na navegação.

<a id="bug-028"></a>
### BUG-028: Endpoint /user retorna senha

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

A resposta do endpoint retorna a senha do usuário.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login
2. Abrir DevTools > Network
3. Inspecionar resposta de "/user"

#### Resultado Esperado

Senha não deve ser retornada pela API.

#### Resultado Atual

Resposta inclui o campo "password".

#### Impacto

Exposição de credenciais via API.

<a id="bug-029"></a>
### BUG-029: Senha em texto no localStorage

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Os dados do usuário, incluindo senha, são armazenados no localStorage.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login
2. Abrir DevTools > Application > localStorage
3. Verificar o objeto "user"

#### Resultado Esperado

Senha não deve ser armazenada no localStorage.

#### Resultado Atual

Senha aparece em texto no objeto armazenado.

#### Impacto

Exposição de credenciais em storage local.

<a id="bug-030"></a>
### BUG-030: Bypass por query permite acessar dashboard e dados

**Severidade**: Crítica
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

É possível acessar o dashboard sem sessão usando query param.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Abrir o navegador em uma nova sessão (sem login)
2. Acessar "/dashboard?admin=true"
3. Observar o conteúdo exibido

#### Resultado Esperado

Sistema deve redirecionar para login quando não há sessão.

#### Resultado Atual

Dashboard é exibido com dados sensíveis.

#### Impacto

Permite acesso não autorizado a dados de todos os usuários.

<a id="bug-031"></a>
### BUG-031: Bypass sem sessão mantém acesso ao dashboard

**Severidade**: Crítica
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Mesmo sem sessão válida, o dashboard continua acessível via bypass.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Encerrar sessão e limpar cookies
2. Acessar "/dashboard?admin=true"
3. Observar que o dashboard é exibido

#### Resultado Esperado

Sistema deve exigir sessão válida e redirecionar para login.

#### Resultado Atual

Dashboard é exibido sem sessão.

#### Impacto

Facilita acesso não autorizado ao sistema.

<a id="coleta-dados-individual"></a>
## Coleta de dados individual

<a id="bug-032"></a>
### BUG-032: Campos obrigatórios sem indicação

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Campos obrigatórios não estão marcados com indicação visual (ex: *).

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Observar os campos do formulário

#### Resultado Esperado

Campos obrigatórios devem estar claramente indicados.

#### Resultado Atual

Campos obrigatórios não possuem indicação visual.

#### Impacto

Usuário pode não entender quais campos são obrigatórios.

<a id="bug-033"></a>
### BUG-033: Nota aceita valores maiores que 10

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

Campo de nota aceita valores acima do limite permitido (0 a 10).

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota com valor "11"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

#### Resultado Esperado

Sistema deve rejeitar notas acima de 10.

#### Resultado Atual

Nota acima de 10 é aceita.

#### Impacto

Dados inconsistentes na avaliação.

<a id="bug-034"></a>
### BUG-034: Nota e campos numéricos aceitam valores negativos

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

Campos numéricos aceitam valores negativos.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota "-1"
3. Informar taxa de conclusão "-10"
4. Preencher os demais campos obrigatórios
5. Enviar a coleta

#### Resultado Esperado

Sistema deve rejeitar valores negativos.

#### Resultado Atual

Valores negativos são aceitos.

#### Impacto

Dados inválidos registrados no sistema.

<a id="bug-035"></a>
### BUG-035: Permite enviar sem status

**Severidade**: Baixa
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O formulário permite envio sem selecionar status.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Preencher os campos obrigatórios
3. Não selecionar o status
4. Enviar a coleta

#### Resultado Esperado

Sistema deve exigir seleção de status.

#### Resultado Atual

Coleta é enviada sem status.

#### Impacto

Coletas ficam registradas como "Em progresso", mas isso não é informado pelo usuário.

<a id="bug-036"></a>
### BUG-036: Nota e campos numéricos aceitam potência

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

Campos numéricos aceitam notação de potência (ex: 2e10).

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota "2e10"
3. Informar taxa de conclusão "1e3"
4. Preencher os demais campos obrigatórios
5. Enviar a coleta

#### Resultado Esperado

Sistema deve rejeitar valores fora do formato esperado.

#### Resultado Atual

Valores em notação científica são aceitos.

#### Impacto

Dados inconsistentes podem ser gravados com risco de estouro de memória em caso de registro de números muito grandes (facilitado pela potência).

<a id="bug-037"></a>
### BUG-037: Nome aceita números e caracteres especiais

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

O campo de nome aceita números e caracteres especiais.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nome "Joao123@#"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

#### Resultado Esperado

Sistema deve restringir o campo de nome a letras e espaços.

#### Resultado Atual

Nome com números e caracteres especiais é aceito.

#### Impacto

Dados de beneficiário inconsistentes.

<a id="bug-038"></a>
### BUG-038: Sem retorno para o dashboard a partir da coleta

**Severidade**: Baixa
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Não há opção clara de voltar ao dashboard na tela de coleta.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Tentar localizar um botão ou link de retorno ao dashboard

#### Resultado Esperado

Deve existir um caminho de retorno ao dashboard.

#### Resultado Atual

Não há opção visível para voltar ao dashboard.

#### Impacto

Navegação confusa e retenção indevida na tela.

<a id="bug-039"></a>
### BUG-039: Campos sem limite de caracteres

**Severidade**: Média
**Categoria**: UX/UI
**Status**: Aberto

#### Descrição

Nenhum campo possui limite de caracteres, permitindo entradas excessivamente longas.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Preencher os campos com textos muito longos (ex: 5.000+ caracteres)
3. Enviar a coleta

#### Resultado Esperado

Campos devem limitar tamanho e bloquear entradas acima do máximo permitido.

#### Resultado Atual

Campos aceitam qualquer quantidade de caracteres.

#### Impacto

Risco de inconsistência nos dados e degradação de performance.

<a id="bug-040"></a>
### BUG-040: Campos sem sanitização

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

Os campos não passam por sanitização, permitindo entrada de conteúdo potencialmente malicioso.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar texto com HTML/JS nos campos (ex: observações)
3. Enviar a coleta
4. Verificar a exibição do conteúdo no histórico

#### Resultado Esperado

Conteúdo deve ser sanitizado e exibido como texto simples.

#### Resultado Atual

Campos aceitam conteúdo sem sanitização.

#### Impacto

Risco de XSS e exposição de usuários.

<a id="coleta-em-lote"></a>
## Coleta em lote

<a id="bug-041"></a>
### BUG-041: Validação de duplicatas não funciona no lote

**Severidade**: Alta
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

Mesmo com a opção de validar duplicatas, o sistema não identifica registros repetidos no CSV.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Marcar a opção "Validar duplicatas"
3. Enviar um CSV com linhas duplicadas

#### Resultado Esperado

Sistema deve reportar duplicatas e impedir a inserção dos registros repetidos.

#### Resultado Atual

Duplicatas não são reportadas e o processamento segue normalmente.

#### Impacto

Dados inconsistentes e duplicados no sistema.

<a id="bug-042"></a>
### BUG-042: Lote não processa arquivo e retorna sucesso aleatório

**Severidade**: Alta
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O upload em lote não processa o arquivo enviado. O sistema sempre retorna sucesso e uma quantidade aleatória de registros inseridos.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Enviar um arquivo CSV válido
3. Enviar um arquivo CSV vazio ou inválido
4. Comparar as respostas

#### Resultado Esperado

Sistema deve processar o arquivo, validar dados e retornar contagem real de inserções/erros.

#### Resultado Atual

Sistema retorna sucesso e número aleatório de inserções, independente do arquivo.

#### Impacto

Falsa percepção de processamento e risco de perda de dados.

<a id="bug-043"></a>
### BUG-043: Lote não valida arquivo vazio ou fora do padrão

**Severidade**: Alta
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

O sistema aceita CSV vazio ou fora do padrão esperado sem retornar erro.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Enviar um CSV vazio
3. Enviar um CSV com colunas fora do padrão esperado

#### Resultado Esperado

Sistema deve rejeitar o arquivo e informar os erros encontrados.

#### Resultado Atual

Upload é aceito sem validação e sem erro.

#### Impacto

Dados inválidos podem ser processados sem detecção.

<a id="historico"></a>
## Histórico

<a id="bug-044"></a>
### BUG-044: Histórico mostra registros duplicados

**Severidade**: Média
**Categoria**: Lógica
**Status**: Aberto

#### Descrição

A listagem de histórico exibe registros duplicados após salvar uma coleta.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login e acessar o histórico
2. Registrar uma nova coleta
3. Voltar ao histórico
4. Observar a listagem de registros

#### Resultado Esperado

Cada registro deve aparecer apenas uma vez no histórico.

#### Resultado Atual

O mesmo registro aparece duplicado na listagem.

#### Impacto

Confunde o usuário e pode levar à interpretação incorreta dos dados.

<a id="bug-045"></a>
### BUG-045: Histórico mostra dados de todos os usuários

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

O histórico lista coletas de todos os usuários, sem filtrar por sessão.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login com um usuário comum
2. Acessar o histórico
3. Observar registros que não pertencem ao usuário logado

#### Resultado Esperado

Histórico deve listar apenas coletas do usuário autenticado.

#### Resultado Atual

Histórico exibe coletas de outros usuários.

#### Impacto

Exposição indevida de dados de terceiros.

<a id="bug-046"></a>
### BUG-046: Histórico expõe ID de outros usuários

**Severidade**: Alta
**Categoria**: Segurança
**Status**: Aberto

#### Descrição

A listagem do histórico exibe o ID de beneficiários relacionados a outros usuários.

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Fazer login com um usuário comum
2. Acessar o histórico
3. Verificar IDs de beneficiários que não pertencem ao usuário logado

#### Resultado Esperado

IDs de beneficiários devem ser visíveis apenas para o usuário dono da coleta.

#### Resultado Atual

IDs de beneficiários de outros usuários são exibidos.

#### Impacto

Vazamento de dados sensíveis.

<a id="seguranca"></a>
## Segurança

<a id="bug-047"></a>
### BUG-047: Query de login vulnerável a SQL injection

**Severidade**: Critica
**Categoria**: Seguranca
**Status**: Aberto

#### Descrição

O login monta a query com interpolação direta de `username` e `password`, permitindo SQL injection. Evidência baseada em análise de código.

#### Evidência de código

```js
const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
console.log("Query executada:", query);
```

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Revisar o código da rota de login

#### Resultado Esperado

Query deve usar parâmetros preparados (prepared statements) ou ORM seguro.

#### Resultado Atual

Query é montada por concatenação/interpolação direta.

#### Impacto

Permite alterar a consulta e burlar autenticação ou expor dados.

#### Sugestão de Correção (Opcional)

Usar prepared statements/ORM e sanitizar entradas.

<a id="bug-048"></a>
### BUG-048: /api/user expõe email e senha

**Severidade**: Alta
**Categoria**: Seguranca
**Status**: Aberto

#### Descrição

O endpoint retorna o objeto completo do usuário, incluindo `email` e `password`. Evidência baseada em análise de código.

#### Evidência de código

```js
app.get("/api/user", (req, res) => {
	const userId = req.session.userId || req.query.userId;
	const user = users.find((u) => u.id === parseInt(userId));

	if (user) {
		return res.json({
			success: true,
			user: user,
		});
	}
});
```

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Revisar o código do endpoint `/api/user`

#### Resultado Esperado

Resposta deve omitir campos sensíveis (ex: `password`) e minimizar dados.

#### Resultado Atual

Resposta retorna todo o objeto do usuário.

#### Impacto

Exposição de credenciais e dados pessoais no response.

#### Sugestão de Correção (Opcional)

Retornar apenas campos necessários e remover `password` do payload.

<a id="bug-049"></a>
### BUG-049: Logout não destrói sessão no servidor

**Severidade**: Alta
**Categoria**: Seguranca
**Status**: Aberto

#### Descrição

O logout apenas limpa `userId`, sem destruir a sessão. O cookie de sessão permanece válido. Evidência baseada em análise de código.

#### Evidência de código

```js
app.post("/logout", (req, res) => {
	req.session.userId = null;
	res.json({ success: true, message: "Logout realizado" });
});
```

#### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

#### Passos para Reproduzir

1. Revisar o código do endpoint de logout

#### Resultado Esperado

Sessão deve ser destruída no servidor e o cookie invalidado.

#### Resultado Atual

Sessão permanece ativa no servidor e o cookie não é invalidado.

#### Impacto

Risco de reutilização de sessão e acesso indevido.

#### Sugestão de Correção (Opcional)

Usar `req.session.destroy()` e limpar o cookie no response.
