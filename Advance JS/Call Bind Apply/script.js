let person1 = {
  firstname: "Krutika",
  lastname: "Prajapati",
  fullName: function (prefix, suffix) {
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

person1.fullName.call(person2, "Hello", "How Are You?");
person1.fullName.apply(person2, ["Hello", "How Are You?"]);

let printFullnameOfPerson2 = person1.fullName.bind(
  person2,
  "Hello",
  "How Are You?"
);
printFullnameOfPerson2();

//Output:
// Hello Priyanka Parekh How Are You?
// Hello Priyanka Parekh How Are You?
// Hello Priyanka Parekh How Are You?
