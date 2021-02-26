import { User } from "../models/user.model";

export type AuthenticationState = {

  user: User;

  error: string;

  loading: boolean;

};
