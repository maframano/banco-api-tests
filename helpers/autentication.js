
const request = require('supertest');

const obterToken = async(usuario, senha) => {
     //Capturar o token
    //const respostaLogin = await request('http://localhost:3000')
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
            }) 

    return respostaLogin.body.token    

}

module.exports = {
    obterToken
}