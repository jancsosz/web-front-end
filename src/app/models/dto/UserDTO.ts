import {Roles} from './Roles';

export class UserDTO {
  username: string;
  password: string;
  email: string;
  roles: [Roles];
}
