type Admin = {
  name: string;
  privilieges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Dion',
  privilieges: ['create-server'],
  startDate: new Date(),
};
