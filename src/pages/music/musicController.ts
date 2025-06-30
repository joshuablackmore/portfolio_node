import { Router } from 'express';
import { getMusicViewModel } from './musicModel';
import { getGlobalModel } from '../../shared/globalModel';


export const musicController = Router();

musicController.get('/music', (req, res) => {
    const viewModel = {
        ...getGlobalModel(),
        ...getMusicViewModel()
    };
    res.render('pages/music/musicView.njk', viewModel);
});