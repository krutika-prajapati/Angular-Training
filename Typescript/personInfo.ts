interface IAddress {
  city: string;
  street: string;
  pincode: number;
}

interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
  address: IAddress;
  contact: string | string[];
  getFullName(): string;
  getFullAddress(): string;
}

const personInfo = <IPerson>{
  firstname: "Krutika",
  lastname: "Prajapati",
  age: 22,
  address: {
    city: "Ahmedabad",
    street: "street1",
    pincode: 382418,
  },
  contact: ["9999999999", "8888888888"],
  getFullName(): string {
    return `Fullname:${this.firstname} ${this.lastname}`;
  },
  getFullAddress(): string {
    return `Address:${this.address.street}, ${this.address.city}, ${this.address.pincode}`;
  },
};

console.log(personInfo.getFullName());
console.log(personInfo.getFullAddress());
console.log(`Contact number: ${personInfo.contact}`);
