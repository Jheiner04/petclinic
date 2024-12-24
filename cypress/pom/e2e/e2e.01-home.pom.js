import Main from '../main.pom.js';

class Home extends Main {
    constructor() {
        const elements = {
            url                 : ()      => cy.url(),
            title               : () => cy.get('h2'),
            findOwners          : () => cy.get('[href="/owners/find"]'),
            findOwner           : () => cy.get('[type="submit"]'),
            owners              : () => cy.get('body').find("table > tbody > tr > td"),      


        };
        super(elements);
    }

}

export default new Home();