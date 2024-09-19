import { NgModule } from "@angular/core";
import { CardComponent, CardDescriptionComponent, CardTitleComponent } from "./card.component";







@NgModule({
    declarations: [
        CardComponent,
        CardTitleComponent,
        CardDescriptionComponent
    ],
    exports: [
        CardComponent,
        CardTitleComponent,
        CardDescriptionComponent 
    ]
})
export class CardModule { }