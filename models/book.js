const BookEntity = require('../Entities/book.entity')
class Book {
    constructor(model) {
        this.model = model;
    }
    async getAllBook({ name }) {
        try {
            console.log('name', name)
            const regexName = new RegExp(`${name}`)
            const query = {};
            if (name) query.name = regexName;

            const result = await this.model.find(query).limit(20)
            return {
                data: result,
                status: 200,
            }

        } catch (err) {

        }
    }

    async getBookByName({ userId }) {
        console.log('userId_dnd', userId)
        const result = await this.model.findOne({ _id: userId })
        return {
            data: result,
            status: 200,
        }


    }
    async creatNewBook(body) {
        try {
            const result = await this.model.create(body)
            return {
                data: result,
                status: 200,
            }

        } catch (err) {
            console.log('err createNewUser', err)
            throw err;

        }
    }
    async editBook({ userId, data }) {
        try {
            const result = await this.model.findOneAndUpdate({ _id: userId }, { $set: data })
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
            const result = await this.model.deleteOne({ _id: userId })
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

module.exports = new Book(BookEntity);