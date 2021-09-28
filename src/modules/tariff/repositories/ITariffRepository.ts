import { ITariffDTO } from '../dtos/ITariffDTO';
import { Tariff } from '../infra/typeorm/entities/Tariff';

interface ITariffRepository {
    create(data: ITariffDTO): Promise<void>;
    list(): Promise<Tariff[]>;
    findById(id: string): Promise<Tariff>;
    findByDate(start_date: Date, end_date: Date): Promise<Tariff>;
    findByTariff(percentage_amount: number): Promise<Tariff>;
}

export { ITariffRepository };
