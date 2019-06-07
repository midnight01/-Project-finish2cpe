import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { car } from 'src/app/shared/models/model-class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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
  itemRef: AngularFireObject<any>;
  files: any = [];
  

  uploadPercent1: Observable<number>;
  items: Observable<any[]>;
  profileUrl: Observable<string | null>;
  // profileUrl1: Observable<string | null>;
  // profileUrl2: Observable<string | null>;
  // profileUrl3: Observable<string | null>;
  meta: Observable<any>;
  constructor(public db: AngularFireDatabase, private storage: AngularFireStorage, private token: TokenStorageService, private httpClient: HttpClient, private router: Router) {
    // const ref = this.storage.ref('image/1');
    // this.profileUrl = ref.getDownloadURL();
    // const ref = this.storage.ref('BMW/X1/0');
    //  this.meta = ref.getMetadata();
    const ref = this.storage.ref('BMW/X1/1');
    this.profileUrl = ref.getDownloadURL();

    // this.items = db.list('ss/').valueChanges();
  }

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

  public imagePath3;
  imgURL3: any;
  public message: string;
  preview3(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader1 = new FileReader();
    this.imagePath3 = files;
    reader1.readAsDataURL(files[0]);
    reader1.onload = (_event) => {
      this.imgURL3 = reader1.result;
    }
  }

  save(image: URL) {
    this.car.image = this.downloadURL;
    // for (let i = 0; i <= 4; i++) {
    // }
    console.log(this.car);
    // this.httpClient.post("//localhost:8080/data/Specification/save",
    //   this.car)
    //   .subscribe(
    //     data => {
    //       console.log('PUT Request is successful', data);
    //       // this.router.navigate(['/home']);
    //     },
    //     error => {
    //       console.log('Rrror', error);
    //     }
    //   )
  }

  show(downloadURL){
    console.log(downloadURL);

    
  }

  downloadURL: any;
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      const filePath = '88/' + index;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, element);
      this.uploadPercent1 = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())

      )
        .subscribe()
    }

  }

  deleteAttachment(index) {
    // this.files.splice(index, 1)
    console.log(index)

  }

}
