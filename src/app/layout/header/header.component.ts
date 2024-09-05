import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,AfterViewInit {
  token:any;
  name:any;
  email:any;
  modalElement: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('w2d_access_token');
    if(this.token) 
    {
        const jwtToken = JSON.parse(atob(this.token.split('.')[1]));    
        this.name=jwtToken['enC_request']['name'];  
        this.email=jwtToken['enC_request']['email'];  
    }
  }
  ngAfterViewInit() {
    // Get the modal element
    const modalEl = document.getElementById('modalDefault');
    // Initialize the modal with Bootstrap's modal JavaScript API
    this.modalElement = new (window as any).bootstrap.Modal(modalEl);
  }
  constructor(private router:Router){}

  open_sign_out_model()
  {
    //  this.modalService.open(content, { size: 'sm' });
    this.modalElement.show();
  }
  sign_out()
  {
     localStorage.removeItem('w2d_access_token');
     this.router.navigateByUrl('/login');

  }
}
