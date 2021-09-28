import { ITariffDTO } from '@modules/tariff/dtos/ITariffDTO';
import { TariffRepositoryInMemory } from '@modules/tariff/repositories/in-memory/TariffRepositoryInMemory';

let listTariffRepository: TariffRepositoryInMemory;

describe('List Tariff Use Case', () => {
    listTariffRepository = new TariffRepositoryInMemory();

    it('able to list all users', async () => {
        const tariff: ITariffDTO = {
            percentage_amount: 19,
            start_date: new Date('2019-07-17T03:00:00Z'),
            end_date: new Date('2019-07-25T02:59:59Z'),
            is_default: false,
        };

        await listTariffRepository.create({
            percentage_amount: tariff.percentage_amount,
            start_date: tariff.start_date,
            end_date: tariff.end_date,
            is_default: tariff.is_default,
        });

        const tariffs = await listTariffRepository.list();
        expect.arrayContaining([tariffs]);
    });
});
