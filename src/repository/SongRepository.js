import { Mongoose } from 'mongoose';
import { Song } from '../models/Song';

const songRepository = {

    async findAll() {
        const result = await Song.find({}).exec();
        return result;
    },
    async create(newSong) {
        let song = new Song({
            title: newSong.title,
            artist: newSong.artist,
            album: newSong.album,
            year: newSong.year
        });
        const result = await song.save(song);
        return result;
    },
    async findSongById(id) {
        try {
            const song = await Song.findById(id).exec();
            return song;
        } catch (error) {
            if (error instanceof ReferenceError) {
                console.log("ID de cancion inexistente");
            }
        }
    },
    async modifySongById(id, songModified) {
        const currentSong = await Song.findOneAndUpdate({ _id: id },
            {
                title: songModified.title,
                artist: songModified.artist,
                album: songModified.album,
                year: songModified.year
            }
        );
        return currentSong;
    },
    async delete(id) {
        return await Song.deleteOne({
            _id: id
        });
    }
}

export {
    songRepository,
}