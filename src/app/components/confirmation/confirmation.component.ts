import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
    constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
