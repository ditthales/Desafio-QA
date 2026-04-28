# Entrega processo seletivo QA - V-Lab UFPE

Esta entrega faz parte do processo seletivo para a vaga de QA no V-Lab UFPE.

## O que foi feito (entregas exigidas)

- Auditoria de bugs com relatório detalhado: [RELATORIO_BUGS.md](RELATORIO_BUGS.md)
- Cenários BDD (Gherkin) para os fluxos de login e coleta:
	- [features/login.feature](features/login.feature)
	- [features/coleta.feature](features/coleta.feature)
- Casos de teste detalhados (Pré-condição, Passos e Resultado Esperado) para login e coleta:
	- [test-cases/login-test-cases.md](test-cases/login-test-cases.md)
	- [test-cases/coleta-test-cases.md](test-cases/coleta-test-cases.md)
- Automação E2E do fluxo de login com validações de sucesso e erro:
	- [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
- Checklist de regressão para pontos críticos:
	- [CHECKLIST_REGRESSAO.md](CHECKLIST_REGRESSAO.md)

## Como rodar o projeto com Docker

1. Subir o serviço:

```bash
docker compose up --build
```

2. A aplicação ficará disponível em:

```text
http://localhost:3000
```

3. Para parar os containers:

```bash
docker compose down
```

## Sobre cenários e casos de teste

Os cenários descrevem comportamentos amplos e genéricos (ex: validação de campos obrigatórios, regras numéricas, upload em lote). Cada cenário gera múltiplos casos de teste específicos (ex: nota com valor -5, percentual acima de 100, envio de CSV vazio). Esse formato foi adotado para facilitar a expansão e manutenção da suíte de testes e atender ao requisito de testes negativos.

Links principais:

- Cenários: [features/login.feature](features/login.feature), [features/coleta.feature](features/coleta.feature)
- Casos de teste: [test-cases/login-test-cases.md](test-cases/login-test-cases.md), [test-cases/coleta-test-cases.md](test-cases/coleta-test-cases.md)

## Como rodar os testes E2E de login

Pré-requisitos:

- Node.js instalado
- Dependências instaladas: `npm install`
- Aplicação rodando em `http://localhost:3000`

Execução headless (somente login, com health check primeiro):

```bash
npm run test:login
```

Observações do health check:

- O spec [cypress/e2e/login.health.cy.js](cypress/e2e/login.health.cy.js) roda primeiro.
- Se ele falhar, o segundo comando nao executa.

Observações importantes:

- Vários testes falham porque o sistema possui bugs propositais (relacionados no relatório).
- O teste de acessibilidade foi incluído por solicitação, porém o projeto não possui a Barra de Governo no HTML, então esse teste falha por ausência do elemento.
