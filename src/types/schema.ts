export declare interface Roles {
  role: "chief" | "customer" | "admin";
}

export declare interface Dish {
  id: string; //uuid
  name: string;
  briefDescription: string;
  detailedDescription: string;
  imageUrl: string;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  modes: "slow" | "steady" | "aggresive" | "recommended";
}

export declare interface Plan {
  id: string; //uuid
  imageUrl: string;
  name: string;
  descriptions: string;
  duration: number; // in days
}

export declare interface Customer {
  id: string; //uuid
  name: string;
  address: string;
  email: string;
  password: string;
  gender: "male" | "female";
  contact: number;
  currentWeight: number;
  targetWeight: number;
  height: number;
  dob: Date; // date of birth
  lpa: number; // level of physical activity
  plan: Plan["id"];
  planActive: boolean; //defaults to true  (see paause condition)
}

// manually added for the first time;
// can add and remove chiefs and their passwords;
export declare interface Admin {
  email: string;
  password: string;
  contact: number;
}

export declare interface Chief {
  username: string; //uniquq name e.g kashan023
  password: string;
}

export declare interface Report {
  custmer: Customer["id"];
}

export declare interface Subscrpition {
  id: string; //uuid
  paid: boolean;
}

// Mifflin-St Jeor Equation, multiplied by a range from 1.1 to 1.5 based on the customer's level of physical activity
// email service to be used.

// stepper details;
// user details;

// ROLES:
// customer
// cheif
