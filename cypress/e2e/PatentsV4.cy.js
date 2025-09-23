// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {BeldenPOM_BF} from "../../pageObject/Beldens_POM_BF";

describe('Patents page', () => {
  beforeEach(() => {
    const BeldensPOM_BF = new BeldenPOM_BF();  
    BeldensPOM_BF.patentsPage();
    //BeldensPOM_BF.patentsPageSTG();
    //BeldensPOM_BF.patentsPageProd();
    BeldensPOM_BF.Cookies().click();
  })

describe("Patents", () => {
    it("Hero", () => {
    const BeldensPOM_BF = new BeldenPOM_BF();  
      BeldensPOM_BF.patentsHero().should('have.text', 'Patents');
    })

    it("C3 Statement Read More", () => {
      const BeldensPOM_BF = new BeldenPOM_BF();  
      BeldensPOM_BF.patentsReadMore().click(); 
      BeldensPOM_BF.patentsRMbody().should('include.text', 'third parties');
    });

    it("M4 Filter Table- expand all", () => {
      const BeldensPOM_BF = new BeldenPOM_BF();  
      BeldensPOM_BF.patentsExpandAllB().click();
      BeldensPOM_BF.patentsDCXPatent().should('have.text', 'DCX and ECX Optical fiber distribution');

    });

    //it.only("M4 Filter Table- Filter interaction", () => {
    it("M4 Filter Table- Filter interaction", () => {
      const BeldensPOM_BF = new BeldenPOM_BF();  
      BeldensPOM_BF.patentsExpandAllB().click();
      BeldensPOM_BF.patentsFilter().first().click();
      BeldensPOM_BF.patentsChoose().should('be.visible');
      BeldensPOM_BF.patentsResult().click();
      BeldensPOM_BF.patentsClose().first().click();
      BeldensPOM_BF.patentsOther().should('have.text', 'Belden | REVConnect®');
    });

    it("M4 Filter Table- patent card", () => {
      const BeldensPOM_BF = new BeldenPOM_BF();
      BeldensPOM_BF.patentsExpandAllB().click();  
      BeldensPOM_BF.patentsCard().click(); 
      //variable as the other ones
      cy.origin('https://www.ppc-online.com', () => {
        cy.get('.Header-Col2-Outer').should('be.visible')
      })
      
    }); 
  });
})
