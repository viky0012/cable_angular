import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}
