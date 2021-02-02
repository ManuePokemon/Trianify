const { Schema } = require('mongoose');
var mongoose = require('mongoose');

let usuarioSchema = new Schema ({
    name: {
        type: String,
        required: 'Introduzca el nombre y el apellido'
    },
    username: {
        unique: true,
        type: String,
        required: 'Introduzca el nombre de usuario'
    },
    email: {
        type: String,
        unique: true,
        required: 'Introduzca el correo electrónico'

    },
    password: {
        type: String,
        require: 'Introduzca la contraseña'
    }
}, {
    versionKey: false
});

const User = mongoose.model('User', usuarioSchema)

export{
    User
}