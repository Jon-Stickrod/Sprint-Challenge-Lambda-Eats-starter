describe("Testing for input", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001/Pizza");
    });
    it("Add test to inputs and submit form", function() {
      cy.get('input[name="name"]').type("Adonis");
      cy.get('input[type="checkbox"]').check()
  


  
      // cy.get("checkbox[name='red']")
      //   .check()
      //   .should("be.checked");
      // cy.get("checkbox[name='garlic']")
      //   .check()
      //   .should("be.checked");
      // cy.get("checkbox[name=bbq]")
      //   .check()
      //   .should("be.checked");
      // cy.get("checkbox[name=spinach]")
      //   .check()
      //   .should("be.checked");
      //cy.get("button").click();
    });
  });