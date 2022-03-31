

class JobOpenings {

    goToPage() {
        cy.visit('/')
    }

    checkOpenedPage() {
        cy.url()
        .should('eq', 'https://boards.greenhouse.io/tribalcredit/')
    }

    chooseDepartament() {
        cy.get('#s2id_departments-select > .select2-choice > .select2-arrow > b').click()
        cy.get('#select2-result-label-7').click()
    } 

    checkDepartment(){
        cy.get('#select2-chosen-1').should('have.text', 'Engineering')
    }

    chooseOffice() {
        cy.get('#s2id_offices-select > .select2-choice > .select2-arrow > b').click()
        cy.get('#select2-result-label-23').click()
    }

    checkOffice() {
        cy.get('#select2-chosen-2').should('have.text', 'Mexico')
    }

    checkDisplayedJob(){
        cy.get(':nth-child(19) > a').should('be.visible')
        .and ('have.text', 'Sr. QA Engineer')
    }

}

export default JobOpenings