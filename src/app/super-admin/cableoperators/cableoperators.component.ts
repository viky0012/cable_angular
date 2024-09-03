import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-cableoperators',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './cableoperators.component.html',
  styleUrl: './cableoperators.component.css'
})
export class CableoperatorsComponent {

}
