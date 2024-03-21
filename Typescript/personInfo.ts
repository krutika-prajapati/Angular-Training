interface IAddress{
    city: string;
        street: string;
        pincode: number;
}
interface IContact{
    phoneNumber:string|string[];
}
interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
    address: IAddress
    contact?:IContact
    getFullName(): string;
    getFullAddress(): string;
}

const personInfo =<IPerson> {
    firstname: 'Krutika',
    lastname: 'Prajapati',
    age: 22,
    address: {
        city: 'Ahmedabad',
        street: 'Vastral',
        pincode: 382418
    },
    contact: {
        phoneNumber: ['8989898999','9999999999']
    },
    getFullName(): string {
        return `Fullname:${this.firstname} ${this.lastname}`;
    },
    getFullAddress(): string {
        return `Address:${this.address.street}, ${this.address.city}, ${this.address.pincode}`;
    }
};

console.log(personInfo.getFullName());
console.log(personInfo.getFullAddress());
console.log(personInfo.contact);


//Output:
// Fullname:Krutika Prajapati
// Address:Vastral, Ahmedabad, 382418
// { phoneNumber: [ '8989898999', '9999999999' ] }