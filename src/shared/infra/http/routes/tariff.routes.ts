import { CreateTariffController } from '@modules/tariff/useCases/createTariff/CreateTariffController';
import { ListTariffController } from '@modules/tariff/useCases/listTariff/ListTariffController';
import { Router } from 'express';

const tariffRouter = Router();

const createTariffController = new CreateTariffController();
const listTariffController = new ListTariffController();

tariffRouter.post('/', createTariffController.handle);
tariffRouter.get('/', listTariffController.handle);

export { tariffRouter };
