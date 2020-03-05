describe('WHTestSuite', function () {

    it('Assert presence of Join button', function () {
        cy.visit('http://sports.williamhill.com/betting/en-gb')
        cy.get('#joinLink')
            .should('contain', 'Join').wait(1000)
    })

    it('Switch language to German', function () {

        cy.get('.js-language-button').click()
        cy.wait(500)
            .get('#de > span').click()

    })

    it('Assert presence of Join button - German translation', function () {

        cy.get('#joinLink')
            .should('contain', 'Anmelden')

    })

    it('Switch language to Japanese', function () {
        cy.reload()
        cy.get('.js-language-button').click()
        cy.wait(500)
            .get('#ja > span').click()

    })

    it('Assert presence of Join button - Japanese translation', function () {
        cy.get('#joinLink')
            .should('contain', '登録')

    })

    it('Switch language to Greek', function () {
        cy.get('.js-language-button').click()
        cy.wait(500)
            .get('#el > span').click()

    })

    it('Assert presence of Join button - Greek translation', function () {
        cy.get('#joinLink')
            .should('contain', 'Εγγραφή')

    })


})
