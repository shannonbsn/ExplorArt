describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the home page", () => {
    cy.contains("h1", "Welcome to Explor'Art");
  });

  it("should navigate to the musees page", () => {
    cy.visit("/");
    cy.get("a").contains("/musees").click();
    cy.url().should("include", "/musees");
  });
});