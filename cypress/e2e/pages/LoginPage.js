class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    cy.get('[data-testid="login-username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[data-testid="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('[data-testid="login-button"]').click();
  }

  clickRegisterTab() {
    cy.get('[data-testid="tab-register"]').click();
  }

  clickResetTab() {
    cy.get('[data-testid="tab-reset"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  getMessage() {
    return cy.get('[data-testid="message"]');
  }

  getGovBar() {
    return cy.get('[data-testid="gov-bar"]');
  }

  expectMessageContains(text) {
    this.getMessage().should("contain.text", text);
  }

  expectOnDashboard() {
    cy.url().should("include", "/dashboard");
  }

  expectNotOnDashboard() {
    cy.url().should("not.include", "/dashboard");
  }

  expectGovBarVisible() {
    this.getGovBar().should("be.visible");
  }
}

export default new LoginPage();
