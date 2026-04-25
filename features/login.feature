language: pt
  
Funcionalidade: Login de Usuário
  Como um usuário
  Eu quero fazer login no sistema
  Para acessar meu dashboard

  Pano de Fundo:
    Dado que estou na página de login
    E os seguintes usuários estão cadastrados:
      | username | password | email         | role  |
      | admin    | admin123 | admin@test.com | admin |
      | user     | user123  | user@test.com  | user  |
      | teste    | 123456   | teste@test.com | user  |

  @SCN-LOGIN-001
  Cenário: Login bem-sucedido com credenciais válidas
    Quando eu insiro "admin" no campo de usuário
    E eu insiro "admin123" no campo de senha
    E eu clico no botão "Entrar"
    Então eu devo ser redirecionado para o dashboard
    E eu devo ver as informações do meu perfil

  @SCN-LOGIN-002
  Cenário: Login falhado com credenciais inválidas
    Quando eu informo credenciais inválidas
    E eu clico no botão "Entrar"
    Então eu devo ver uma mensagem de erro
    E eu não devo ser redirecionado para o dashboard

  @SCN-LOGIN-003
  Cenário: Login com campos vazios
    Quando eu tento fazer login com campos vazios
    Então eu devo ver uma mensagem de validação
    E o login não deve ser enviado

  @SCN-LOGIN-004
  Cenário: Login com espaços em branco
    Quando eu informo usuário e senha com espaços em branco
    E eu clico no botão "Entrar"
    Então a validação deve tratar os espaços de forma consistente

  @SCN-LOGIN-005
  Cenário: Login com caracteres especiais
    Quando eu informo usuário ou senha com caracteres especiais
    E eu clico no botão "Entrar"
    Então o sistema deve validar a entrada
    E eu não devo ser redirecionado para o dashboard

  @SCN-LOGIN-006
  Cenário: Múltiplas tentativas de login falhadas
    Quando eu falho o login repetidas vezes
    Então o sistema deve aplicar proteção contra força bruta
    E eu devo ver uma mensagem de bloqueio

  @SCN-LOGIN-007
  Cenário: Sessão criada corretamente após login
    Quando eu faço login com credenciais válidas
    Então uma sessão autenticada deve ser criada
    E eu devo acessar o dashboard sem novo login

  @SCN-LOGIN-008
  Cenário: Tentativa de SQL Injection
    Quando eu tento autenticar usando payload de SQL Injection
    Então eu devo ver uma mensagem de erro
    E nenhum acesso não autorizado deve ser concedido

  @SCN-LOGIN-009
  Cenário: Bypass de autenticação via query
    Quando eu acesso o dashboard com parâmetros de bypass
    Então eu devo ser redirecionado para a página de login
    E eu não devo acessar o dashboard sem autenticação

  @SCN-LOGIN-010
  Cenário: Health check do endpoint de login
    Quando eu valido o status do endpoint de login
    Então o serviço deve responder com status esperado

  @SCN-LOGIN-011
  Cenário: Acessibilidade na tela de login
    Quando eu acesso a tela de login
    Então a Barra de Governo deve estar presente
    E o contraste deve atender o mínimo exigido
