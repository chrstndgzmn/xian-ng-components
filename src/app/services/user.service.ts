import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor() {

  }

  public getUser(id: string) {
    return of({
      id: id,
      username: 'xtian',
      email: 'xtian@example.com',
      phone: '(403) 402-2175',
      address: {
        street: '23 Sunpark Drive SE',
        city: 'Calgary',
        province: 'Alberta',
        country: 'Canada',
        postalCode: 'T2J 6K2',

      }
    })
  }

  public getUsers() {
    return of([
      {
        id: '12342134',
        username: 'xtian',
        email: 'xtian@example.com',
        phone: '(403) 402-2175',
        address: {
          street: '23 Sunpark Drive SE',
          city: 'Calgary',
          province: 'Alberta',
          country: 'Canada',
          postalCode: 'T2J 6K2',

        }
      },
      {
        id: 'sdafsaer',
        username: 'Baba Yaga',
        email: 'jwick@example.com',
        phone: '(123) 123-3214',
        address: {
          street: '23 Sunpark Drive SE',
          city: 'Calgary',
          province: 'Alberta',
          country: 'Canada',
          postalCode: 'T2J 6K2',
        }
      }
    ])
  }
}
