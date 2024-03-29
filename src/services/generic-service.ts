import { DataSource, EntityTarget, FindOptionsWhere, Repository, UpdateResult } from "typeorm";
import { DatabaseStore } from "../core/db-store";
import { EntityCreatingError, EntityDeleteError, EntityUpdateError } from "../errors/db-errors";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { BaseEntity } from "../models/base-entity";


export class GenericService<T extends BaseEntity> {

  public _dbContext: DataSource;
  public _dbSet: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this._dbContext = DatabaseStore.dataStore;
    this._dbSet = this._dbContext.getRepository<T>(entity);
  }

  public async getAllAsync(): Promise<T[]> {
    let entities = await this._dbSet.find();
    return entities;
  }

  public async getByIdAsync(id: number): Promise<T | null> {
    let entity = await this._dbSet.findOne({
      where: {
        id: id
      } as FindOptionsWhere<T>
    });

    return entity;
  }

  public async createAsync(entity: T): Promise<T | null> {
    let model = this._dbSet.create(entity);
    let res = await this._dbSet.save(model);

    if (res == null) {
      throw new EntityCreatingError();
    }

    return model;
  }

  public async updateAsync(entity: T): Promise<void> {
    let model = await this._dbSet.update(entity.id, entity as QueryDeepPartialEntity<T>);

    if (model.affected == 0) {
      throw new EntityUpdateError();
    }
  }

  public async deleteAsync(id: number): Promise<void> {
    let model = await this._dbSet.delete(id);

    if (model.affected == 0) {
      throw new EntityDeleteError();
    }
  }

  public async entityExistAsync(id: number): Promise<boolean> {
    let exist = await this._dbSet.exist({
      where: {
        id: id
      } as FindOptionsWhere<T>
    });

    return exist;
  }
}