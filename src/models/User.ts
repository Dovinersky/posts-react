export default interface User extends UserBase {
    // id: string; // num
    // name: string;
    // username: string;
    // email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string; // num
            lng: string; // num
        };
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    };
}

export interface UserBase {
    id: string;
    name: string;
    username: string;
    email: string;
}
