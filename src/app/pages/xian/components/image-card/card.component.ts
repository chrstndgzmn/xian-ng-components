import { Component } from '@angular/core';




@Component({
  selector: 'xian-card-title, [xianCardTitle]',
  template: `<ng-content/>`,  
})
export class CardTitleComponent { }

@Component({
  selector: 'xian-card-description, [xianCardDescription]',
  template: `<ng-content/>`,  
})
export class CardDescriptionComponent { }

// @Component({
//   selector: 'xian-card-img, [xianCardImg]',
//   template: `<ng-content/>`,  
// })
// export class CardImageComponent { }

@Component({
  selector: 'xian-card-button, [xianCardButton]',
  template: `<ng-content/>`,  
})
export class CardButtonComponent { }


@Component({
  selector: 'xian-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
