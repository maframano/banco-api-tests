const request = require('supertest');
const {expect} = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('Login', function(){
    //No lugar de function(){} poderia ser usado uma aerofunction ()=>{}
    
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em String quando usar credenciais válidas', async() => {
            //const resposta = await request('http://localhost:3000')
            //será substituida pela linha abaixo, colocando no lugar da url,
            //a variavel do env (process.env.BASE_URL)
            const bodyLogin = {...postLogin}

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-type', 'application/json')
                .send(bodyLogin)  
            
            console.log(resposta.status)
            console.log(resposta.body)
            expect(resposta.status).to.equal(200);  
            expect(resposta.body.token).to.be.a('string');
        })
            
    })    
})

/* "test": "echo \"Error: no test specified\" && exit 1"*/
