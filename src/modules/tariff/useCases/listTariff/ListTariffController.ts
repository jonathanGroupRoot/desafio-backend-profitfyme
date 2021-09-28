import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTariffUseCase } from './ListTariffUseCase';

class ListTariffController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listTariffUseCase = container.resolve(ListTariffUseCase);

        const listTariff = await listTariffUseCase.execute();

        return response.status(200).json(listTariff);
    }
}
export { ListTariffController };
