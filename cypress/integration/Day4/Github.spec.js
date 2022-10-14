
import{github} from '../../support/authentication.constant'
import{ongithubpage} from '../../support/github'
describe('GitHub Test Cases',()=>{
    
    
    beforeEach('Navigate to page github.com',()=>{
        cy.visit(github);
    })

    it('Login to GitHub',()=>{
        ongithubpage.verifySignInUrl();
    })




})