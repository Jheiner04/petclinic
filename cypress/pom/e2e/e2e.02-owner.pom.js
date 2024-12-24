import Main from '../main.pom.js';

class Owner extends Main {
    constructor() {
        const elements = {
            url                 : ()      => cy.url(),
            title               : () => cy.get('h2').eq(0),
            addNewOwner         : () => cy.get('[href="/owners/new"]'),
            firstName           : () => cy.get('#firstName'),
            lastName            : () => cy.get('#lastName'),
            address             : () => cy.get('#address'),
            city                : () => cy.get('#city'),
            telephone           : () => cy.get('#telephone'),
            successMessage      : () => cy.get('#success-message'),
            addOwner            : () => cy.get('button:contains("Add Owner")'),
            findOwners          : () => cy.get('[href="/owners/find"]'),   
            findOwner           : () => cy.get('[type="submit"]'),
            owners              : () => cy.get('body').find("table > tbody > tr > td"),
            editOwner           : () => cy.get('.btn-primary').eq(0),
            updateOwner         : () => cy.get('button:contains("Update Owner")'),
            addNewPet           : () => cy.get('.btn').eq(1),
        };
        super(elements);
    }

    validateCell(table, column, row, conditional, value) {
        if (!table || !column || !row || !conditional || !value) {
            throw new Error('All parameters must be defined');
        }
    
        const columnIndices = {
            'Name': 1
        };
    
        if (!columnIndices[column]) {
            throw new Error(`Invalid column: ${column}`);
        }
    
        const conditionals = {
            'contain text': (actual, expected) => expect(actual).to.include(expected)
        };
    
        if (!conditionals[conditional]) {
            throw new Error(`Invalid condition: ${conditional}`);
        }
    
        cy.get(`table > tbody > :nth-child(${row}) > :nth-child(${columnIndices[column]})`).then(($el) => {
            const valueCell = $el.text().trim();
            conditionals[conditional]( valueCell, value);
        });
    }

    clicRow(row){
        cy.get(`table > tbody > :nth-child(${row}) > :nth-child(1) > a`).click();
    }
}

export default new Owner();