// ==========================================
// SECTION 1: COMPARISON & TYPE COERCION
// ==========================================

console.log("--- Section 1 ---");
console.log("9" > "100");             // true
console.log(9 > "100");               // false
console.log("5" == 5 && "5" === 5);   // false
console.log(null == 0);               // false
console.log(undefined == null);       // true

let a_sec1 = 5;
console.log(a_sec1 == "5");           // true (Question 3)


// ==========================================
// SECTION 2: LOGICAL OPERATORS
// ==========================================

console.log("\n--- Section 2 ---");
console.log(0 && "hello");            // 0
console.log("world" || 0);            // "world"
console.log(null || undefined && "JS"); // undefined
console.log(" " && 55 && [] && "done"); // "done"
console.log(true && false);           // false


// ==========================================
// SECTION 3: ASSIGNMENT, BITWISE & EXPRESSIONS
// ==========================================

console.log("\n--- Section 3 ---");

// Question 1: Shorthand operators
let x = 10; 
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
console.log("x =", x);                // 24

// Question 2: Bitwise operators
let p = 7; 
let q = 12; 
let r = 5;    

p = p & r;   
q = q | r;                                  
r = r ^ p;                                  

console.log("p, q, r:", p, q, r);     // 5, 13, 0

// Question 3: Expression & Logical Thinking
let a = 4, b = "6", c = 2;
console.log(a + b * c);               // 16

// Question 4: Parentheses precedence
console.log((a + b) * c);             // 92

// Question 5: Increment/decrement and concatenation
console.log(a++ + --c + b);           // "56"