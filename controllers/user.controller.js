// const Model = require('../models/User')

const BookEntity = require('../Entities/user')

class User {
    constructor() {

    }
    async getAllUser({ name }) {
        try {
            const regexName = new RegExp(`${name}`)
            const query = {};

            if (name) query.name = regexName;
            const result = await BookEntity.find(query).limit(20)
            return {
                data: result,
                status: 200,
            }

        } catch (err) {

        }
    }

    async getUserById({ userId }) {
        console.log('userId_dnd', userId)
        const result = await BookEntity.findOne({ idUser: userId })
        return {
            data: result,
            status: 200,
        }


    }
    async getUserByEmail({ userEmail }) {
        const result = await BookEntity.findOne({ email: userEmail })
        return {
            data: result,
            status: 200,
        }


    }
    async getUserByPhone({ userPhone }) {
        const result = await BookEntity.findOne({ phone: userPhone })
        return {
            data: result,
            status: 200,
        }


    }
    async getUserByKindPerson({ userKind }) {
        const result = await BookEntity.findOne({ kindPerson: userKind })
        return {
            data: result,
            status: 200,
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
    async editUser({ userId, data }) {
        try {
            const result = await BookEntity.findOneAndUpdate({ idUser: userId }, { $set: data })
            return {
                data: result,
                status: 200,
            }

        } catch (err) {
            console.log('err createNewUser', err)
            throw err;
        }
    }
    async deleteUser({ userId }) {
        try {
            const result = await BookEntity.deleteOne({ idUser: userId })
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

module.exports = new User();