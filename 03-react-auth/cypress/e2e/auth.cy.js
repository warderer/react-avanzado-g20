describe('Mis primeros test', () => {
  it('Verificar que cargue la página Home leyendo el H1', () => {
    // 01. Setup el estado de la aplicación
    cy.visit('/')

    // 02. Ejecutar la acción / acciónes
    cy.get('h1')
      .contains('Home') // 03. Hacer una aserción
  })

  it('Verificar que cargue la página Login como Customer leyendo el H1', () => {
    // Intercept lo uso cuando voy a llamar a una API para esperar la respuesta de esta
    cy.intercept('POST', 'http://localhost:3000/login').as('loginApi')

    // 01. Setup el estado de la aplicación
    cy.visit('/login')

    // 02. Ejecutar la acción / acciónes
    cy.get('#floatingInput').type('drstrange@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()

    cy.wait('@loginApi')

    cy.get('h1')
      .contains('Dashboard') // 03. Hacer una aserción
  })

  it('Probar que cuando haga Logout como ADMIN me lleve a la página de Home, leyendo el H1', () => {
    // Intercept lo uso cuando voy a llamar a una API para esperar la respuesta de esta
    cy.intercept('POST', 'http://localhost:3000/login').as('loginApi')

    // 01. Setup el estado de la aplicación
    cy.visit('/login')

    // 02. Ejecutar la acción / acciónes
    cy.get('#floatingInput').type('superman@dc.com')
    cy.get('#floatingPassword').type('superman')
    cy.get('button[type=submit]').click()

    cy.wait('@loginApi')

    cy.get('nav > ul li:last').click()

    // 03. Hacer una aserción
    cy.get('h1').should('have.text', 'Home')
  })
})
