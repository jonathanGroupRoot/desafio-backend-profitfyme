import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('tariffs')
class Tariff {
    @PrimaryColumn()
    id?: string;

    @Column('int')
    percentage_amount: number;

    @Column('date')
    start_date?: Date;

    @Column('date')
    end_date: Date;

    @Column()
    is_default: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Tariff };
