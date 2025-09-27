const request = require('supertest');
const {expect} = require('chai')

describe('Transferencias', () => {
    describe('POST /Transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10,00', async () => {
            //Capturar o token
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                 }) 

            const token = respostaLogin.body.token     
            
            const resposta =await request('http://localhost:3000') 
                 .post('/transferencias')
                 .set('Content-Type', 'application/json')
                 .set('Authorization', `Bearer ${token} token`)
                 //a linha de cima tambem pode ser escrita como
                 //.set('Authorization', 'Bearer ' + token)
                 
                 .send({
                     contaOrigem: 1,
                     contaDestino: 2,
                     valor: 11,
                        token: ""
                    })
                
                expect(resposta.status).to.equal(201); 
                console.log(resposta.body)   
                 

        })

        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de 10,00', async () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                 }) 

            const token = respostaLogin.body.token     
            
            const resposta =await request('http://localhost:3000') 
                 .post('/transferencias')
                 .set('Content-Type', 'application/json')
                 .set('Authorization', `Bearer ${token} token`)
                 //a linha de cima tambem pode ser escrita como
                 //.set('Authorization', 'Bearer ' + token)
                 
                 .send({
                     contaOrigem: 1,
                     contaDestino: 2,
                     valor: 7,
                        token: ""
                    })
                
                expect(resposta.status).to.equal(422); 
                console.log(resposta.body)   
        })
    })



})