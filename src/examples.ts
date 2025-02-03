// Primitive Types
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;

name = 25; // ❌ TypeScript error: Type 'number' is not assignable to type 'string'.

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob", "Charlie"];
let students: boolean[] = [true, false, true];

numbers.push("4"); // ❌ TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Objects
let product: { name: string; price: number } = { name: "Laptop", price: 1200 };

product = { id: 1, name: "Laptop", price: 1200 }; // ❌ TypeScript error: Property 'id' does not exist on type '{ name: string; price: number; }'.

// Arrays of Objects
let people: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

// ========== type-sikkerhed ========== //

// JavaScript – ingen type-sikkerhed

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, "10")); // Fejl først opdaget ved runtime

// TypeScript – type-sikkerhed
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, "10")); // TypeScript-fejl: Argumentet skal være et tal

// ========== Autocomplete & Dokumentation ========== //
type User = { name: string; age: number };
const user: User = { name: "Alice", age: 25 };

console.log(user.email); // ❌ TypeScript error: 'email' does not exist on type 'User'.

// ========== Bedre Struktur og Skalerbarhed ========== //
// Interfaces & Klasser i TypeScript
interface Student {
  name: string;
  age: number;
}

class Person implements Student {
  constructor(public name: string, public age: number) {}
}

const student: Student = new Person("Alice", 25);

// ========== Bedre fejlfinding ========== //
function greet(name: string) {
  return `Hello, ${name}`;
}

console.log(greet()); // ❌ TypeScript error: Expected 1 arguments, but got 0.

// ========== Bedre Refaktorering ========== //
function multiply(a: number, b: number): number {
  return a * b;
}

// Hvis vi ændrer 'multiply' til at tage en ekstra parameter, vil TypeScript advare os overalt i koden, hvor den bruges forkert.
console.log(multiply(2, 3)); // 6
console.log(multiply(2, 3, 4)); // ❌ TypeScript error: Expected 2 arguments, but got 3.
