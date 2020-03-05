describe('WHTestSuite', function () {

    it('Verify Willaim Hill homepage', function () {
        cy.visit('http://sports.williamhill.com/betting/en-gb')
        cy.title().should('eq', 'Online Sports Betting & Odds ⇒ ✅ Bet Here with William Hill™✅').wait(5000)
    })

    it('Verify Presence of Cookie Notice pop-up', function () {
        cy.get('.cookie-disclaimer')
    })

    it('Verify Cookie Notice close button', function () {
        cy.get('.cookie-disclaimer__button').click()
    })
})