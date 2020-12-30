import { IEntityModel } from './entity-model.interface';

export abstract class BaseEntityModel implements IEntityModel {
    public key: any;
    public idempotencyKey: string;
}