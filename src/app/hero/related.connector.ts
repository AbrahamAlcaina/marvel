import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/state';

@Component({
  template: 'hola'
})
export class RelatedHerosConnectorComponent {

  constructor(private store: Store<State>) {}
}
