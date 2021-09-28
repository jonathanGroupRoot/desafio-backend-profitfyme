import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTariffUseCase } from './CreateTariffUseCase';

class CreateTariffController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createTariffUseCase = container.resolve(CreateTariffUseCase);

        const { percentage_amount, start_date, end_date, is_default } =
            request.body;

        const tariff = await createTariffUseCase.execute({
            percentage_amount,
            start_date,
            end_date,
            is_default,
        });
        return response.status(201).json(tariff);
    }
}
export { CreateTariffController };
