import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEntityModel } from './entity-model.interface';
import { Observable } from 'rxjs';

export interface IEntityService<TModel extends IEntityModel> {
    getOne(key: any): Observable<TModel>;
    getMany(params?: {[param: string]: string}): Observable<TModel[]>;
    post(model: TModel): Observable<TModel>;
    patch(key: any, data: {}): Observable<TModel>;
    delete(key: any): Observable<HttpResponse<object>>;
}