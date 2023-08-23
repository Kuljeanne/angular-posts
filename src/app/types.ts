export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  username: string;
}

export interface ICurrentUser {
  login: string;
  password: string;
}
