export interface IUser {
  id: number
  first_name: string
  last_name: string
  full_name: string
  username: string
  password: string
  created_at: string
  updated_at: string
}

export interface IUserCreds {
  username: string;
  password: string;
}

export interface ICheckUsernameExistsRes {
  exists: boolean;
}

export interface ISubmitUserDataRes {
  user: IUser;
  token: string;
}