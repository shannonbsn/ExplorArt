describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the home page", () => {
    cy.contains("h1", "Création du projet ExplorArt");
  });

  it("should navigate to the musees page", () => {
    cy.visit("/");
    cy.get("a[href='/musees']").click();
    cy.url().should("include", "/musees");
  });
});