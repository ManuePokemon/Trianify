const { Schema, model} = require('mongoose');
var mongoose = require('mongoose');

const listaSchema = new Schema ({
    name: {
        type: String,
        required: "Nombre obligatorio"
    },
    description: {
        type: String,
        maxlength: [300, 'Descripcion muy larga']
    },
    user_id: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    songs:[{
        type: mongoose.ObjectId,
        ref: 'Song'
    }]
}, {
    versionKey: false
});

const Playlist = mongoose.model('Playlist', listaSchema)
export { Playlist };