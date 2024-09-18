import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-xian',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './xian.component.html',
  styleUrl: './xian.component.css'
})
export class XianComponent {

}
