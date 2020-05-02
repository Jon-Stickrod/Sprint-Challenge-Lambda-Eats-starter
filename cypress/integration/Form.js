describe("Testing for input", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001/Pizza");
    });
    it("Add test to inputs and submit form", function() {
      cy.get('input[name="name"]').type("Check check");
      cy.get('input[type="checkbox"]').check()
  

      cy.get("form").submit();
    });
  });