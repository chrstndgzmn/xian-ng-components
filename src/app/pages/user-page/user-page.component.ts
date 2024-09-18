import { Component } from '@angular/core';
import { IUser } from '../../models/user';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
  providers: [
    UserService
  ]
})
export class UserPageComponent {

  user$: Observable<IUser>;
  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _user: UserService
  ) { }
  public ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) 
      this.user$ = this._user.getUser(userId);

  }

  public gotoItems(hero: IUser) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/heroes', { id: heroId }]);
  }

}
