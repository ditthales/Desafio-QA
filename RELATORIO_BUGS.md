# Relatório de Bugs

# Índice

- [Registro](#registro)
	- [BUG-001: Registro aceita caracteres especiais no username](#bug-001)
	- [BUG-002: Registro aceita espaços no username](#bug-002)
	- [BUG-003: Sem feedback instantâneo para email e senha](#bug-003)
	- [BUG-004: Sem regra de senha (aceita qualquer valor)](#bug-004)
	- [BUG-005: Senha do registro sem limite de tamanho](#bug-005)
	- [BUG-006: Registro faz login automaticamente](#bug-006)
	- [BUG-007: Campo username aceita HTML injection](#bug-007)
	- [BUG-008: Campo de email usa tipo texto](#bug-008)
- [Login](#login)
	- [BUG-009: Login sem validação de username (caracteres e espaços)](#bug-009)
	- [BUG-010: Login aceita username apenas com espaços](#bug-010)
	- [BUG-011: Mensagem de erro revela se usuário existe](#bug-011)
	- [BUG-012: Mensagem de erro desaparece rapidamente](#bug-012)
	- [BUG-013: Itens da tela "sambam" ao exibir/esconder mensagem](#bug-013)
	- [BUG-014: Sem bloqueio efetivo por tentativas consecutivas](#bug-014)
	- [BUG-015: Campos não são limpos após submit](#bug-015)
	- [BUG-016: Login aceita senha errada após várias tentativas](#bug-016)
	- [BUG-017: Rate limit não é resetado após login bem-sucedido](#bug-017)
- [Resetar senha](#resetar-senha)
	- [BUG-018: Reset de senha sem verificação de segurança](#bug-018)
	- [BUG-019: Reset de senha aceita usuário vazio](#bug-019)
	- [BUG-020: Reset de senha aceita senha vazia](#bug-020)
	- [BUG-021: Reset de senha sem regra para nova senha](#bug-021)
	- [BUG-022: Reset de senha sem confirmação de senha](#bug-022)
- [Dashboard](#dashboard)
	- [BUG-023: Painel administrativo visível para não-admins](#bug-023)
	- [BUG-024: Painel exibe senha de todos os usuários](#bug-024)
	- [BUG-025: Senha do usuário exibida em informações do usuário](#bug-025)
	- [BUG-026: Botão de sair com tamanho excessivo](#bug-026)
	- [BUG-027: Sessão muito longa mesmo sem lembrar-me](#bug-027)
	- [BUG-028: Botão de dashboard dentro do dashboard](#bug-028)
	- [BUG-029: Endpoint /user retorna senha](#bug-029)
	- [BUG-030: Senha em texto no localStorage](#bug-030)
	- [BUG-031: Bypass por query permite acessar dashboard e dados](#bug-031)
	- [BUG-032: Bypass sem sessão mantém acesso ao dashboard](#bug-032)
- [Coleta de dados individual](#coleta-dados-individual)
	- [BUG-033: Campos obrigatórios sem indicação](#bug-033)
	- [BUG-034: Nota aceita valores maiores que 10](#bug-034)
	- [BUG-035: Nota e campos numéricos aceitam valores negativos](#bug-035)
	- [BUG-036: Taxa de conclusão aceita valores acima de 100](#bug-036)
	- [BUG-037: Frequência de presença aceita valores acima de 100](#bug-037)
	- [BUG-038: Backend aceita indicadores nulos na coleta](#bug-038)
	- [BUG-039: Permite enviar sem status](#bug-039)
	- [BUG-040: Nota e campos numéricos aceitam potência](#bug-040)
	- [BUG-041: Nome aceita números e caracteres especiais](#bug-041)
	- [BUG-042: Sem retorno para o dashboard a partir da coleta](#bug-042)
	- [BUG-043: Campos sem limite de caracteres](#bug-043)
	- [BUG-044: Campos sem sanitização](#bug-044)
- [Coleta em lote](#coleta-em-lote)
	- [BUG-045: Validação de duplicatas não funciona no lote](#bug-045)
	- [BUG-046: Lote não processa arquivo e retorna sucesso aleatório](#bug-046)
	- [BUG-047: Lote não valida arquivo vazio ou fora do padrão](#bug-047)
	- [BUG-048: Upload em lote aceita arquivos executáveis](#bug-048)
- [Histórico](#historico)
	- [BUG-049: Histórico mostra registros duplicados](#bug-049)
	- [BUG-050: Histórico mostra dados de todos os usuários](#bug-050)
	- [BUG-051: Histórico expõe ID de outros usuários](#bug-051)
- [Segurança](#seguranca)
	- [BUG-052: Session secret fraco e exposto no código](#bug-052)
	- [BUG-053: Cookie de sessão sem proteção httpOnly/secure](#bug-053)
	- [BUG-054: /api/users protegido apenas por secret na query](#bug-054)
	- [BUG-055: Secret admin123 exposto no dashboard.js público](#bug-055)
	- [BUG-056: IDOR via query param no /api/user](#bug-056)
	- [BUG-057: Query de login vulnerável a SQL injection](#bug-057)
	- [BUG-058: /api/user expõe email e senha](#bug-058)
	- [BUG-059: Logout não destrói sessão no servidor](#bug-059)

<a id="registro"></a>
# Registro

<a id="bug-001"></a>
## BUG-001: Registro aceita caracteres especiais no username

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

O sistema permite registrar usernames com caracteres especiais sem validação.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "adm!n@#"
3. Informar email válido "adm@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

### Resultado Esperado

Registro deve rejeitar caracteres especiais no username e exibir mensagem de validação.

### Resultado Atual

Registro aceito com username contendo caracteres especiais.

### Impacto

Permite criação de usuários fora do padrão esperado, podendo causar falhas em buscas e integrações.

### Sugestão de Correção (Opcional)

Validar username com regex, permitindo apenas caracteres alfanuméricos.

<a id="bug-002"></a>
## BUG-002: Registro aceita espaços no username

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

O sistema aceita usernames com espaços, sem validação.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "user teste"
3. Informar email válido "userteste@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

### Resultado Esperado

Registro deve rejeitar espaços no username e exibir mensagem de validação.

### Resultado Atual

Registro aceito com username contendo espaços.

### Impacto

Pode gerar inconsistências no login e em integrações externas que não aceitam espaços.

### Sugestão de Correção (Opcional)

Aplicar trim no username e bloquear espaços internos.

<a id="bug-003"></a>
## BUG-003: Sem feedback instantâneo para email e senha

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

Não há validação ou feedback imediato ao preencher email inválido ou senha fraca.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Preencher email com formato inválido "email@"
3. Preencher senha fraca "1"

### Resultado Esperado

Exibir feedback instantâneo para email inválido e senha fraca.

### Resultado Atual

Nenhuma validação ou feedback imediato nos campos enquanto digita.

### Impacto

Usuário só descobre erros após enviar o formulário, aumentando retrabalho.

<a id="bug-004"></a>
## BUG-004: Sem regra de senha (aceita qualquer valor)

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O sistema aceita senhas fracas, sem critérios mínimos.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "userfraco"
3. Informar email "userfraco@test.com"
4. Informar senha "1"
5. Clicar em "Registrar"

### Resultado Esperado

Registro deve validar política de senha (mínimo de caracteres, letras e números).

### Resultado Atual

Registro aceito com senha fraca.

### Impacto

Reduz a segurança das contas e facilita ataques de força bruta.

### Sugestão de Correção (Opcional)

Aplicar regra mínima de senha no cliente e no servidor.

<a id="bug-005"></a>
## BUG-005: Senha do registro sem limite de tamanho

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O cadastro aceita senhas muito longas sem limite máximo.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username e email válidos
3. Informar senha com milhares de caracteres
4. Clicar em "Registrar"

### Resultado Esperado

Cadastro deve limitar o tamanho da senha e bloquear valores excessivos.

### Resultado Atual

Cadastro é realizado mesmo com senha muito longa.

### Impacto

Pode causar uso excessivo de CPU/memória no hash de senha e abrir risco de DoS.

### Sugestão de Correção (Opcional)

Definir limite máximo de caracteres e validar no cliente e no servidor.

<a id="bug-006"></a>
## BUG-006: Registro faz login automaticamente

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

Após o registro, o usuário é autenticado automaticamente.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "usernovo"
3. Informar email "usernovo@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"

### Resultado Esperado

Sistema deve redirecionar para login ou solicitar autenticação explícita.

### Resultado Atual

Usuário é autenticado automaticamente após o registro.

### Impacto

Fluxo pode violar requisitos de segurança ou de confirmação de cadastro.

<a id="bug-007"></a>
## BUG-007: Campo username aceita HTML injection

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O campo de username aceita HTML e renderiza tags quando exibido.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Informar username "&lt;b&gt;Teste&lt;/b&gt;"
3. Informar email "testehtml@test.com"
4. Informar senha "Admin123!"
5. Clicar em "Registrar"
6. Acessar local onde o username é exibido

### Resultado Esperado

Sistema deve sanitizar entradas e exibir texto literal sem interpretar HTML.

### Resultado Atual

Username é renderizado com HTML (ex: "Teste" em negrito).

### Impacto

Abre possibilidade de XSS e execução de conteúdo não confiável.

### Sugestão de Correção (Opcional)

Sanitizar e escapar HTML no backend e frontend.

<a id="bug-008"></a>
## BUG-008: Campo de email usa tipo texto

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

O campo de email está configurado como texto, sem validação nativa.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de registro
2. Inspecionar o campo de email

### Resultado Esperado

Campo de email deve usar type="email" para validação nativa.

### Resultado Atual

Campo de email está com type="text".

### Impacto

Usuário não recebe validação nativa do navegador.

### Sugestão de Correção (Opcional)

Alterar type do input para "email".

<a id="login"></a>
# Login

<a id="bug-009"></a>
## BUG-009: Login sem validação de username (caracteres e espaços)

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

O login permite enviar usernames com caracteres especiais ou espaços.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "adm!n@#" ou "user teste"
3. Informar senha "admin123"
4. Clicar em "Entrar"

### Resultado Esperado

Sistema deve validar o formato do username e bloquear caracteres inválidos e espaços.

### Resultado Atual

Sistema aceita o envio sem validar caracteres e espaços no username.

### Impacto

Permite inconsistências de formato e comportamento inesperado no login.

<a id="bug-010"></a>
## BUG-010: Login aceita username apenas com espaços

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

O sistema aceita username composto apenas por espaços.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "   "
3. Informar senha "admin123"
4. Clicar em "Entrar"

### Resultado Esperado

Sistema deve rejeitar username vazio ou composto apenas por espaços.

### Resultado Atual

Sistema aceita o envio com username apenas com espaços.

### Impacto

Validação fraca permite inputs inválidos e possíveis erros de autenticação.

<a id="bug-011"></a>
## BUG-011: Mensagem de erro revela se usuário existe

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

A mensagem de erro informa se o usuário existe, permitindo enumeração.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username inexistente "ghost"
3. Informar senha "qualquer123"
4. Clicar em "Entrar"

### Resultado Esperado

Mensagem deve ser genérica (ex: "Usuário ou senha incorretos").

### Resultado Atual

Mensagem de erro informa que o usuário não existe.

### Impacto

Facilita enumeração de usuários válidos.

<a id="bug-012"></a>
## BUG-012: Mensagem de erro desaparece rapidamente

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

A mensagem de erro some antes de o usuário conseguir ler.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha "senhaerrada"
4. Clicar em "Entrar"

### Resultado Esperado

Mensagem deve permanecer visível tempo suficiente ou até ação do usuário.

### Resultado Atual

Mensagem de erro desaparece em poucos segundos.

### Impacto

Usuário pode não conseguir entender o erro.

<a id="bug-013"></a>
## BUG-013: Itens da tela "sambam" ao exibir/esconder mensagem

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

Elementos mudam de posição quando a mensagem aparece ou some.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Forçar exibição de mensagem (ex: login inválido)
3. Observar o layout ao aparecer e desaparecer a mensagem

### Resultado Esperado

Layout deve permanecer estável, sem deslocar elementos.

### Resultado Atual

Elementos da tela mudam de posição quando a mensagem aparece ou some.

### Impacto

Experiência visual inconsistente e sensação de instabilidade.

<a id="bug-014"></a>
## BUG-014: Sem bloqueio efetivo por tentativas consecutivas

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O sistema não bloqueia tentativas repetidas de login incorreto.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha "senhaerrada"
4. Repetir o login incorreto várias vezes

### Resultado Esperado

Bloqueio após 3 a 5 tentativas, com mensagem clara de bloqueio.

### Resultado Atual

Sistema continua aceitando tentativas sem bloqueio.

### Impacto

Facilita ataques de força bruta.

<a id="bug-015"></a>
## BUG-015: Campos não são limpos após submit

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

Os campos do formulário permanecem preenchidos após a tentativa.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin" e senha "senhaerrada"
3. Clicar em "Entrar"

### Resultado Esperado

Campos devem ser limpos após tentativa (ou ao menos após sucesso).

### Resultado Atual

Campos permanecem preenchidos após a tentativa.

### Impacto

Pode expor credenciais em tela e atrapalhar novas tentativas.

<a id="bug-016"></a>
## BUG-016: Login aceita senha errada após várias tentativas

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

Após várias tentativas, o login pode ser aceito com senha incorreta.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Informar username "admin"
3. Informar senha incorreta repetidamente (ex: 10 tentativas)
4. Observar se alguma tentativa é aceita

### Resultado Esperado

Login deve rejeitar sempre credenciais inválidas.

### Resultado Atual

Em algumas tentativas, o login é aceito com senha incorreta.

### Impacto

Permite bypass de autenticação.

### Sugestão de Correção (Opcional)

Remover lógica aleatória e validar senha de forma determinística.

<a id="bug-017"></a>
## BUG-017: Rate limit não é resetado após login bem-sucedido

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

O contador de tentativas continua acumulado mesmo após login correto.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer 2 tentativas de login inválidas
2. Fazer login com credenciais válidas
3. Repetir login inválido

### Resultado Esperado

Contador deve ser resetado após login bem-sucedido.

### Resultado Atual

Contador de tentativas continua acumulado.

### Impacto

Usuário pode sofrer bloqueio indevido após tentativas antigas.

<a id="resetar-senha"></a>
# Resetar senha

<a id="bug-018"></a>
## BUG-018: Reset de senha sem verificação de segurança

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

Qualquer pessoa pode resetar a senha de outro usuário apenas informando o username.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

### Resultado Esperado

O sistema deve exigir verificação de identidade (email, token ou confirmação adicional).

### Resultado Atual

Senha é alterada sem verificação adicional.

### Impacto

Qualquer usuário pode comprometer contas de terceiros.

### Sugestão de Correção (Opcional)

Implementar fluxo com token de verificação e confirmação por email.

<a id="bug-019"></a>
## BUG-019: Reset de senha aceita usuário vazio

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

O formulário permite envio com usuário vazio e retorna "Usuário não encontrado".

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Deixar o campo de usuário vazio
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

### Resultado Esperado

Sistema deve validar campo obrigatório e exibir mensagem de validação.

### Resultado Atual

Mensagem exibida: "Usuário não encontrado".

### Impacto

Feedback incorreto e validação insuficiente.

<a id="bug-020"></a>
## BUG-020: Reset de senha aceita senha vazia

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O formulário permite resetar a senha para um valor vazio.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Deixar a nova senha vazia
5. Clicar em "Resetar Senha"

### Resultado Esperado

Sistema deve bloquear envio com senha vazia e exibir mensagem de validação.

### Resultado Atual

Senha é alterada para valor vazio.

### Impacto

Conta fica vulnerável, permitindo login sem senha.

<a id="bug-021"></a>
## BUG-021: Reset de senha sem regra para nova senha

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O reset aceita senhas fracas sem validação.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "1"
5. Clicar em "Resetar Senha"

### Resultado Esperado

Sistema deve exigir política de senha mínima.

### Resultado Atual

Senha fraca é aceita.

### Impacto

Reduz a segurança das contas.

### Sugestão de Correção (Opcional)

Aplicar regras mínimas no backend e no frontend.

<a id="bug-022"></a>
## BUG-022: Reset de senha sem confirmação de senha

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

O fluxo de reset não exige confirmação da nova senha.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de login
2. Ir para "Resetar Senha"
3. Informar username "admin"
4. Informar nova senha "NovaSenha123!"
5. Clicar em "Resetar Senha"

### Resultado Esperado

Sistema deve solicitar confirmação da senha para evitar erros de digitação.

### Resultado Atual

Senha é alterada sem confirmação.

### Impacto

Usuário pode definir senha incorreta sem perceber.

<a id="dashboard"></a>
# Dashboard

<a id="bug-023"></a>
## BUG-023: Painel administrativo visível para não-admins

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

O painel administrativo é exibido para usuários sem permissão de admin.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login com usuário comum
2. Acessar o dashboard
3. Observar a seção administrativa

### Resultado Esperado

Seção administrativa deve estar oculta para usuários não-admins.

### Resultado Atual

Seção administrativa é visível para qualquer usuário.

### Impacto

Exposição de funcionalidades que não deveriam ser acessíveis.

<a id="bug-024"></a>
## BUG-024: Painel exibe senha de todos os usuários

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

Ao carregar usuários, o painel exibe as senhas de todos.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Clicar em "Carregar Usuários"
3. Observar os dados exibidos

### Resultado Esperado

Senhas nunca devem ser exibidas no painel.

### Resultado Atual

Senhas de todos os usuários são exibidas.

### Impacto

Exposição de credenciais de todos os usuários.

<a id="bug-025"></a>
## BUG-025: Senha do usuário exibida em informações do usuário

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

A seção "Informações do usuário" exibe a senha do usuário logado.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Verificar a seção "Informações do usuário"

### Resultado Esperado

Senha não deve ser exibida na interface.

### Resultado Atual

Senha é exibida em texto.

### Impacto

Exposição de informação sensível na UI.

<a id="bug-026"></a>
## BUG-026: Botão de sair com tamanho excessivo

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

O botão de sair ocupa espaço desproporcional na interface.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Observar o botão "Sair"

### Resultado Esperado

Botão deve ter tamanho proporcional ao layout.

### Resultado Atual

Botão aparece grande demais, afetando a usabilidade.

### Impacto

Compromete a estética e a experiência do usuário.

<a id="bug-027"></a>
## BUG-027: Sessão muito longa mesmo sem lembrar-me

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Segurança | Aberto |

### Descrição

Sessão permanece ativa por muito tempo mesmo sem marcar "Lembrar-me".

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login sem marcar "Lembrar-me"
2. Aguardar tempo prolongado
3. Recarregar a página

### Resultado Esperado

Sessão deve expirar em tempo razoável quando "Lembrar-me" não é marcado.

### Resultado Atual

Sessão permanece válida por tempo excessivo.

### Impacto

Aumenta risco de acesso indevido em máquinas compartilhadas.

<a id="bug-028"></a>
## BUG-028: Botão de dashboard dentro do dashboard

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

A interface exibe um botão redundante de dashboard dentro do próprio dashboard.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login e acessar o dashboard
2. Observar a navegação ou botões disponíveis

### Resultado Esperado

Não exibir botão redundante para a página atual.

### Resultado Atual

Botão de dashboard aparece dentro do dashboard.

### Impacto

Poluição visual e confusão na navegação.

<a id="bug-029"></a>
## BUG-029: Endpoint /user retorna senha

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

A resposta do endpoint retorna a senha do usuário.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login
2. Abrir DevTools > Network
3. Inspecionar resposta de "/user"

### Resultado Esperado

Senha não deve ser retornada pela API.

### Resultado Atual

Resposta inclui o campo "password".

### Impacto

Exposição de credenciais via API.

<a id="bug-030"></a>
## BUG-030: Senha em texto no localStorage

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

Os dados do usuário, incluindo senha, são armazenados no localStorage.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login
2. Abrir DevTools > Application > localStorage
3. Verificar o objeto "user"

### Resultado Esperado

Senha não deve ser armazenada no localStorage.

### Resultado Atual

Senha aparece em texto no objeto armazenado.

### Impacto

Exposição de credenciais em storage local.

<a id="bug-031"></a>
## BUG-031: Bypass por query permite acessar dashboard e dados

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

É possível acessar o dashboard sem sessão usando query param.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Abrir o navegador em uma nova sessão (sem login)
2. Acessar "/dashboard?admin=true"
3. Observar o conteúdo exibido

### Resultado Esperado

Sistema deve redirecionar para login quando não há sessão.

### Resultado Atual

Dashboard é exibido com dados sensíveis.

### Impacto

Permite acesso não autorizado a dados de todos os usuários.

<a id="bug-032"></a>
## BUG-032: Bypass sem sessão mantém acesso ao dashboard

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

Mesmo sem sessão válida, o dashboard continua acessível via bypass.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Encerrar sessão e limpar cookies
2. Acessar "/dashboard?admin=true"
3. Observar que o dashboard é exibido

### Resultado Esperado

Sistema deve exigir sessão válida e redirecionar para login.

### Resultado Atual

Dashboard é exibido sem sessão.

### Impacto

Facilita acesso não autorizado ao sistema.

<a id="coleta-dados-individual"></a>
# Coleta de dados individual

<a id="bug-033"></a>
## BUG-033: Campos obrigatórios sem indicação

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

Campos obrigatórios não estão marcados com indicação visual (ex: *).

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Observar os campos do formulário

### Resultado Esperado

Campos obrigatórios devem estar claramente indicados.

### Resultado Atual

Campos obrigatórios não possuem indicação visual.

### Impacto

Usuário pode não entender quais campos são obrigatórios.

<a id="bug-034"></a>
## BUG-034: Nota aceita valores maiores que 10

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

Campo de nota aceita valores acima do limite permitido (0 a 10).

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota com valor "11"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

### Resultado Esperado

Sistema deve rejeitar notas acima de 10.

### Resultado Atual

Nota acima de 10 é aceita.

### Impacto

Dados inconsistentes na avaliação.

<a id="bug-035"></a>
## BUG-035: Nota e campos numéricos aceitam valores negativos

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

Campos numéricos aceitam valores negativos.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota "-1"
3. Informar taxa de conclusão "-10"
4. Preencher os demais campos obrigatórios
5. Enviar a coleta

### Resultado Esperado

Sistema deve rejeitar valores negativos.

### Resultado Atual

Valores negativos são aceitos.

### Impacto

Dados inválidos registrados no sistema.

<a id="bug-036"></a>
## BUG-036: Taxa de conclusão aceita valores acima de 100

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

O campo de taxa de conclusão não bloqueia valores acima de 100.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar taxa de conclusão "150"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

### Resultado Esperado

Sistema deve rejeitar taxa de conclusão acima de 100.

### Resultado Atual

Taxa de conclusão acima de 100 é aceita.

### Impacto

Indicadores ficam fora da faixa esperada e comprometem relatórios.

<a id="bug-037"></a>
## BUG-037: Frequência de presença aceita valores acima de 100

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

O campo de frequência de presença permite valores acima de 100.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar frequência de presença "120"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

### Resultado Esperado

Sistema deve rejeitar frequência de presença acima de 100.

### Resultado Atual

Frequência acima de 100 é aceita.

### Impacto

Resultados de desempenho ficam incoerentes com a realidade.

<a id="bug-038"></a>
## BUG-038: Backend aceita indicadores nulos na coleta

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

O backend aceita valores nulos para indicadores obrigatórios da coleta.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Capturar a requisição de coleta
2. Definir `taxaConclusao`, `frequencia` e `nota` como `null`
3. Reenviar a requisição

### Resultado Esperado

API deve rejeitar envio com indicadores nulos e retornar erro de validação.

### Resultado Atual

API aceita a coleta com valores nulos.

### Impacto

Dados incompletos entram no histórico e prejudicam métricas.

<a id="bug-039"></a>
## BUG-039: Permite enviar sem status

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | Lógica | Aberto |

### Descrição

O formulário permite envio sem selecionar status.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Preencher os campos obrigatórios
3. Não selecionar o status
4. Enviar a coleta

### Resultado Esperado

Sistema deve exigir seleção de status.

### Resultado Atual

Coleta é enviada sem status.

### Impacto

Coletas ficam registradas como "Em progresso", mas isso não é informado pelo usuário.

<a id="bug-040"></a>
## BUG-040: Nota e campos numéricos aceitam potência

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

Campos numéricos aceitam notação de potência (ex: 2e10).

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nota "2e10"
3. Informar taxa de conclusão "1e3"
4. Preencher os demais campos obrigatórios
5. Enviar a coleta

### Resultado Esperado

Sistema deve rejeitar valores fora do formato esperado.

### Resultado Atual

Valores em notação científica são aceitos.

### Impacto

Dados inconsistentes podem ser gravados com risco de estouro de memória em caso de registro de números muito grandes (facilitado pela potência).

<a id="bug-041"></a>
## BUG-041: Nome aceita números e caracteres especiais

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

O campo de nome aceita números e caracteres especiais.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar nome "Joao123@#"
3. Preencher os demais campos obrigatórios
4. Enviar a coleta

### Resultado Esperado

Sistema deve restringir o campo de nome a letras e espaços.

### Resultado Atual

Nome com números e caracteres especiais é aceito.

### Impacto

Dados de beneficiário inconsistentes.

<a id="bug-042"></a>
## BUG-042: Sem retorno para o dashboard a partir da coleta

| Severidade | Categoria | Status |
| --- | --- | --- |
| Baixa | UX/UI | Aberto |

### Descrição

Não há opção clara de voltar ao dashboard na tela de coleta.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Tentar localizar um botão ou link de retorno ao dashboard

### Resultado Esperado

Deve existir um caminho de retorno ao dashboard.

### Resultado Atual

Não há opção visível para voltar ao dashboard.

### Impacto

Navegação confusa e retenção indevida na tela.

<a id="bug-043"></a>
## BUG-043: Campos sem limite de caracteres

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | UX/UI | Aberto |

### Descrição

Nenhum campo possui limite de caracteres, permitindo entradas excessivamente longas.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Preencher os campos com textos muito longos (ex: 5.000+ caracteres)
3. Enviar a coleta

### Resultado Esperado

Campos devem limitar tamanho e bloquear entradas acima do máximo permitido.

### Resultado Atual

Campos aceitam qualquer quantidade de caracteres.

### Impacto

Risco de inconsistência nos dados e degradação de performance.

<a id="bug-044"></a>
## BUG-044: Campos sem sanitização

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

Os campos não passam por sanitização, permitindo entrada de conteúdo potencialmente malicioso.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a página de coleta individual
2. Informar texto com HTML/JS nos campos (ex: observações)
3. Enviar a coleta
4. Verificar a exibição do conteúdo no histórico

### Resultado Esperado

Conteúdo deve ser sanitizado e exibido como texto simples.

### Resultado Atual

Campos aceitam conteúdo sem sanitização.

### Impacto

Risco de XSS e exposição de usuários.

<a id="coleta-em-lote"></a>
# Coleta em lote

<a id="bug-045"></a>
## BUG-045: Validação de duplicatas não funciona no lote

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

Mesmo com a opção de validar duplicatas, o sistema não identifica registros repetidos no CSV.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Marcar a opção "Validar duplicatas"
3. Enviar um CSV com linhas duplicadas

### Resultado Esperado

Sistema deve reportar duplicatas e impedir a inserção dos registros repetidos.

### Resultado Atual

Duplicatas não são reportadas e o processamento segue normalmente.

### Impacto

Dados inconsistentes e duplicados no sistema.

<a id="bug-046"></a>
## BUG-046: Lote não processa arquivo e retorna sucesso aleatório

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

O upload em lote não processa o arquivo enviado. O sistema sempre retorna sucesso e uma quantidade aleatória de registros inseridos.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Enviar um arquivo CSV válido
3. Enviar um arquivo CSV vazio ou inválido
4. Comparar as respostas

### Resultado Esperado

Sistema deve processar o arquivo, validar dados e retornar contagem real de inserções/erros.

### Resultado Atual

Sistema retorna sucesso e número aleatório de inserções, independente do arquivo.

### Impacto

Falsa percepção de processamento e risco de perda de dados.

<a id="bug-047"></a>
## BUG-047: Lote não valida arquivo vazio ou fora do padrão

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Lógica | Aberto |

### Descrição

O sistema aceita CSV vazio ou fora do padrão esperado sem retornar erro.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Enviar um CSV vazio
3. Enviar um CSV com colunas fora do padrão esperado

### Resultado Esperado

Sistema deve rejeitar o arquivo e informar os erros encontrados.

### Resultado Atual

Upload é aceito sem validação e sem erro.

### Impacto

Dados inválidos podem ser processados sem detecção.

<a id="bug-048"></a>
## BUG-048: Upload em lote aceita arquivos executáveis

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

O upload em lote aceita arquivos executáveis sem bloqueio de tipo.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar a aba de coleta em lote
2. Selecionar um arquivo com extensão .exe
3. Enviar o arquivo

### Resultado Esperado

Sistema deve bloquear arquivos executáveis e retornar erro.

### Resultado Atual

Upload é aceito mesmo com arquivo executável.

### Impacto

Risco de envio de arquivos maliciosos e comprometimento do ambiente.

<a id="historico"></a>
# Histórico

<a id="bug-049"></a>
## BUG-049: Histórico mostra registros duplicados

| Severidade | Categoria | Status |
| --- | --- | --- |
| Média | Lógica | Aberto |

### Descrição

A listagem de histórico exibe registros duplicados após salvar uma coleta.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login e acessar o histórico
2. Registrar uma nova coleta
3. Voltar ao histórico
4. Observar a listagem de registros

### Resultado Esperado

Cada registro deve aparecer apenas uma vez no histórico.

### Resultado Atual

O mesmo registro aparece duplicado na listagem.

### Impacto

Confunde o usuário e pode levar à interpretação incorreta dos dados.

<a id="bug-050"></a>
## BUG-050: Histórico mostra dados de todos os usuários

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

O histórico lista coletas de todos os usuários, sem filtrar por sessão.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login com um usuário comum
2. Acessar o histórico
3. Observar registros que não pertencem ao usuário logado

### Resultado Esperado

Histórico deve listar apenas coletas do usuário autenticado.

### Resultado Atual

Histórico exibe coletas de outros usuários.

### Impacto

Exposição indevida de dados de terceiros.

<a id="bug-051"></a>
## BUG-051: Histórico expõe ID de outros usuários

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Segurança | Aberto |

### Descrição

A listagem do histórico exibe o ID de beneficiários relacionados a outros usuários.

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Fazer login com um usuário comum
2. Acessar o histórico
3. Verificar IDs de beneficiários que não pertencem ao usuário logado

### Resultado Esperado

IDs de beneficiários devem ser visíveis apenas para o usuário dono da coleta.

### Resultado Atual

IDs de beneficiários de outros usuários são exibidos.

### Impacto

Vazamento de dados sensíveis.

<a id="seguranca"></a>
# Segurança

<a id="bug-052"></a>
## BUG-052: Session secret fraco e exposto no código

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

A chave de sessão está definida com valor simples e fixo no código.

### Evidência de código

```js
secret: "123456"
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Resultado Esperado

Sessão deve usar secret forte, único e carregado por variável de ambiente.

### Resultado Atual

Secret fraco e hardcoded no servidor.

### Impacto

Permite forjar sessões e comprometer autenticação.

### Sugestão de Correção (Opcional)

Carregar o secret via variável de ambiente e usar valor forte.

<a id="bug-053"></a>
## BUG-053: Cookie de sessão sem proteção httpOnly/secure

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

O cookie de sessão é configurado com `httpOnly` e `secure` desativados.

### Evidência de código

```js
cookie: { secure: false, httpOnly: false }
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Resultado Esperado

Cookie deve ser `httpOnly: true` e `secure: true`.

### Resultado Atual

Cookie é acessível por JavaScript e transmitido sem HTTPS.

### Impacto

Facilita roubo de sessão via XSS e interceptação de tráfego.

### Sugestão de Correção (Opcional)

Habilitar `httpOnly`, `secure` e `sameSite` adequados.

<a id="bug-054"></a>
## BUG-054: /api/users protegido apenas por secret na query

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

O endpoint expõe usuários quando recebe um secret por query string.

### Evidência de código

```js
if (req.query.secret === "admin123") {
	return res.json({ success: true, users: users });
}
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Resultado Esperado

Endpoint deve exigir sessão válida e permissão de admin.

### Resultado Atual

Qualquer pessoa com o secret acessa a lista de usuários.

### Impacto

Exposição de dados sensíveis e bypass de autorização.

### Sugestão de Correção (Opcional)

Validar sessão e papel do usuário no servidor.

<a id="bug-055"></a>
## BUG-055: Secret admin123 exposto no dashboard.js público

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

O frontend embute o secret de acesso em arquivo público.

### Evidência de código

```js
fetch("/api/users?secret=admin123")
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Resultado Esperado

Secrets não devem aparecer no frontend.

### Resultado Atual

Secret está exposto para qualquer visitante.

### Impacto

Torna a proteção por secret ineficaz e expõe dados.

### Sugestão de Correção (Opcional)

Remover secret do cliente e proteger com autenticação no servidor.

<a id="bug-056"></a>
## BUG-056: IDOR via query param no /api/user

| Severidade | Categoria | Status |
| --- | --- | --- |
| Crítica | Segurança | Aberto |

### Descrição

O endpoint aceita `userId` por query param e retorna dados sem autenticação.

### Evidência de código

```js
const userId = req.session.userId || req.query.userId;
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Acessar `/api/user?userId=1` sem login

### Resultado Esperado

Endpoint deve exigir sessão válida.

### Resultado Atual

Dados do usuário são retornados sem autenticação.

### Impacto

Permite leitura de dados de terceiros (IDOR).

### Sugestão de Correção (Opcional)

Ignorar `userId` da query e usar apenas o usuário da sessão.

<a id="bug-057"></a>
## BUG-057: Query de login vulnerável a SQL injection

| Severidade | Categoria | Status |
| --- | --- | --- |
| Critica | Seguranca | Aberto |

### Descrição

O login monta a query com interpolação direta de `username` e `password`, permitindo SQL injection. Evidência baseada em análise de código.

### Evidência de código

```js
const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
console.log("Query executada:", query);
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Revisar o código da rota de login

### Resultado Esperado

Query deve usar parâmetros preparados (prepared statements) ou ORM seguro.

### Resultado Atual

Query é montada por concatenação/interpolação direta.

### Impacto

Permite alterar a consulta e burlar autenticação ou expor dados.

### Sugestão de Correção (Opcional)

Usar prepared statements/ORM e sanitizar entradas.

<a id="bug-058"></a>
## BUG-058: /api/user expõe email e senha

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Seguranca | Aberto |

### Descrição

O endpoint retorna o objeto completo do usuário, incluindo `email` e `password`. Evidência baseada em análise de código.

### Evidência de código

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

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Revisar o código do endpoint `/api/user`

### Resultado Esperado

Resposta deve omitir campos sensíveis (ex: `password`) e minimizar dados.

### Resultado Atual

Resposta retorna todo o objeto do usuário.

### Impacto

Exposição de credenciais e dados pessoais no response.

### Sugestão de Correção (Opcional)

Retornar apenas campos necessários e remover `password` do payload.

<a id="bug-059"></a>
## BUG-059: Logout não destrói sessão no servidor

| Severidade | Categoria | Status |
| --- | --- | --- |
| Alta | Seguranca | Aberto |

### Descrição

O logout apenas limpa `userId`, sem destruir a sessão. O cookie de sessão permanece válido. Evidência baseada em análise de código.

### Evidência de código

```js
app.post("/logout", (req, res) => {
	req.session.userId = null;
	res.json({ success: true, message: "Logout realizado" });
});
```

### Ambiente

- **Navegador**: Chrome 146.0.7680.155
- **Sistema Operacional**: Macbook Pro M1
- **Data do Teste**: 25/04/2026

### Passos para Reproduzir

1. Revisar o código do endpoint de logout

### Resultado Esperado

Sessão deve ser destruída no servidor e o cookie invalidado.

### Resultado Atual

Sessão permanece ativa no servidor e o cookie não é invalidado.

### Impacto

Risco de reutilização de sessão e acesso indevido.

### Sugestão de Correção (Opcional)

Usar `req.session.destroy()` e limpar o cookie no response.
