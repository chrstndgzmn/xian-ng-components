import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-tile-selection',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tile-selection.component.html',
  styleUrl: './tile-selection.component.css'

})
export class TileSelectionComponent {

  public photo$: Observable<any>

  public constructor() {

  }

  public ngOnInit() {
    this.photo$ = from(
      fetch('https://jsonplaceholder.typicode.com/photos/1').then(response => response.json())
    )

  }
  

}
