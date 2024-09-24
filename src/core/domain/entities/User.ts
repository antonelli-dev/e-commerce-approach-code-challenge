export class UserNames {
    firstname: string = '';
    lastname: string = '';
};

export class UserAddress {
    city: string = '';
    street: string = '';
    number: number = -1;
    zipcode: string = '';
};

export class User {
    id: number = 0;
    email: string = '';
    password: string = '';
    name: UserNames = new UserNames();
    address: UserAddress = new UserAddress();  
    phone: string = '';
};