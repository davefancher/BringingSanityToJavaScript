module Inheritance {
  class Person {
    constructor(public name: string) {
    }

    identify() {
      return "This person's name is " + this.name;
    }
  }

  class Developer extends Person {
    constructor(public name: string) {
      super(name);
    }

    identify() {
      return "This employee's name is " + this.name;
    }
  }

  export function RunDemo() {
    var p1 = new Person("Dave");
    var p2 = new Developer("Dave");

    return p1.identify() + "<br />" + p2.identify();
  }
} 