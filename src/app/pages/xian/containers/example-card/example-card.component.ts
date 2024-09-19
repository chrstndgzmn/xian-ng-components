import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { from, Observable } from 'rxjs';
import { CardComponent, CardTitleComponent } from '../../components/image-card/card.component';
import { CardModule } from '../../components/image-card/card.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [
    CardModule,
    CommonModule
  ],
  templateUrl: './example-card.component.html',
  styleUrl: './example-card.component.css',
  providers: [
    UserService
  ]
})
export class ExampleCardComponent {



  public photo$: Observable<any>
  public photos$: Observable<any>

  public constructor() {

  }

  public ngOnInit() {
    this.photo$ = from(
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos/1').then(response => response.json())
    )
    this.photos$ = from(
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(response => response.json())
    )

  }

  public getTitle(title: string ){
    return title.split(' ').slice(0,2).join(" ");
  }

}
