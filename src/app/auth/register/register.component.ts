import { Component,OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup,FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormControl | any;
  // registerForm!:FormGroup;
  constructor(private fb: FormBuilder,private toastrService: ToastrService, private apiService:ApiService, private router:Router){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobile_number: ['', [Validators.required,  Validators.minLength(10),
                            Validators.maxLength(10),
                            Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }



  async onSubmit() {          
    this.registerForm.markAllAsTouched();  
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('name', this.registerForm.get('name').value);
      formData.append('mobile_number', this.registerForm.get('mobile_number').value);     
      formData.append('password', this.registerForm.get('password').value);
      formData.append('email', this.registerForm.get('email').value);
  
      this.apiService.admin_register(formData).subscribe(
        (res: any) => {
          console.log('res',res)
          if (res.status === 201) {
            this.toastrService.success(res.messages, 'status', {
              timeOut: 2000,
              closeButton: true,
               positionClass: 'toast-top-right'
            }); 
            setTimeout(()=>{
              this.router.navigateByUrl('login');  
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
  
  


  validateInput(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, ''); 
  }
}
