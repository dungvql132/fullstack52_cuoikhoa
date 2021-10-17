

const BookEntity = require('../Entities/user')

class Login {
    constructor() {

    }
    async getUser({ name, pass }) {
        try {
            const regexName = new RegExp(`${name}`)
            const regexPass = new RegExp(`${pass}`)
            console.log(regexPass);
            const query = {};

            if (name) query.userName = regexName;
            if (pass) query.password = regexPass;
            console.log(query)
            const result = await BookEntity.find(query).limit(20)
            return {
                data: result,
                status: 200,
            }

        } catch (err) {

        }
    }
    async createNewUser(body) {
        try {
            const result = await BookEntity.create(body)
            return {
                data: result,
                status: 200,
            }

        } catch (err) {
            console.log('err createNewUser', err)
            throw err;

        }
    }
}

module.exports = new Login();