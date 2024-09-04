import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  token:any;
  name:any;
  email:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('w2d_access_token');
    if(this.token) 
    {
        const jwtToken = JSON.parse(atob(this.token.split('.')[1]));    
        this.name=jwtToken['enC_request']['name'];  
        this.email=jwtToken['enC_request']['email'];  
    }
  }

}
