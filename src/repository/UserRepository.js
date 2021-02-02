import bcrypt from 'bcryptjs';
import { User } from '../models/User';


const emailExists = async (emailUser) => {
    let users = await User.find({}).exec();
    let emails = users.map(user => user.email);
    return emails.includes(emailUser);
}

const usernameExists = async (user) => {
    let users = await User.find({}).exec();
    let usernames = users.map(user => user.username);
    return usernames.includes(user);
}
const userRepository = {

    async findAll() {
        const result = await User.find({}).exec();
        return result;
    },
    async addUser(newUser) {
        let password = bcrypt.hashSync(newUser.password, parseInt(process.env.BCRYPT_ROUNDS));
        const user = new User({
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            password: password
        });
        const result = await user.save();
        return result;
    },
    async findByUsername(user) {
        return await User.findOne({ username: user }).exec();
    },
    async findById(id) {
        const users = await User.find({});
        let result = users.filter(user => user.id == id)
        return result;
    },
    toDto(user) {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }
    }
}

export {
    userRepository,
    emailExists,
    usernameExists
}