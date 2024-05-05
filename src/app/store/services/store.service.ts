import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
import {BundleEntity} from "../model/bundle.entity";
import {ProductEntity} from "../model/product.entity";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { }

  getBundles(): Observable<BundleEntity[]> {
    return this.http.get<BundleEntity[]>(`${environment.baseUrl}/bundles`);
  }

  getProductsByBundleId(bundleId: number): Observable<ProductEntity[]> {
    return this.http.get<ProductEntity[]>(`${environment.baseUrl}/bundles/${bundleId}/products`);
  }
}
