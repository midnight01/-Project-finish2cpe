import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { CarloanService } from 'src/app/shared/carloan/carloan.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  info: any;
  Customers: any;

  constructor(private httpClient: HttpClient,private token: TokenStorageService, private service: CarloanService) {
  }

  ngOnInit() {
    this.service.getCustomer().subscribe(data => {
      this.Customers = data;
      // console.log(this.Customers);
    });
 

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }
  dow(){
    this.httpClient.get("http://localhost:8080/data/download/customers.xlsx");
  }
}
