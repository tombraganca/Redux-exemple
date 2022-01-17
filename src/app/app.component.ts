import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Decrement, IAppState, Increment } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private store: Store<{ app: IAppState }>) {

  }

  counter$ = this.store.select('app');

  increment() {
    this.store.dispatch(Increment())
  }

  decrement() {
    this.store.dispatch(Decrement())

  }

}
