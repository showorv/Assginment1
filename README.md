# Some differences between interfaces and types in TypeScript

In TypeScript, there are two common ways to define the structure of data: `Interface` and `Type`.They are very similar in structure and usage and often  can be used in the same situations; you can use either one. But there are some key differences that can influence how you design and organize your code.

In this blog post, we’ll explore the key difference between `interface` and `type`, when to use which, and why it matters.

---

### Definition and Basic Syntax

**Type Alias**: Type aliases allow defining types with a custom name (an alias). 

```ts
type User = {
name: string;
age: number;
};
```


**Interface**: Interfaces are similar to type aliases, except they only apply to object types.

```ts
interface User {
name: string;
age: number;
};
```

### Extending and Intersection

**Interfaces** use `extends` for inheritance. and **Type** uses `intersection` (&) for composition.

```ts
interface Person {
name: string;
}

interface Employee extends Person {
role: string;
}

type Person = {
name: string;
};

type Employee = Person & {
role: string;
};
```
### Merging in Interface and Type Alias

Interfaces can be merged. But in types merging isn’t allowed. This will throw a duplicate identifier error.

### Which One Should You Use?
- Use `interface` when:
    - You’re working with object shapes.
    - You want to take advantage of declaration merging.
    - You expect your type to be extended by others.

- Use `type` when:
    - You’re using union, intersection, or conditional types.
    - You’re working with primitives, functions, or tuples.
    - You want to compose types more freely.


---

# Understanding Union and Intersection Types in TypeScript (With Examples)

In TypeScript, union types and intersection types are ways to combine multiple types to create new types with specific characteristics.

In this blog, we’ll explore what union and intersection types are, when to use them.

### What Are Union Types?
A `union` type allows a variable to have one of several types. It is represented using the `(|)` symbol.

**Syntax:** `type AorB = A | B;`
**Example:**
```ts
    type Details = {
        name: string,
        gender: "male" | "female"
    }

    const details1: Details = {
        name:"showrov",
        gender: "male"
    }
```
---

### What Are Intersection Types?

An `intersection `type combines multiple types into one, allowing an object to have all properties from each type. It is represented using the `&` symbol.

**Syntax:** `type AorB = A & B;`
**Example:**
```ts
    type Frontend = {
        skills: string[]
        designation1: "Fronted"
    }
    type Backend = {
        skills: string[]
        designation2: "backend"
    }

    type Fullstack = Frontend & Backend

    const developer: Fullstack = {
        skills: ["nodes", "html"],
        designation1: "Fronted",
        designation2: "backend"
    }
```
### Use cases of Union & Intersection
- Use `Union` Types (|) when a value can have `multiple` alternative types (either/or), such as `multiple data types, optional values, or alternative states.`

- Use `Intersection` Types (&) when a value must have all properties of multiple types, such as `combining interfaces or extending object types to enforce the presence of multiple capabilities.`

---

# Explain the difference between any, unknown, and never types in TypeScript.

In TypeScript, any, unknown, and never are distinct types that serve different purposes when working with variables and functions.

In this blog Understanding when and why to use each of them.
---
### `any` Type

Any is a data type in TypeScript. Any type is used when we deal with third-party programs and expect any variable but we don’t know the exact type of variable. Any data type is used because it helps in opt-in and opt-out of type checking during compilation. 

**Syntax:**
```ts
let temp: any;

temp = "string";
temp = 2;
temp = true;
```
Any type is used only when we don’t have any knowledge of the data type of variable and we want dynamic content from the source. Let’s see some situations where we have to use any data type. 


### `unknown` Type

The `unknown` type is similar to `any`, but it is more type-safe. The unknown type ensures that you're checking the type at runtime before performing operations, reducing the likelihood of runtime errors.

**Syntax:**
```ts
let value: unknown;
value = 42;       
value = "Hello";  

if (typeof value === "string") {
  console.log(value.toUpperCase());

}
```
## `never` Type

In TypeScript, the `never` type is a function that never returns a value but throws an exception or error and terminates the program. It is often used to indicate that a function will not return a value or that a variable will never have a value. 

**Syntax:**
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

When you want to specify that a function will never complete normally, such as functions that throw errors or enter infinite loops.

---
