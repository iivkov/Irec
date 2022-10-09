import { Recycling } from "./recycling";

export interface User {
    id?: number;
    name?: string;
    surname?: string;
    vat?: string;
    email?: string;
    roles?: [];
    recyclings?: Recycling[];
}
