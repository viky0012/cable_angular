import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
