# String Calculator (TDD)
A simple **String Calculator** built using **Test-Driven Development (TDD)** with **Mocha & Chai**.

## Features
- Returns `0` for an empty string
- Supports addition of numbers separated by **commas**
- Supports **new line (`\n`)** as a separator
- Allows **custom delimiters**
- Throws an error for **negative numbers**

---

## Prerequisites

-   NodeJS

### Clone the Repository
-   git clone https://github.com/riddhim98/String-Calculator-TDD
cd String-Calculator-TDD

### Installation
-   npm install

### Run Test
-   npm test

### Examples
| Input              | Output |
|--------------------|--------|
| `""`              | `0`    |
| `"1"`             | `1`    |
| `"1,5"`           | `6`    |
| `"1,2,3"`         | `6`    |
| `"1\n2,3"`        | `6`    |
| `"//;\n1;2"`      | `3`    |
| `"-1,2,-3"`       | Error: "Negative numbers not allowed: -1, -3" |
