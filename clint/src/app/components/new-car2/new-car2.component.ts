import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { car } from 'src/app/shared/models/model-class';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

export interface type {
  typeCar: any;
}
export interface System {
  gearSystem: any;
}

@Component({
  selector: 'app-new-car2',
  templateUrl: './new-car2.component.html',
  styleUrls: ['./new-car2.component.css']
})
export class NewCar2Component implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  car: car = new car;
  info: any;
  itemRef: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase, private token: TokenStorageService, private storage: AngularFireStorage, private httpClient: HttpClient, private router: Router) {
  }

  typeCars: type[] = [
    { typeCar: 'รถใหม่' },
    { typeCar: 'รถมือสอง' }
  ];
  gearSystems: System[] = [
    { gearSystem: 'เกียร์อัตโนมัติ' },
    { gearSystem: 'เกียร์ธรรมดา' }
  ];

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }

  next() {
  }

  files: any = [];
  uploadPercent0: Observable<number>;
  uploadPercent1: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  downloadURL0: Observable<string>;
  downloadURL1: Observable<string>;
  downloadURL2: Observable<string>;
  downloadURL3: Observable<string>;
  public imagePath1;
  imgURL1: any;
  public imagePath2;
  imgURL2: any;
  public imagePath3;
  imgURL3: any;
  public imagePath4;
  imgURL4: any;
  uploadFile(event) {
    if (event.length <= 4 && this.car.brand != null) {
      for (let index = 0; index < event.length; index++) {
        const element = event[index];
        this.files.push(element.name)
        const filePath0 = 'image/' + this.car.brand + '/' + this.car.generation + '/0';
        const fileRef0 = this.storage.ref(filePath0);
        const task0 = this.storage.upload(filePath0, event[0]);
        this.uploadPercent0 = task0.percentageChanges();
        task0.snapshotChanges().pipe(
          finalize(() => this.downloadURL0 = fileRef0.getDownloadURL())
        )
          .subscribe()

        var reader1 = new FileReader();
        reader1.readAsDataURL(event[0]);
        reader1.onload = (_event) => {
          this.imgURL1 = reader1.result;
        }
        const filePath1 = 'image/' + this.car.brand + '/' + this.car.generation + '/1';
        const fileRef1 = this.storage.ref(filePath1);
        const task1 = this.storage.upload(filePath1, event[1]);

        this.uploadPercent1 = task1.percentageChanges();
        task1.snapshotChanges().pipe(
          finalize(() => this.downloadURL1 = fileRef1.getDownloadURL())
        )
          .subscribe()
        var reader2 = new FileReader();
        reader2.readAsDataURL(event[1]);
        reader2.onload = (_event) => {
          this.imgURL2 = reader2.result;
        }

        const filePath2 = 'image/' + this.car.brand + '/' + this.car.generation + '/2';
        const fileRef2 = this.storage.ref(filePath2);
        const task2 = this.storage.upload(filePath2, event[2]);

        this.uploadPercent2 = task2.percentageChanges();
        task2.snapshotChanges().pipe(
          finalize(() => this.downloadURL2 = fileRef2.getDownloadURL())
        )
          .subscribe()
        var reader3 = new FileReader();
        reader3.readAsDataURL(event[2]);
        reader3.onload = (_event) => {
          this.imgURL3 = reader3.result;
        }

        const filePath3 = 'image/' + this.car.brand + '/' + this.car.generation + '/3';
        const fileRef3 = this.storage.ref(filePath3);
        const task3 = this.storage.upload(filePath3, event[3]);

        this.uploadPercent3 = task3.percentageChanges();
        task3.snapshotChanges().pipe(
          finalize(() => this.downloadURL3 = fileRef3.getDownloadURL())
        )
          .subscribe()
        var reader4 = new FileReader();
        reader4.readAsDataURL(event[3]);
        reader4.onload = (_event) => {
          this.imgURL4 = reader4.result;
        }

      }
      // console.log("ok");
    } else {
      // console.log("no");
    }

  }

  deleteAttachment(index) {
    this.files.splice(index, 1)

  }


  save() {
    this.httpClient.post("//localhost:8080/data/Specification/save",
      this.car)
      .subscribe(
        data => {
          // console.log('PUT Request is successful', data);
          this.router.navigate(['/home']);
        },
        error => {
          console.log('Rrror', error);
        }
      )
    const user2 = this.itemRef = this.db.object('image/' + this.car.brand + '/' + this.car.generation);
    user2.set({
      1: this.imgURL1,
      2: this.imgURL2,
      3: this.imgURL3,
      4: this.imgURL4
    });

  }

}
