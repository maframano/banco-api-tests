describe('Login', function(){
    //No lugar de function(){} poderia ser usado uma aerofunction ()=>{}
    const request = require('supertest');
    const {expect} = require('chai')

    describe('POST /login', () => {
        it('Deve retornar 200 com um token em String quando usar credenciais válidas', async() => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                 })  
            
            console.log(resposta.status)
            console.log(resposta.body)
            expect(resposta.status).to.equal(200);  
            expect(resposta.body.token).to.be.a('string');
        })
            
    })    
})

/* "test": "echo \"Error: no test specified\" && exit 1"*/
