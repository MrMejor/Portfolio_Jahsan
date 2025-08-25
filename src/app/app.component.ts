import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PortfolioJashan';
}
