// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {BeldenPOM_BF} from "../../pageObject/Beldens_POM_BF";


describe("Search Sugestions", () => {
    it("serach for a product/blog/news etc", () => {
    const BeldensPOM_BF = new BeldenPOM_BF();  
    BeldensPOM_BF.homePage();
    BeldensPOM_BF.Cookies().click();
    BeldensPOM_BF.gloablSearch().click();
    BeldensPOM_BF.typeSearch().click().type('cable');
    BeldensPOM_BF.searchSuggestion().should('include.text', 'cable');
    })

  })

  