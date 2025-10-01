const request = require('supertest');
const {expect} = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autentication.js')
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferencias', () => {
     let token
        beforeEach(async() => {
                token = await obterToken('julio.lima', '123456') 
        })

    describe('POST /Transferencias', () => {
       

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

    describe('GET /Transferencias/{id}', () => {
        it('Deve retorar sucesso com 200 e dados iguais ao registro de transferencia continos no banco de dados quando o ID for valido', async() => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/20')
                //get nao tem body nem content-type. Só set
                .set('Authorization', `Bearer ${token}`)

            console.log(resposta.status)    
            console.log(resposta.body)   
            expect(resposta.status).to.equal(200) 
            expect(resposta.body.id).to.equal(20) 
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equal(1)
            expect(resposta.body.conta_destino_id).to.equal(2)
            expect(resposta.body.valor).to.equal(11.00)
            //o esperado era trazer um 11(number) mas trouxe uma string 
            //e isso é um bug da api
        })

    })

    describe('GET/postTransferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async() => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
             
            expect(resposta.status).to.equal(200) 
            expect(resposta.body.limit).to.equal(10) 
            expect(resposta.body.transferencias).to.have.lengthOf(10) 
            console.log(resposta.body)    
        })

    })
})