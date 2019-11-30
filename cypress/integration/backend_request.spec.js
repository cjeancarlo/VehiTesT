context('Network Requests', () => {
   

    it('Backend up and running', () => {
        
        cy.request({
            url: 'http://localhost:3000/types',
            qs: {
             
            },
          })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          })
      })

    it('Get end Point /Type', () => {
        // will execute request
        // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
        cy.request({
          url: 'http://localhost:3000/types',
          qs: {
           
          },
        })
        .its('body')
        .should('be.an', 'array')
        .and('have.length', 12)
        .its('0') // yields first element of the array
        .should('contain', {
          id: 1,
          type: "car"
        })
      })
    


})


