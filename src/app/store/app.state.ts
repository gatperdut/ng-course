import { ActionReducerMap } from "@ngrx/store";
import { AuthenticationState } from "../authentication/store/authentication.state";
import { authenticationMasterReducer } from "../authentication/store/reducers/authentication.reducer";
import { shoppingListMasterReducer } from "../shopping-list/store/reducers/shopping-list.reducer";
import { ShoppingListState } from "../shopping-list/store/shopping-list.state";

export type AppState = {

  shoppingListState: ShoppingListState;

  authenticationState: AuthenticationState;

}

export const appActionReducerMap: ActionReducerMap<AppState> = {
  shoppingListState: shoppingListMasterReducer,
  authenticationState: authenticationMasterReducer
}
