import { Component,OnInit,AfterViewInit  } from '@angular/core';
import { FormsModule,FormControl, FormGroup,FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,AfterViewInit  {
  loginForm: FormControl | any;
  constructor(private fb: FormBuilder,private toastrService: ToastrService, private apiService:ApiService, private router:Router){}
  ngOnInit(): void {
    // localStorage.removeItem('w2d_access_token');
    this.loginForm = this.fb.group({      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  toastElement: any;
  toastTitle!: string;
  toastMessage!: string;
  ngAfterViewInit() {
    // Get the toast element using its ID
    const toastEl = document.getElementById('toaster');
    // Initialize the Bootstrap toast
    this.toastElement = new (window as any).bootstrap.Toast(toastEl, { delay: 5000 });
  }

  async onSubmit() {          
    this.loginForm.markAllAsTouched();  
    if (this.loginForm.valid) {
      const formData = new FormData();     
      formData.append('password', this.loginForm.get('password').value);
      formData.append('email', this.loginForm.get('email').value);  
      this.apiService.admin_login(formData).subscribe(
        (res: any) => {
          // console.log('res',res)
          if (res.status === 201) {
            localStorage.setItem('w2d_access_token',res.token_key);
            this.toastTitle='Login';  
            this.toastMessage=res.messages;  
            // this.toastrService.success(res.messages, 'status', {
            //   timeOut: 2000,
            //   closeButton: true,
            //    positionClass: 'toast-top-right'
            // }); 
            this.toastElement.show();
            setTimeout(()=>{
              this.router.navigateByUrl('dashboard');  
            },2000);      
             
          } else if (res.status === 404) {
            this.toastrService.error(res.messages, 'status', {
              timeOut: 1200,
              closeButton: true,
              positionClass: 'toast-top-right'
            });
          } else if (res.status === 500) {
            this.toastrService.error(res.messages, 'status', {
              timeOut: 1200,
              closeButton: true,
              positionClass: 'toast-top-right'
            });
          }
        },
        (err) => {
          this.toastrService.error('Error Occurred!');
        }
      );
    } else {
      // Handle form invalid case, e.g., show validation errors
      this.toastrService.error('Form is invalid. Please correct the errors.');
    }
  }

}
