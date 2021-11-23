import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private Http:HttpClient) { }


  public doRegistration(user:any){
    return this.Http.post("http://localhost:9191/register",user,{responseType:'text' as 'json'});
  }

  public getUsers() {
    return this.Http.get("http://localhost:9191/getAllStudents");
  }

  public getUserByEmail(email:any) {
    return this.Http.get("http://localhost:9191/findStudent/"+email);
  }

  public getUserById(id:any) {
    return this.Http.get<User>("http://localhost:9191/getById/"+id);
  }

  public deleteUser(id:any) {
    return this.Http.delete("http://localhost:9191/cancel/"+id);
  }

  public updateUser(user:any) {
    return this.Http.put("http://localhost:9191/update/"+ user.id, user);
  }

}
