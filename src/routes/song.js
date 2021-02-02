import { Router } from 'express';
import { songController } from '../controller/SongController';
import { token } from '../services/passport'

const router = Router();

router.get('/', token(), songController.allSongs);
router.post('/', token(), songController.addSong);
router.get('/:id', token(), songController.findSongById);
router.put('/:id', token(), songController.updateSong);
router.delete('/:id', token(), songController.deleteSong);

export default router;