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

//TYPEGUARDS
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
}
