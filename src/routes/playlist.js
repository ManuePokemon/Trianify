import { Router } from 'express';
import { token } from '../services/passport'
import { playlistController } from '../controller/PlaylistController';
import { validar } from '../middlewares/validation';
import { body } from 'express-validator';

const router = Router();

router.get('/', validar, token(), playlistController.findAll);
router.post('/',[token(),body('id').not().exists().withMessage('El ID es automatico')],validar,playlistController.create);
router.get('/:id', token(), playlistController.descriptionById);
router.put('/:id', token(), playlistController.updatePlaylist);
router.delete('/:id', token(), playlistController.deletePlaylist);
router.post('/:idPlaylist/songs/:idSong', token(), playlistController.addSongToPlaylist);
router.get('/:id/songs', token(), playlistController.getPlaylistSongs);
router.get('/:idPlaylist/songs/:idSong', token(), playlistController.getSongFromPlaylist);
router.delete('/:idPlaylist/songs/:idSong', token(), playlistController.deleteSongFromPlaylist);

export default router;