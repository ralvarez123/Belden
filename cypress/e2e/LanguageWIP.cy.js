// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {BeldenPOM_BF} from "../../pageObject/Beldens_POM_BF";

describe("Search Sugestions", () => {
  it("Change Language", () => {
  const BeldensPOM_BF = new BeldenPOM_BF();  
  BeldensPOM_BF.homePage();
  BeldensPOM_BF.Cookies().click();
  BeldensPOM_BF.language().click().trigger('mouseover');
  BeldensPOM_BF.chooseLanguage().contains('Deutsch (Deutschland)').click({ force: true });
  //cy.get('.dropdown-option').contains('French').click({ force: true });// Replace with the text of the option you want to select

  })

})