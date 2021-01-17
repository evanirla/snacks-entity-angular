import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IEntityService<TEntity> {
    getOne(key: any): Observable<TEntity>;
    getMany(params?: {[param: string]: string}): Observable<TEntity[]>;
    post(model: TEntity): Observable<TEntity>;
    patch(key: any, data: {}): Observable<TEntity>;
    delete(key: any): Observable<HttpResponse<object>>;
}