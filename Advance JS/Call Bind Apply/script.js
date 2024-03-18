let person1 = {
  firstname: "Krutika",
  lastname: "Prajapati",
  fullname: function (prefix, suffix) {
    let fullName = `${this.firstname} ${this.lastname}`;
    if (prefix) fullName = `${prefix} ${fullName}`;
    if (suffix) fullName += ` ${suffix}`;
    console.log(fullName);
  },
};

let person2 = {
  firstname: "Priyanka",
  lastname: "Parekh",
};

person1.fullname.call(person2, "Hello", "How Are You?");
person1.fullname.apply(person2, ["Hello", "How Are You?"]);

let printFullnameOfPerson2 = person1.fullname.bind(
  person2,
  "Hello",
  "How Are You?"
);
printFullnameOfPerson2();
