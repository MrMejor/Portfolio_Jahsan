import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-confirmation',
    imports: [MatCardModule, MatButtonModule], // <-- add Material modules here
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  goBack() {
    window.history.back();
  }
}
