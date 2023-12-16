import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userEmail: string = '';
  isEmailValid: boolean = true;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.userEmail, 'submitted');
    } else {
      this.isEmailValid = false;
      console.log(this.userEmail, 'not submitted');
      setTimeout(() => {
        this.isEmailValid = true;
      }, 1000);
    }
  }
}
