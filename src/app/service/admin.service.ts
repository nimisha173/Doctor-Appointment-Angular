import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postDoctor(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    
    }))
  }

  getDoctor(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    
    }))
}

updateDoctor(data:any,doctorId:number){
  return this.http.put<any>("http://localhost:3000/posts/"+doctorId,data)
  .pipe(map((res:any)=>{
    return res;
  
  }))
}

deleteDoctor(doctorId:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+doctorId)
  .pipe(map((res:any)=>{
    return res;
  
  }))
}
}