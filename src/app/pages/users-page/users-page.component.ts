import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    CommonModule,
     RouterLink
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
  providers: [
    UserService
  ]
})
export class UsersPageComponent {


  public users$: Observable<IUser[]>;

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _user: UserService
  ) { }


  public ngOnInit() {
    this.users$ = this._user.getUsers();
  }
}
