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


