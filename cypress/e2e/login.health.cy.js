describe("Login Health Check", () => {
  let loginData;

  before(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
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
});
