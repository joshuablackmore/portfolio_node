import { Router } from 'express';
import { homeController } from '../pages/home/homeController';
import { musicController } from '../pages/music/musicController';
import { engineeringController } from '../pages/engineering/engineeringController';

const router = Router();

router.use('/', homeController);
router.use('/', musicController);
router.use('/', engineeringController)

export default router;