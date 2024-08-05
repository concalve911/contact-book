"use strict";

const obj = {
  arr: [
    {
      name: "Aleksander",
      surname: "Garkusha",
      phoneNumber: "+48321345786",
      email: "monero@gmail.com",
    },
    {
      name: "Joe",
      surname: "Sopreti",
      phoneNumber: "+43521335786",
      email: "joe@gmail.com",
    },
  ],
  searchContact(name) {
    let resultSearch = this.arr.find(function (item) {
      return item.name === name;
    });
    return resultSearch;
  },
  addContact(newContact) {
    this.arr.push(newContact);
  },
};

const newContact = {
  name: "Anna",
  surname: "Smith",
  phoneNumber: "+1234567890",
  email: "anna@example.com",
};
obj.addContact(newContact);

const contact = obj.searchContact("Joe");

console.log(contact);
console.log(obj.arr);
