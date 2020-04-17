//Object Combination - a UNION SET is created
type Admin = {
  name: string;
  privilieges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

//
const e1: ElevatedEmployee = {
  name: 'Dion',
  privilieges: ['create-server'],
  startDate: new Date(),
};

//Intersection Types
type Combinable = string | number;
type Numeric = number | boolean;

//Intersection SET  is created
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
