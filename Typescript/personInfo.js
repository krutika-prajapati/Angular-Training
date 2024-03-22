var personInfo = {
    firstname: "Krutika",
    lastname: "Prajapati",
    age: 22,
    address: {
        city: "Ahmedabad",
        street: "Vastral",
        pincode: 382418,
    },
    contact: {
        phoneNumber: ["8989898999", "9999999999"],
    },
    getFullName: function () {
        return "Fullname:".concat(this.firstname, " ").concat(this.lastname);
    },
    getFullAddress: function () {
        return "Address:".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.pincode);
    },
};
console.log(personInfo.getFullName());
console.log(personInfo.getFullAddress());
console.log(personInfo.contact);
//Output:
// Fullname:Krutika Prajapati
// Address:Vastral, Ahmedabad, 382418
// { phoneNumber: [ '8989898999', '9999999999' ] }
