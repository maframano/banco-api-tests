const request = require('supertest');
const {expect} = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autentication.js')
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferencias', () => {
    describe('POST /Transferencias', () => {
        let token
        beforeEach(async() => {
                token = await obterToken('julio.lima', '123456') 
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10,00', async () => {
          //para substituir o login e a senha em cada função, cria-se a função obter token
          //na pagina autentication 
            const bodyTransferencias = {...postTransferencias} 
            
            const resposta =await request(process.env.BASE_URL) 
                 .post('/transferencias')
                 .set('Content-Type', 'application/json')
                 .set('Authorization', `Bearer ${token} token`)
                 //a linha de cima tambem pode ser escrita como
                 //.set('Authorization', 'Bearer ' + token)
                 
                 .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(201); 
                console.log(resposta.body)   
                 

        })

        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de 10,00', async () => {
            const bodyTransferencias = {...postTransferencias} 
            bodyTransferencias.valor = 7
            
            const resposta =await request(process.env.BASE_URL) 
                 .post('/transferencias')
                 .set('Content-Type', 'application/json')
                 .set('Authorization', `Bearer ${token} token`)
                 //a linha de cima tambem pode ser escrita como
                 //.set('Authorization', 'Bearer ' + token)
                 
                 .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(422); 
                console.log(resposta.body)   
        })
    })



})