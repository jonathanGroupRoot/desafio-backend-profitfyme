import { TariffRepository } from '@modules/tariff/infra/typeorm/repositories/TariffRepositories';
import { ITariffRepository } from '@modules/tariff/repositories/ITariffRepository';
import { container } from 'tsyringe';

container.registerSingleton<ITariffRepository>(
    'TariffRepository',
    TariffRepository,
);
