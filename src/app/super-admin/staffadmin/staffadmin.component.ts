import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-staffadmin',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './staffadmin.component.html',
  styleUrl: './staffadmin.component.css'
})
export class StaffadminComponent {

}
