import { Component } from '@angular/core';
import {BundleCardComponent} from "../../components/bundle-card/bundle-card.component";

@Component({
  selector: 'app-bundle-page',
  standalone: true,
  imports: [
    BundleCardComponent
  ],
  templateUrl: './bundle-page.component.html',
  styleUrl: './bundle-page.component.css'
})
export class BundlePageComponent {

}
