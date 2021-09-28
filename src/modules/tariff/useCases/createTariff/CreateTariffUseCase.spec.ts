import { ITariffDTO } from '@modules/tariff/dtos/ITariffDTO';
import { TariffRepositoryInMemory } from '@modules/tariff/repositories/in-memory/TariffRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateTariffUseCase } from './CreateTariffUseCase';

let tariffRepositoryInMemory: TariffRepositoryInMemory;
let createTariffUseCase: CreateTariffUseCase;

describe('CreateTariff', () => {
    beforeEach(() => {
        tariffRepositoryInMemory = new TariffRepositoryInMemory();
        createTariffUseCase = new CreateTariffUseCase(tariffRepositoryInMemory);
    });
    it('should be able to create a new category', async () => {
        const tariff: ITariffDTO = {
            percentage_amount: 20,
            start_date: new Date('2038-07-16T03:00:00Z'),
            end_date: new Date('2039-07-17T02:59:59Z'),
            is_default: false,
        };
        await createTariffUseCase.execute({
            percentage_amount: tariff.percentage_amount,
            start_date: tariff.start_date,
            end_date: tariff.end_date,
            is_default: tariff.is_default,
        });
        const tariffAlreadyExists = await tariffRepositoryInMemory.findByTariff(
            tariff.percentage_amount,
        );

        expect(tariffAlreadyExists).toHaveProperty('percentage_amount');
    });

    it('should not be able to create more than one boss fare', async () => {
        expect(async () => {
            const tariff: ITariffDTO = {
                percentage_amount: 15,
                is_default: true,
            };

            await createTariffUseCase.execute({
                percentage_amount: tariff.percentage_amount,
                is_default: tariff.is_default,
            });

            await createTariffUseCase.execute({
                percentage_amount: tariff.percentage_amount,
                is_default: tariff.is_default,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create rate in the same period', async () => {
        expect(async () => {
            const tariff: ITariffDTO = {
                percentage_amount: 10,
                start_date: new Date('2019-07-17T03:00:00Z'),
                end_date: new Date('2019-07-25T02:59:59Z'),
                is_default: false,
            };

            await createTariffUseCase.execute({
                percentage_amount: tariff.percentage_amount,
                start_date: tariff.start_date,
                end_date: tariff.end_date,
                is_default: tariff.is_default,
            });

            await createTariffUseCase.execute({
                percentage_amount: tariff.percentage_amount,
                start_date: tariff.start_date,
                end_date: tariff.end_date,
                is_default: tariff.is_default,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
