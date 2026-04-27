import LoginPage from "./pages/LoginPage";

let loginData;

const parseRgb = (color) => {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) {
    return null;
  }
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
  };
};

const luminance = ({ r, g, b }) => {
  const toLinear = (value) => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  };

  const red = toLinear(r);
  const green = toLinear(g);
  const blue = toLinear(b);

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

const contrastRatio = (colorA, colorB) => {
  const rgbA = parseRgb(colorA);
  const rgbB = parseRgb(colorB);

  if (!rgbA || !rgbB) {
    return null;
  }

  const lumA = luminance(rgbA);
  const lumB = luminance(rgbB);
  const light = Math.max(lumA, lumB);
  const dark = Math.min(lumA, lumB);

  return (light + 0.05) / (dark + 0.05);
};

describe("Login Tests", () => {
  before(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    LoginPage.visit();
  });

  it("CT-LOG-001 | Deve validar health check do endpoint de login", () => {
    cy.request({
      method: "POST",
      url: "/login",
      failOnStatusCode: false,
      body: {},
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal(loginData.messages.healthRequired);
    });
  });

  it("CT-LOG-002 | Deve fazer login com credenciais válidas", () => {
    LoginPage.login(loginData.users.admin.username, loginData.users.admin.password);
    LoginPage.expectMessageContains(loginData.messages.success);
    LoginPage.expectOnDashboard();
  });

  it("CT-LOG-003 | Deve rejeitar login com senha inválida", () => {
    LoginPage.login(
      loginData.users.admin.username,
      loginData.invalid.wrongPassword,
    );
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-004 | Deve rejeitar login com usuario inexistente", () => {
    LoginPage.login(loginData.invalid.ghostUser, loginData.invalid.anyPassword);
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-005 | Deve rejeitar login com usuario e senha inexistentes", () => {
    LoginPage.login(
      loginData.invalid.nonexistentUser,
      loginData.invalid.nonexistentPassword,
    );
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-006 | Deve validar campos vazios", () => {
    LoginPage.clickLoginButton();
    LoginPage.expectMessageContains(loginData.messages.emptyFields);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-007 | Deve validar usuario vazio", () => {
    LoginPage.enterPassword(loginData.users.admin.password);
    LoginPage.clickLoginButton();
    LoginPage.expectMessageContains(loginData.messages.emptyFields);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-008 | Deve validar senha vazia", () => {
    LoginPage.enterUsername(loginData.users.admin.username);
    LoginPage.clickLoginButton();
    LoginPage.expectMessageContains(loginData.messages.emptyFields);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-009 | Deve rejeitar login com espacos em branco", () => {
    LoginPage.login(loginData.invalid.paddedUser, loginData.invalid.paddedPassword);
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-010 | Deve rejeitar login com campos apenas espacos", () => {
    LoginPage.login(loginData.invalid.spaces, loginData.invalid.spaces);
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-011 | Deve rejeitar login com caracteres especiais no usuario", () => {
    LoginPage.login(loginData.invalid.specialUser, loginData.users.admin.password);
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-012 | Deve rejeitar login com caracteres especiais na senha", () => {
    LoginPage.login(
      loginData.users.admin.username,
      loginData.invalid.specialPassword,
    );
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-013 | Deve bloquear apos multiplas tentativas falhadas", () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      LoginPage.login(
        loginData.users.admin.username,
        loginData.invalid.wrongPassword,
      );
    }
    LoginPage.expectMessageContains(loginData.messages.rateLimit);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-014 | Deve manter sessao apos login", () => {
    LoginPage.login(loginData.users.admin.username, loginData.users.admin.password);
    LoginPage.expectOnDashboard();
    cy.reload();
    LoginPage.expectOnDashboard();
    cy.window().then((win) => {
      expect(win.localStorage.getItem("loggedIn")).to.equal("true");
      const user = JSON.parse(win.localStorage.getItem("user"));
      expect(user.username).to.equal(loginData.users.admin.username);
    });
  });

  it("CT-LOG-015 | Deve rejeitar tentativa de SQL Injection", () => {
    LoginPage.login(
      loginData.invalid.sqlInjectionUser,
      loginData.invalid.anyPassword,
    );
    LoginPage.expectMessageContains(loginData.messages.genericError);
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-016 | Deve impedir bypass via query", () => {
    cy.visit("/dashboard?admin=true");
    LoginPage.expectNotOnDashboard();
  });

  it("CT-LOG-017 | Deve validar Barra de Governo e contraste", () => {
    LoginPage.expectGovBarVisible();
    LoginPage.getGovBar().then(($bar) => {
      const textColor = $bar.css("color");
      const backgroundColor = $bar.css("background-color");
      const ratio = contrastRatio(textColor, backgroundColor);

      expect(ratio, "contraste minimo").to.be.at.least(4.5);
    });
  });

  // it("Deve rejeitar login com usuário inexistente", () => {
  //   LoginPage.login("nonexistent", "password");
  //   cy.get('[data-testid="message"]').should("be.visible");
  // });

  // it("Deve exigir username para login", () => {
  //   LoginPage.enterPassword("password");
  //   LoginPage.clickLoginButton();
  //   // Verificar validação de formulário
  //   cy.get('[data-testid="login-username"]').should("have.attr", "required");
  // });

  // it("Deve exigir password para login", () => {
  //   LoginPage.enterUsername("admin");
  //   LoginPage.clickLoginButton();
  //   // Verificar validação de formulário
  //   cy.get('[data-testid="login-password"]').should("have.attr", "required");
  // });

  // it("Não deve permitir injeção SQL no campo username", () => {
  //   LoginPage.login("admin' OR '1'='1", "any");
  //   cy.get('[data-testid="message"]').should("be.visible");
  // });

  // it("Não deve permitir login com espaços em branco", () => {
  //   LoginPage.login("   ", "   ");
  //   cy.get('[data-testid="message"]').should("be.visible");
  // });
});
