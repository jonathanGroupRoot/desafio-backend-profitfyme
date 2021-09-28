import { Tariff } from '@modules/tariff/infra/typeorm/entities/Tariff';
import { ITariffRepository } from '@modules/tariff/repositories/ITariffRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListTariffUseCase {
    constructor(
        @inject('TariffRepository')
        private listTariffRepository: ITariffRepository,
    ) {}

    async execute(): Promise<Tariff[]> {
        return this.listTariffRepository.list();
    }
}

export { ListTariffUseCase };
