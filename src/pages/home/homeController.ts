import { Router } from 'express';
import { getHomeViewModel } from './homeModel';
import { getGlobalModel } from '../../shared/globalModel';

export const homeController = Router();

homeController.get('/', (req, res) => {
    const viewModel = {
        ...getGlobalModel(),
        ...getHomeViewModel()
    }
        
  res.render('pages/home/homeView.njk', viewModel);
});