import { ITariffDTO } from '@modules/tariff/dtos/ITariffDTO';
import { ITariffRepository } from '@modules/tariff/repositories/ITariffRepository';
import { getRepository, Repository } from 'typeorm';

import { Tariff } from '../entities/Tariff';

class TariffRepository implements ITariffRepository {
    private repository: Repository<Tariff>;

    constructor() {
        this.repository = getRepository(Tariff);
    }
    async findByTariff(percentage_amount: number): Promise<Tariff> {
        const tariff = await this.repository.findOne({
            percentage_amount,
            is_default: true,
        });
        return tariff;
    }
    async findByDate(start_date: Date, end_date: Date): Promise<Tariff> {
        const tariff = await this.repository.findOne({
            start_date,
            end_date,
        });

        return tariff;
    }
    async findById(id: string): Promise<Tariff> {
        const tariff = this.repository.findOne(id);
        return tariff;
    }
    async create({
        percentage_amount,
        start_date,
        end_date,
        is_default,
    }: ITariffDTO): Promise<void> {
        const tariff = this.repository.create({
            percentage_amount,
            start_date,
            end_date,
            is_default,
        });
        await this.repository.save(tariff);
    }
    async list(): Promise<Tariff[]> {
        return this.repository.find();
    }
}

export { TariffRepository };
