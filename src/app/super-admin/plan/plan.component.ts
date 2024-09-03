import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LeftsidebarComponent } from '../../layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [HeaderComponent,LeftsidebarComponent,FooterComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {

}
