import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User(0,"", 0, "", 0, "", "");
  message: any;

  constructor(private service: UserRegistrationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    
    if(!id)
    return;
    this.service.getUserById(id).subscribe(data=>{
      this.user = data;
    });
    
  }



  public registerNow() {
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => { 
      this.message = data;
      window.location.href="/search";

    });
  }

  public update() {
    let resp = this.service.updateUser(this.user);
    resp.subscribe((data) => { 
      this.message = data;
      window.location.href="/search";

    });
  }
}
