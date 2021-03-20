import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const brandApi = 'http://54.151.235.125:48419/api/v1/brands' 
const promotionApi = 'http://54.151.235.125:48419/api/v1/promotions'
const storeApi = 'http://54.151.235.125:48419/api/v1/stores'
const userApi = 'http://54.151.235.125:48419/api/v1/users'
const voucherApi = 'http://54.151.235.125:48419/api/v1/vouchers'

@Injectable({providedIn: 'root'})
export class ApiServiceService {
  
  constructor(private httpClient: HttpClient) { }
 
  // brand

  getAllBrand(): Observable<any> {
    return this.httpClient.get(brandApi);
  }

  createBrand(data): Observable<any> {
    return this.httpClient.post(brandApi, data);
  }

  deleteBrand(id): Observable<any> {
    return this.httpClient.delete(`${brandApi}/${id}`);
  }

  findByTitleBrand(id): Observable<any> {
    return this.httpClient.get(`${brandApi}/${id}`);
  }

  updateBrand(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }
  // promotion 
  getAllPromotion(): Observable<any> {
    return this.httpClient.get(promotionApi);
  }

  createPromotion(data): Observable<any> {
    return this.httpClient.post(promotionApi, data);
  }

  deletePromotion(id): Observable<any> {
    return this.httpClient.delete(`${promotionApi}/${id}`);
  }

  findByTitlePromotion(id): Observable<any> {
    return this.httpClient.get(`${promotionApi}/${id}`);
  }

  updatePromotion(id, data): Observable<any> {
    return this.httpClient.put(`${promotionApi}/${id}`, data);
  }

  // store

  getAllStore(): Observable<any> {
    return this.httpClient.get(storeApi);
  }

  createStore(data): Observable<any> {
    return this.httpClient.post(storeApi, data);
  }

  deleteStore(id): Observable<any> {
    return this.httpClient.delete(`${storeApi}/${id}`);
  }

  findByTitleStore(id): Observable<any> {
    return this.httpClient.get(`${storeApi}/${id}`);
  }

  updateStore(id, data): Observable<any> {
    return this.httpClient.put(`${storeApi}/${id}`, data);
  }

  // user 

  getAllUser(): Observable<any> {
    return this.httpClient.get(userApi);
  }

  createUser(data): Observable<any> {
    return this.httpClient.post(userApi, data);
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(`${userApi}/${id}`);
  }

  findByTitleUser(id): Observable<any> {
    return this.httpClient.get(`${userApi}/${id}`);
  }

  updateUser(id, data): Observable<any> {
    return this.httpClient.put(`${userApi}/${id}`, data);
  }

  // voucher

  getAllVoucher(): Observable<any> {
    return this.httpClient.get(voucherApi);
  }

  createVoucher(data: any): Observable<any> {
    return this.httpClient.post(voucherApi, data);
  }

  deleteVoucher(id): Observable<any> {
    return this.httpClient.delete(`${voucherApi}/${id}`);
  }

  findByTitleVoucher(id): Observable<any> {
    return this.httpClient.get(`${voucherApi}/${id}`);
  }

  updateVoucher(id, data): Observable<any> {
    return this.httpClient.put(`${voucherApi}/${id}`, data);
  }

}
