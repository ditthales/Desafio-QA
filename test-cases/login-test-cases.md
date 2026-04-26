# Casos de Teste - Login

## Índice

- [CT-LOG-001 - Health check do endpoint de login](#ct-log-001)
- [CT-LOG-002 - Login com sucesso](#ct-log-002)
- [CT-LOG-003 - Login com credenciais invalidas](#ct-log-003)
- [CT-LOG-004 - Login com usuario inexistente](#ct-log-004)
- [CT-LOG-005 - Login com usuario e senha inexistentes](#ct-log-005)
- [CT-LOG-006 - Login com campos vazios](#ct-log-006)
- [CT-LOG-007 - Login com usuario vazio e senha preenchida](#ct-log-007)
- [CT-LOG-008 - Login com senha vazia e usuario preenchido](#ct-log-008)
- [CT-LOG-009 - Login com usuario e senha contendo espacos em branco](#ct-log-009)
- [CT-LOG-010 - Login com usuario e senha apenas com espacos](#ct-log-010)
- [CT-LOG-011 - Login com caracteres especiais no usuario](#ct-log-011)
- [CT-LOG-012 - Login com caracteres especiais na senha](#ct-log-012)
- [CT-LOG-013 - Bloqueio apos multiplas tentativas falhadas](#ct-log-013)
- [CT-LOG-014 - Sessao criada e mantida apos login](#ct-log-014)
- [CT-LOG-015 - Tentativa de SQL Injection no login](#ct-log-015)
- [CT-LOG-016 - Bypass de autenticacao via query](#ct-log-016)
- [CT-LOG-017 - Acessibilidade: Barra de Governo e contraste](#ct-log-017)

<a id="ct-log-001"></a>
## CT-LOG-001 - Health check do endpoint de login
Cenário relacionado: SCN-LOGIN-001
Pre-condição:
- Servico em execucao
Passos:
1. Enviar requisicao POST para "/login" sem body
Resultado Esperado:
- Resposta com status 400
- Mensagem de erro: "Usuário e senha são obrigatórios"

<a id="ct-log-002"></a>
## CT-LOG-002 - Login com sucesso
Cenário relacionado: SCN-LOGIN-002
Pre-condição:
- Usuario cadastrado: username "admin", senha "admin123"
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin"
2. Preencher o campo de senha com "admin123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de sucesso exibida: "Login realizado com sucesso!"
- Redirecionamento para "/dashboard"
- Informacoes do perfil exibidas (username "admin" e email "admin@test.com")

<a id="ct-log-003"></a>
## CT-LOG-003 - Login com credenciais invalidas
Cenário relacionado: SCN-LOGIN-003
Pre-condição:
- Usuario cadastrado: username "admin", senha "admin123"
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin"
2. Preencher o campo de senha com "senhaerrada"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-004"></a>
## CT-LOG-004 - Login com usuario inexistente
Cenário relacionado: SCN-LOGIN-003
Pre-condição:
- Usuario "ghost" nao esta cadastrado
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "ghost"
2. Preencher o campo de senha com "qualquer123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-005"></a>
## CT-LOG-005 - Login com usuario e senha inexistentes
Cenário relacionado: SCN-LOGIN-003
Pre-condição:
- Usuario "naoexiste" nao esta cadastrado
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "naoexiste"
2. Preencher o campo de senha com "semSenha123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-006"></a>
## CT-LOG-006 - Login com campos vazios
Cenário relacionado: SCN-LOGIN-004
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Deixar o campo de usuario vazio
2. Deixar o campo de senha vazio
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de validacao exibida: "Por favor, preencha todos os campos"
- Requisicao de login nao enviada
- Permanecer na pagina de login

<a id="ct-log-007"></a>
## CT-LOG-007 - Login com usuario vazio e senha preenchida
Cenário relacionado: SCN-LOGIN-004
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Deixar o campo de usuario vazio
2. Preencher o campo de senha com "admin123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de validacao exibida: "Por favor, preencha todos os campos"
- Requisicao de login nao enviada
- Permanecer na pagina de login

<a id="ct-log-008"></a>
## CT-LOG-008 - Login com senha vazia e usuario preenchido
Cenário relacionado: SCN-LOGIN-004
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin"
2. Deixar o campo de senha vazio
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de validacao exibida: "Por favor, preencha todos os campos"
- Requisicao de login nao enviada
- Permanecer na pagina de login

<a id="ct-log-009"></a>
## CT-LOG-009 - Login com usuario e senha contendo espacos em branco
Cenário relacionado: SCN-LOGIN-005
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "  admin  "
2. Preencher o campo de senha com "  admin123  "
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-010"></a>
## CT-LOG-010 - Login com usuario e senha apenas com espacos
Cenário relacionado: SCN-LOGIN-005
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "   "
2. Preencher o campo de senha com "   "
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-011"></a>
## CT-LOG-011 - Login com caracteres especiais no usuario
Cenário relacionado: SCN-LOGIN-006
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "adm!n@#"
2. Preencher o campo de senha com "admin123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-012"></a>
## CT-LOG-012 - Login com caracteres especiais na senha
Cenário relacionado: SCN-LOGIN-006
Pre-condição:
- Usuario cadastrado: username "admin", senha "admin123"
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin"
2. Preencher o campo de senha com "adm!n@#"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida deve ser generica (ex: "Usuário ou senha incorretos")
- Usuario nao autenticado
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-013"></a>
## CT-LOG-013 - Bloqueio apos multiplas tentativas falhadas
Cenário relacionado: SCN-LOGIN-007
Pre-condição:
- Usuario cadastrado: username "admin", senha "admin123"
- Usuario esta na pagina de login ("/")
Passos:
1. Tentar login com "admin" e senha "senhaerrada" por 5 vezes seguidas
Resultado Esperado:
- Mensagem de bloqueio exibida: "Muitas tentativas de login. Tente novamente mais tarde."
- Usuario nao autenticado
- Novas tentativas devem ser bloqueadas temporariamente

<a id="ct-log-014"></a>
## CT-LOG-014 - Sessao criada e mantida apos login
Cenário relacionado: SCN-LOGIN-008
Pre-condição:
- Usuario cadastrado: username "admin", senha "admin123"
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin"
2. Preencher o campo de senha com "admin123"
3. Clicar no botao "Entrar"
4. Atualizar a pagina do dashboard
Resultado Esperado:
- Usuario permanece autenticado
- A pagina continua em "/dashboard" sem solicitar novo login
- localStorage contem "loggedIn" = "true" e "user" com username "admin"

<a id="ct-log-015"></a>
## CT-LOG-015 - Tentativa de SQL Injection no login
Cenário relacionado: SCN-LOGIN-009
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Preencher o campo de usuario com "admin' OR '1'='1"
2. Preencher o campo de senha com "qualquer123"
3. Clicar no botao "Entrar"
Resultado Esperado:
- Mensagem de erro exibida
- Nenhum acesso nao autorizado concedido
- Permanecer na pagina de login, sem redirecionamento para "/dashboard"

<a id="ct-log-016"></a>
## CT-LOG-016 - Bypass de autenticacao via query
Cenário relacionado: SCN-LOGIN-010
Pre-condição:
- Usuario nao esta autenticado
Passos:
1. Acessar diretamente "/dashboard?admin=true"
Resultado Esperado:
- Redirecionamento para a pagina de login ("/")
- Dashboard nao deve ser exibido

<a id="ct-log-017"></a>
## CT-LOG-017 - Acessibilidade: Barra de Governo e contraste
Cenário relacionado: SCN-LOGIN-011
Pre-condição:
- Usuario esta na pagina de login ("/")
Passos:
1. Verificar se a Barra de Governo esta visivel
2. Verificar contraste entre texto e fundo da Barra de Governo
Resultado Esperado:
- Barra de Governo presente e visivel
- Contraste atende ao minimo de 4.5:1