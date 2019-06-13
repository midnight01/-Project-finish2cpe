import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { CarloanService } from 'src/app/shared/carloan/carloan.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  info: any;
  Customers: any;
  date: any;
  dateEnd: any;
  constructor(private token: TokenStorageService, private service: CarloanService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.date = params['data'];
    });
    this.route.params.subscribe(params => {
      this.dateEnd = params['data1'];
    });
  }

  ngOnInit() {
    this.service.getCustomer(this.date,this.dateEnd).subscribe(data => {
      this.Customers = data;
    });
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }
}
