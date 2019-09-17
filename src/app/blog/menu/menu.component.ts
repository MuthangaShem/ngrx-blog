import { Logout } from './../store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  adminIsLoggedIn: boolean;

  constructor(private store: Store<fromStore.BlogState>) {}

  ngOnInit() {}

  login() {
    this.store.dispatch(new fromStore.Login());
    this.store.select(fromStore.getLoginStatus).subscribe(isLoggedIn => {
      this.adminIsLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.store.dispatch(new fromStore.Logout());
    this.store.select(fromStore.getLoginStatus).subscribe(isLoggedIn => {
      this.adminIsLoggedIn = isLoggedIn;
    });
  }
}
