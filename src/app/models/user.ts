import { IAddress } from "./address";

export interface IUser {
    id: string,
    username: string,
    email: string,
    phone: string
    address: IAddress,

}

