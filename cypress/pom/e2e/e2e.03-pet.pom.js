import Main from '../main.pom.js';

class Pet extends Main {
    constructor() {
        const elements = {
            url                 : () => cy.url(),
            title               : () => cy.get('h2').eq(0),
            name                : () => cy.get('#name'),
            birthDate           : () => cy.get('#birthDate'),
            type                : () => cy.get('#type'),
            addPet              : () => cy.get('button:contains("Add Pet")'),
            successMessage      : () => cy.get('#success-message'),
            listPet             : () => cy.get('table'),
            description         : () => cy.get('#description'),
            addVisit            : () => cy.get('button:contains("Add Visit")'),
            date                : () => cy.get('#date'),
            listVisit           : () => cy.get('tbody'),
            editPet             : () => cy.get('a:contains("Edit Pet")').eq(0),
            updatePet              : () => cy.get('button:contains("Update Pet")'),

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
        cy.get(`:nth-child(${row}) > :nth-child(2) > .table-condensed > tbody > tr > :nth-child(2) > a`).click();
    }
}

export default new Pet();