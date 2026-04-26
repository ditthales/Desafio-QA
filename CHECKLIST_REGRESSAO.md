# Checklist de Regressão - Funcionalidades Chave

## Como usar

- Marque [x] para itens verificados
- Registre evidências quando necessário (print, log, resposta de API)
- Execute em cada release, hotfix ou refatoração relevante

## Validações de campos - Login

- [ ] Campo usuário não aceita vazio ou apenas espaços
- [ ] Campo usuário rejeita caracteres especiais
- [ ] Campo usuário respeita tamanho mínimo e máximo definido
- [ ] Campo usuário aplica trim antes de enviar
- [ ] Campo senha não aceita vazio
- [ ] Campo senha respeita tamanho mínimo e máximo definido

## Validações de campos - Registro

- [ ] Campo username não aceita vazio ou apenas espaços
- [ ] Campo username rejeita caracteres especiais
- [ ] Campo username respeita tamanho mínimo e máximo definido
- [ ] Campo username não aceita HTML/script
- [ ] Campo email não aceita vazio
- [ ] Campo email valida formato (ex: usuario@dominio)
- [ ] Campo email respeita tamanho máximo definido
- [ ] Campo senha não aceita vazio
- [ ] Campo senha respeita política mínima (tamanho, complexidade)

## Validações de campos - Reset de senha

- [ ] Campo usuário não aceita vazio
- [ ] Campo usuário respeita tamanho mínimo e máximo definido
- [ ] Nova senha não aceita vazio
- [ ] Nova senha respeita política mínima (tamanho, complexidade)
- [ ] Confirmação de senha é obrigatória e deve coincidir

## Validações de campos - Coleta individual

- [ ] Beneficiário ID não aceita vazio
- [ ] Beneficiário ID respeita tamanho máximo definido
- [ ] Beneficiário Nome não aceita vazio
- [ ] Beneficiário Nome não aceita números ou caracteres especiais
- [ ] Beneficiário Nome respeita tamanho máximo definido
- [ ] Nota aceita apenas números
- [ ] Nota respeita faixa permitida (0 a 10)
- [ ] Nota não aceita negativos
- [ ] Observações respeitam tamanho máximo definido
- [ ] Status é obrigatório

## Acesso e autenticação

- [ ] Login com credenciais válidas redireciona para dashboard
- [ ] Login com credenciais inválidas exibe mensagem genérica
- [ ] Campos obrigatórios de login validam vazio
- [ ] Rate limit/bloqueio de tentativas funciona conforme regra
- [ ] Logout encerra a sessão e invalida cookie
- [ ] Sessão expira no tempo esperado sem "lembrar-me"

## Registro

- [ ] Registro com dados válidos cria usuário
- [ ] Username inválido é rejeitado (espaços/caracteres especiais)
- [ ] Email inválido é rejeitado
- [ ] Política de senha é aplicada (mínimo, complexidade)
- [ ] Registro não faz login automático (se essa for a regra)

## Reset de senha

- [ ] Fluxo de reset exige validação de identidade
- [ ] Campos obrigatórios validam vazio
- [ ] Nova senha valida política mínima
- [ ] Confirmação de senha é exigida

## Dashboard

- [ ] Dashboard exige sessão válida
- [ ] Usuário não-admin não vê painel administrativo
- [ ] Dados sensíveis não aparecem na UI
- [ ] Botão sair executa logout corretamente

## Coleta de dados individual

- [ ] Acesso à coleta exige autenticação
- [ ] Campos obrigatórios indicados e validados
- [ ] Nota valida faixa (0-10)
- [ ] Campos numéricos validam faixa e não aceitam negativos
- [ ] Status é obrigatório
- [ ] Envio com dados válidos salva com sucesso

## Histórico de coletas

- [ ] Histórico lista apenas coletas do usuário logado
- [ ] Histórico não exibe registros duplicados
- [ ] Itens exibem dados corretos e completos

## API e segurança

- [ ] /api/user exige autenticação
- [ ] /api/user não retorna senha nem dados excessivos
- [ ] /api/users protegido adequadamente
- [ ] SQL injection não é possível no login
- [ ] Cookies de sessão com flags seguras (httpOnly/secure)

## Usabilidade básica

- [ ] Mensagens de erro visíveis e estáveis
- [ ] Layout não desloca ao exibir mensagens
- [ ] Navegação entre telas funciona (login, dashboard, coleta)
