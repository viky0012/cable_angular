import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
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
  constructor(private router:Router, 	private modalService:NgbModal){}

  open_sign_out_model(content:any)
  {
     this.modalService.open(content, { size: 'sm' });
  }
  sign_out()
  {
     localStorage.removeItem('w2d_access_token');
     this.router.navigateByUrl('/login');

  }
}
