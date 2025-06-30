import { Router } from 'express';
import { getEngineeringViewModel } from './engineeringModel';
import { getGlobalModel } from '../../shared/globalModel';

export const engineeringController = Router();

engineeringController.get('/engineering', (req, res) => {
    const viewModel = {
        ...getGlobalModel(),
        ...getEngineeringViewModel()
    }
        
  res.render('pages/engineering/engineeringView.njk', viewModel);
});