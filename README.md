# JavaScript Toy Problems

This repository contains solutions to JavaScript toy problems designed to test fundamental programming concepts such as conditional statements, loops, array methods, and object-oriented programming.

## Repository Structure

Each challenge is located in its own JavaScript file within the repository. A single file contains only one solution.

```
|-- javascript-toy-problems/
    |-- net-salarys-calculator.js
    |-- speed-detector.js
    |-- student-grade.js
|--extra-practice    
    |-- bubble-sort.js
    |-- cylinder-volume.js
    |-- staircase.js
|-- README.md
```

## Challenges

### 1. Student Grade Generator
**File:** `student-grade.js`

A function that prompts the user to input student marks (0-100) and outputs the corresponding grade:
- **A**: 80 - 100
- **B**: 60 - 79
- **C**: 50 - 59
- **D**: 40 - 49
- **E**: Below 40

**How to run:**
```sh
node student-grade.js
```

### 2. Speed Detector
**File:** `speed-detector.js`

A program that evaluates a car's speed:
- Speed < 70 → "Ok"
- Every 5 km/s over 70 adds a demerit point
- If points > 12, "License suspended"

**How to run:**
```sh
node speed-detector.js
```

### 3. Net Salary Calculator
**File:** `net-salarys-calculator.js`

Calculates an individual's net salary based on:
- **Gross Salary**: basic salary + benefits
- **Deductions**: Payee (Tax), NHIF, NSSF
- **Net Salary** = Gross Salary - Deductions

**How to run:**
```sh
node net-salarys-calculator.js
```

### Extra Practice Questions

#### 4. Bubble Sort
**File:** `bubble-sort.js`

A function that sorts an array of numbers in ascending order.

**Example Input:** `[5,6,1,3,4,2]`
**Expected Output:** `[1,2,3,4,5,6]`

**How to run:**
```sh
node bubbleSort.js
```

#### 5. Staircase Problem
**File:** `staircase.js`

A function that takes an integer and prints a staircase pattern using `#`.

**Example:**
```
steps(3)
#
##
###
```

**How to run:**
```sh
node staircase.js
```

#### 6. Volume of a Cylinder
**File:** `cylinder-volume.js`

A JavaScript program to calculate the volume of a cylinder: `V = πr²h`

**How to run:**
```sh
node cylinder-volume.js
```

