const { Schema } = require('mongoose');
var mongoose = require('mongoose');

var cancionesSchema = new Schema ({
    title: {
        type: String,
        required: 'Introduzca el titulo de la cancion'
    },
    artist: {
        type: String,
        required: 'Introduzca el nombre del artista'
    },
    album: {
        type: String,
        required: 'Introduzca el album de la cancion'
    },
    year: {
        type: Number,
        required: 'Introduzca el año de la cancion',
        max: [2022, 'Año no valido']
    }
});

const Song = mongoose.model('Song', cancionesSchema)


export {
    Song
}
