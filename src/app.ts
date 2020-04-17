//                      TYPEGUARDS
/*About

and approach that checks if a certain property or method exists before you try to use it.

for objects:
in
instanceof

js primitives
typeof


*/

//Object Combination - a UNION SET is created
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

//
const e1: ElevatedEmployee = {
  name: 'Dion',
  privileges: ['create-server'],
  startDate: new Date(),
};

//Intersection Types
type Combinable = string | number;
type Numeric = number | boolean;

//Intersection SET  is created
//And set
type Universal = Combinable & Numeric;

//Help with unions

function add(a: Combinable, b: Combinable) {
  //Runtime logic to perform operations according to the different possiblities
  //of types
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  //TS knows args have to be numbers at this point
  return a + b;
}

//Type Guarding for non-primitive custom object types
//OR set
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ('startDate' in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);

printEmployeeInformation({ name: 'ricky', startDate: new Date() });

//instanceof TYPEGUARD

class Car {
  drive() {
    console.log('Drive');
  }
}

class Truck {
  drive() {
    console.log('Driving truck...');
  }

  loadCargo(num: number) {
    console.log('Loading Cargo...', num);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //instanceof is ES6 not TS
  //This wouldn't work if Truck was a TS Interface.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//Special Typeguard: Discriminated Union

/*

About


*/

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 84 });

//Compare type inferences depending on how dom node is selected
//const paragraph = document.querySelector('p');
//const paragraph = document.getElementById('message-output');

/*
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')!
);
*/
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;

// userInputElement.value = 'some value';

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'some value';
}

//{email: 'blah blah blah email message', isusername: 'blah blah blah some username message'}
//Below is flexible container, can add anything that adheres to vague rules
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'not a valid email',
  payment: 'invalid payment card',
};
