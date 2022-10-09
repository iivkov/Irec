import { Recycling } from "./recycling";

export interface Yard {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    website?: string;
    recyclings?: Recycling[];
}
