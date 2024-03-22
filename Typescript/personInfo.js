var personInfo = {
    firstname: "Krutika",
    lastname: "Prajapati",
    age: 22,
    address: {
        city: "Ahmedabad",
        street: "street1",
        pincode: 382418,
    },
    contact: ["9999999999", "8888888888"],
    getFullName: function () {
        return "Fullname:".concat(this.firstname, " ").concat(this.lastname);
    },
    getFullAddress: function () {
        return "Address:".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.pincode);
    },
};
console.log(personInfo.getFullName());
console.log(personInfo.getFullAddress());
console.log("Contact number: ".concat(personInfo.contact));
