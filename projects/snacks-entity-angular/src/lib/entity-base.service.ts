import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IEntityModel } from './entity-model.interface';
import { IEntityService } from './entity-service.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class BaseEntityService<TModel extends IEntityModel> implements IEntityService<TModel> {
    constructor(
        protected http: HttpClient,
        protected route: string) { }

    getOne(key: any): Observable<TModel> {
        return this.http.get<TModel>(`${this.route}/${key}`);
    }

    getMany(params?: {[param: string]: string}): Observable<TModel[]> {
        return this.http.get<TModel[]>(this.route, {
            params: params
        });
    }

    post(model: TModel): Observable<TModel> {
        return this.http.post<TModel>(this.route, model);
    }

    patch(key: any, data: {}): Observable<TModel> {
        return this.http.patch<TModel>(`${this.route}/${key}`, data);
    }

    delete(key: any): Observable<HttpResponse<object>> {
        return this.http.delete<HttpResponse<object>>(`${this.route}/${key}`);
    }
}
