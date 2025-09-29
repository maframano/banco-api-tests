
const request = require('supertest');
const postLogin =require('../fixtures/postLogin.json')

const obterToken = async(usuario, senha) => {
    const bodyLogin = {...postLogin}
     //Capturar o token
    //const respostaLogin = await request('http://localhost:3000')
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send(bodyLogin) 

    return respostaLogin.body.token    

}

module.exports = {
    obterToken
}