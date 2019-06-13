import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarloanService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public API = '//localhost:8080/data';

  constructor(private http: HttpClient) {
  }

  getCarloanId(carloanId: any): Observable<any> {
    return this.http.get(this.API + '/Carloan/' + carloanId);
  }

  getCustomer(date:any,dateEnd:any): Observable<any> {
    return this.http.get(this.API + '/Customer/date/'+date+'/dateEnd/'+dateEnd);
  }
  
  getdate(date:any,dateEnd:any){
    this.http.get(this.API + "/download/date/"+date+"/dateEnd/"+dateEnd+"/customers.xlsx");
  }
}
