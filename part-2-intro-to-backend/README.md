# Hack School Part 2 - Intro to Javascript (node.js)

Welcome to our 2nd workshop where we will go over the language of JavaScript as well as setting up a server using nodejs.

# Important Links
[ACM UCSD Portal](https://acmucsd.com/)  
[Slides](http://acmurl.com/hackschoolpt2/)

# Installing Node.js

Let's install node.js into our computers. Here are some links that you can follow to get it installed, based on the OS that you run.

[Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)  
[Mac OS](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)  

# Introduction to JavaScript
**What is JavaScript?**  
JavaScript is a programming language created in 1998 with no relation to Java whatsoever. In fact, the only reason JavaScript is named after Java is because Java was a popular coding language at the time, and JavaScript was a scripting language. Thus, the name came to be (feel free to read more about the language [here](https://en.wikipedia.org/wiki/JavaScript). Its main uses now are to create web applications, which we see all over the internet.

**Chrome Developer Console**  
There are multiple ways to open the developer console. On Google Chrome specifically, here are a few ways:
  - Click the Three Dots at the Upper Right Corner --> Click "More Tools" --> Click "Develoepr Tools"
  - Shortcut: CTRL + SHIFT + J for Windows & CMD + OPTION + I for Mac OS
  
**Variables**  
A variable is something holds a piece of data. For example,
`var daniel = 0.5;`
`let a = 1;` 
`const b = false;`
These are examples of variables which hold a piece of data. However, there are multiple ways to declare a variable. Notice that we used we use "let" and "const" here, however there is also the keyword, "var". The reason these keywords exist because of the revolutionary *ES6 Changes*. Here is an outline of the differences between the different keywords:

- **var**: Common practice to not use var after ES6 change. If you do see var, means that code is not updated. myVar is globally scoped, meaning that the variable can be declared inside a function but accessible from outside the function after the function has been called. [Here is a great link that goes over the meaning of globally scoped in detail.](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
- **let**: Added during ES6 change. Variable declared by let is block-scoped. The alternative to using var, since variables can be altered.
- **const**: Added during ES6 change. Variables declared by const cannot be altered later, as const stands for constant. 

Since let and const are more recent, we will always emphasize to **never use *var* when writing modern code**. 

**Semicolons**  
In JavaScript, semicolons are not needed at the end of each line. The following lines have no difference when ran:

`const a = 10`
`const a = 10;`

So semicolons are unnecessary. However, in industry, it is more common practice to put semicolons at the end of each line, so that is what recommend you do in general.

**Operators**
This is where JavaScript gets interesting. We recommend you try and guess what each of the following lines will do, and what it ends up doing in the Developer Console.

`2 + 5`
`5 + ‘2’`
`2 + 5 + ‘x’`
`2 + ‘x’ + 5`
`2 - ‘1.5’`
`5 * ‘-3’`
`5 + true`
`5 * ‘uwu’`
`8 - ‘huh’`

Weird, right? What makes JavaScript such an interesting language is that the concept of "type" and "value" are loosely interpreted. Let's take a look a few examples:

`5 + ‘2’`: Similar to Java, when an integer is added by a string, the integer is casted to a string, and the + symbol is interpreted as a concatenation.
`2 - ‘1.5’`: Unlike Java, this code actually compiles. As mentioned, JavaScript has a loose interpretation of a variable type & value. As such, with the - operation, JavaScript is able to only look at the *value* of '1.5' and ignore the fact that it is a string. Most object-oriented languages are not able to do this unless through the process of casting.
`5 + true`: Boolean values can be represented as a 0 or 1, where *false = 0* while *true = 1*. This expression evaluates to be the same as `5 + 1`, thus is 6.
`8 - ‘huh’`: This expression evaluates to *NaN*, otherwise known as Not-a-Number, which indicates that a value is not a legal number. This expression tries to take the value of 'huh' and subtract it from 8, however this is not possible.

Besides these, we also want to emphasize how the double equals (==) operation works. Let's take the following example:

`console.log(5 == '5');`

Unlike what you might initially think, this expression will actually print **true**. But why? The reason is that once again, JavaScript has a loose interpretation of type and value. THe == operation only checks that two variable's **values** are equal. But what if you wanted to check for a variable's type as well? That is when the triple equals (===) operation is handy.

`console.log(5 === '5');`
This expression would evaluate to **false**. This is because although the values are the same, the types are not, as one is an integer while the other is a string. Generally, there is rarely a reason to use double equals (==) over triple equals (===), so in general, try to remember to always just use triple equals (===).

**Loops**
A loop is a sequence of instructions that is repeated until a specified condition is met. There are two types: a while loop and a for loop.

*while loop*   
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

*for loop*
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In each of the above pieces of code, a counter variable called *i* was initialized to 0. Then after each all lines of code are run from inside the loop, the counter
variable *i* increments by 1. Then, the loop continues until `i < 5` evaluates to false.  

**Objects**  
An object is an unordered collection of data containing key-value pairs (similar to a dictionary in Python or a HashTable in Java). Different key-value pairs in the same object cannot have the same keys.  

```
let obj = {
  "name": Daniel Truong,
  "age": 14`
}
```

# What is Node.js?
Before, JavaScript could only be run on browsers (think about it if you had to do your PAs in your browser. oof). Servers were also only run using technologies such as ASP.NET.  

However, a new JavaScript runtime environment called Node.js was created in 2009, which allows for JavaScript code to be run from a local machine. As such, the development of servers using JavaScript became prominent. So now, JavaScript could be used for client-side and server-side development.  
