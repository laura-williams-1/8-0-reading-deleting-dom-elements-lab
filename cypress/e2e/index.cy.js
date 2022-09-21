describe("Removed Elements", () => {
  describe("Header", () => {
    it("should no longer have the 'All Posts' link in the header", () => {
      cy.get("header nav ul li")
        .should("have.length", 1)
        .should("contain.text", "Contact Me");
    });
  });

  describe("Featured Post", () => {
    it("should not have the 'Read Time' span element", () => {
      cy.get(".featured span").should("have.length", 0);
    });
  });

  describe("Posts", () => {
    it("should not include the last post", () => {
      cy.get("main .posts article")
        .should("have.length", 2)
        .not("contain.text", "You -- yes you!");
    });
    it("should not have a title for any of the posts", () => {
      cy.get("main .posts h3").should("have.length", 0);
    });
  });
});
