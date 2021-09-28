import { Router } from 'express';

import { tariffRouter } from './tariff.routes';

const router = Router();

router.use('/fees', tariffRouter);

export { router };
