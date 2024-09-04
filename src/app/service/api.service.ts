import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

admin_register(formdata:any):Observable<boolean>{    
    return this.http.post<boolean>(this.apiUrl + 'admin_register',formdata);
}
admin_login(formdata:any):Observable<boolean>{    
    return this.http.post<boolean>(this.apiUrl + 'admin_login',formdata);
}

}
