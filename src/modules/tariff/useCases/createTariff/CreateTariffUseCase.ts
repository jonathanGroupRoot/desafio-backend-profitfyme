import { ITariffDTO } from '@modules/tariff/dtos/ITariffDTO';
import { ITariffRepository } from '@modules/tariff/repositories/ITariffRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateTariffUseCase {
    constructor(
        @inject('TariffRepository') private tariffRepository: ITariffRepository,
    ) {}

    async execute({
        percentage_amount,
        start_date,
        end_date,
        is_default,
    }: ITariffDTO): Promise<void> {
        const tariffExists = await this.tariffRepository.findByDate(
            start_date,
            end_date,
        );

        if (tariffExists) {
            throw new AppError('Tariff already exists');
        }

        const tariffDefalut = await this.tariffRepository.findByTariff(
            percentage_amount,
        );

        if (tariffDefalut) {
            throw new AppError('Standard rate already exists');
        }

        await this.tariffRepository.create({
            percentage_amount,
            start_date,
            end_date,
            is_default,
        });
    }
}

export { CreateTariffUseCase };
