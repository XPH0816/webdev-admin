export class User {
  name: string;
  dob: string;
  phone: string;
  email: string
  gender: Gender;
  status: string;
  image: string;

  constructor(obj: UserType) {
    Object.assign(this, obj);
  }

  get dobFormatted() {
    return new Date(this.dob).toLocaleString('en-MY', { day: 'numeric' , month: 'long', year : "numeric" });
  }
}

export interface UserType {
  name: string;
  dob: string;
  phone: string;
  email: string
  gender: Gender;
  status: string;
  image: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
}

export function isGender(value: any): value is Gender{
  return Object.values(Gender).includes(value);
}

export function isStatus(value: any): value is Status{
  return Object.values(Status).includes(value);
}


