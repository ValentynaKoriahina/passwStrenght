import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegFormComponent }  from '../reg-form/reg-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
