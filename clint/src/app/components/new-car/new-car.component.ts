import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { car } from 'src/app/shared/models/model-class';
import { HttpClient } from '@angular/common/http';


export interface type {
  typeCar: any;
}
export interface System {
  gearSystem: any;
}

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  info: any;
  car: car = new car;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private token: TokenStorageService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  typeCars: type[] = [
    { typeCar: 'รถใหม่' },
    { typeCar: 'รถมือสอง' }
  ];
  gearSystems: System[] = [
    { gearSystem: 'เกียร์อัตโนมัติ' },
    { gearSystem: 'เกียร์ธรรมดา' }
  ];

  save() {
    console.log(this.car);


    // this.newcar.addData(this.car).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSignedUp = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error => {
    //     console.log(error);
    //     this.errorMessage = error.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );

    this.httpClient.post("//localhost:8080/data/Specification/save",
      this.car)
      .subscribe(
        data => {
          console.log('PUT Request is successful', data);
          // this.router.navigate(['/home']);
        },
        error => {
          console.log('Rrror', error);
        }
      )
  }
}
