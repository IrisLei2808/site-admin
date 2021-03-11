import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const brandApi = 'https://5f07309b9c5c250016306abe.mockapi.io/productData2' 
const promotionApi = ''
const storeApi = ''
const userApi = ''
const voucherApi = ''

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

  findByTitleBrand(title): Observable<any> {
    return this.httpClient.get(`${brandApi}?title=${title}`);
  }

  updateBrand(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }
  // promotion 
  getAllPromotion(): Observable<any> {
    return this.httpClient.get(brandApi);
  }

  createPromotion(data): Observable<any> {
    return this.httpClient.post(brandApi, data);
  }

  deletePromotion(id): Observable<any> {
    return this.httpClient.delete(`${brandApi}/${id}`);
  }

  findByTitlePromotion(title): Observable<any> {
    return this.httpClient.get(`${brandApi}?title=${title}`);
  }

  updatePromotion(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }

  // store

  getAllStore(): Observable<any> {
    return this.httpClient.get(brandApi);
  }

  createStore(data): Observable<any> {
    return this.httpClient.post(brandApi, data);
  }

  deleteStore(id): Observable<any> {
    return this.httpClient.delete(`${brandApi}/${id}`);
  }

  findByTitleStore(title): Observable<any> {
    return this.httpClient.get(`${brandApi}?title=${title}`);
  }

  updateStore(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }

  // user 

  getAllUser(): Observable<any> {
    return this.httpClient.get(brandApi);
  }

  createUser(data): Observable<any> {
    return this.httpClient.post(brandApi, data);
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(`${brandApi}/${id}`);
  }

  findByTitleUser(title): Observable<any> {
    return this.httpClient.get(`${brandApi}?title=${title}`);
  }

  updateUser(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }

  // voucher

  getAllVoucher(): Observable<any> {
    return this.httpClient.get(brandApi);
  }

  createVoucher(data: any): Observable<any> {
    return this.httpClient.post(brandApi, data);
  }

  deleteVoucher(id): Observable<any> {
    return this.httpClient.delete(`${brandApi}/${id}`);
  }

  findByTitleVoucher(title): Observable<any> {
    return this.httpClient.get(`${brandApi}?title=${title}`);
  }

  updateVoucher(id, data): Observable<any> {
    return this.httpClient.put(`${brandApi}/${id}`, data);
  }

}
