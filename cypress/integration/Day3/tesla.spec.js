// spec like runner class in Selenium
// tesla.spec.js -> runner class
// models.js  -> functions (methods)
// authentication.constant.js -> we store data to export (url, password, username etc.) 

import { teslaURL } from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('Tesla web page testing', () => {

    beforeEach('Navigate to page to the tesla.com', () => {
        cy.visit(teslaURL)
    })

    it('ModelS page Testing', () => {
        onModelSPage.urlVerification()
        onModelSPage.privacyPage_Verification()
        onModelSPage.modelScomparePage()

    })
})