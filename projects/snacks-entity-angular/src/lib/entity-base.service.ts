import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IEntityService } from './entity-service.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class BaseEntityService<TEntity> implements IEntityService<TEntity> {
    constructor(
        protected http: HttpClient,
        protected route: string) { }

    getOne(key: any): Observable<TEntity> {
        return this.http.get<TEntity>(`${this.route}/${key}`);
    }

    getMany(params?: {[param: string]: string}): Observable<TEntity[]> {
        return this.http.get<TEntity[]>(this.route, {
            params: params
        });
    }

    post(model: TEntity): Observable<TEntity> {
        return this.http.post<TEntity>(this.route, model);
    }

    patch(key: any, data: {}): Observable<TEntity> {
        return this.http.patch<TEntity>(`${this.route}/${key}`, data);
    }

    delete(key: any): Observable<HttpResponse<object>> {
        return this.http.delete<HttpResponse<object>>(`${this.route}/${key}`);
    }
}
