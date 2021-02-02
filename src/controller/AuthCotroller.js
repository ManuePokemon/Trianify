import { JwtService } from '../services/jwt/index';
import { userRepository } from '../repository/UserRepository';
import { User } from '../models/User';

const  AuthController = {

    register: (req, res, next) => {
        let newUsuario = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        userRepository.addUser(newUsuario);
        res.status(201).json({
            username: newUsuario.username,
            email: newUsuario.email
        });
    },
    login: (req, res, next) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }
}

export {
    AuthController
}