import { IUser } from './user';

export interface IRepo {
    id: string;
    name: string;
    owner: IUser;
}