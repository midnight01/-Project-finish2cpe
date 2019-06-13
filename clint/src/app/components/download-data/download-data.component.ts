import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { CarloanService } from 'src/app/shared/carloan/carloan.service';
import { customer } from 'src/app/shared/models/model-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-data',
  templateUrl: './download-data.component.html',
  styleUrls: ['./download-data.component.css']
})
export class DownloadDataComponent implements OnInit {


  customer: customer = new customer;
  info: any;


  constructor(private token: TokenStorageService, private service: CarloanService, private router: Router) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }
  save(){
    this.router.navigate(['/customer-list',this.customer.date,this.customer.dateEnd]);
      
  }
}
