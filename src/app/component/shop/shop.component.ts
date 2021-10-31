import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
//Need to create a property where we can store all the products
public productList: any;
//Now inject API service I created
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res => {
      this.productList = res;
    })
  }

}
