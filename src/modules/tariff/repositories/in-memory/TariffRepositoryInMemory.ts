import { ITariffDTO } from '@modules/tariff/dtos/ITariffDTO';
import { Tariff } from '@modules/tariff/infra/typeorm/entities/Tariff';

import { ITariffRepository } from '../ITariffRepository';

class TariffRepositoryInMemory implements ITariffRepository {
    tariff: Tariff[] = [];
    async findByDate(start_date: Date, end_date: Date): Promise<Tariff> {
        const tariff = this.tariff.find(
            tariff =>
                tariff.start_date === start_date &&
                tariff.end_date === end_date,
        );
        return tariff;
    }
    async findByTariff(percentage_amount: number): Promise<Tariff> {
        const tariff = this.tariff.find(
            tariff => tariff.percentage_amount === percentage_amount,
        );
        return tariff;
    }
    async create({
        percentage_amount,
        start_date,
        end_date,
        is_default,
    }: ITariffDTO): Promise<void> {
        const tariffs = new Tariff();
        Object.assign(tariffs, {
            percentage_amount,
            start_date,
            end_date,
            is_default,
        });
        this.tariff.push(tariffs);
    }
    async findById(id: string): Promise<Tariff> {
        const tariffs = this.tariff.find(tarif => tarif.id === id);
        return tariffs;
    }
    async list(): Promise<Tariff[]> {
        const all = this.tariff;
        return all;
    }
}
export { TariffRepositoryInMemory };
