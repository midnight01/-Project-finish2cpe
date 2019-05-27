import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/shared/car/car.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  Specifications: any;
  info: any;
  constructor(private token: TokenStorageService,private service: CarService, private router: Router) { }


  ngOnInit() {
    this.service.getSpecification().subscribe(data => {
      this.Specifications = data;
      // console.log(this.Specifications);
    });
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  gg() {
    this.Specifications.engineSize
  }
  goCc(id: string, brand: any, generation: any): void {
    this.router.navigate(['/cc', id, brand, generation]);
  }
  go(){
    
  }
}
