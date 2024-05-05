// This component displays the details of a product bundle.
// Author: Jeremy Joel Quispe Andia

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { BundleEntity } from '../../model/bundle.entity';
import {MatCardModule } from "@angular/material/card";
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bundle-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './bundle-card.component.html',
  styleUrl: './bundle-card.component.css',
  providers: [StoreService]
})
export class BundleCardComponent implements OnInit{
  bundles: BundleEntity[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    // Fetch bundles and associated products on component initialization
    this.storeService.getBundles().subscribe(bundles => {
      this.bundles = bundles;
      this.bundles.forEach(bundle => {
        this.storeService.getProductsByBundleId(bundle.id).subscribe(products => {
          bundle.products = products;
          bundle.youSave = this.calculateSavings(bundle);
        });
      });
    });
  }

  // Calculate total savings when purchasing a bundle
  calculateSavings(bundle: BundleEntity): number {
    let totalProductPrice = bundle.products.reduce((acc, product) => acc + product.price, 0);
    return totalProductPrice - bundle.price;
  }
}
