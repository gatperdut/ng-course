import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state = {
    current: 'recipes' as string,
    is: {
      recipes: () => {
        return this.state.current === 'recipes';
      },
      shoppingList: () => {
        return this.state.current === 'shopping-list';
      }
    }
  };

  onStateChanged(state:string) {
    this.state.current = state;
  }

}
