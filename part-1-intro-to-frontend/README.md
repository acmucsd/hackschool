# Hackschool Part 1 - Intro to Frontend

## Intro
Welcome to the first session of Hackschool! The idea behind this series is that you'll learn a lot about web development while making a meme generator that others can use. The slides are linked here as well, so follow along with those if you like!

## Resources 
[Slides](https://docs.google.com/presentation/d/1q2eMOC5iNk-dF3q3ytrTTCh-0dRzjcSKGOeFNfX_VCA/)

## Download Links
You'll need a text editor! Feel free to use whatever you're comfortable with, but here are three good places to start:
[Sublime Text](https://www.sublimetext.com/download)\
[VS Code](https://code.visualstudio.com/download)\
[Atom](https://atom.io/)

## What even is web development?
Making websites! Websites can vary hugely in form and function. These can range from static blogs to crazy animations to a repository for all information on the internet. 

The infrastructure for using these websites is called the World Wide Web. Websites are served to our computers by...well, servers, which each are assigned individual addresses called Internet Protocol (IP) addresses. Each server will have different routes (everything after the .com slash) for different content, depending on what the developer has included. 

Web development is commonly split into two different categories: 
 1. Front-end development: everything that the user sees and interacts with, ranging from the look and feel of the website to processing user input to be sent to the server.
 2. Back-end development: everything the server does, including processing requests from the client with different routes, and processing incoming data from the user (usually to be stored in a database).

Every website is built off the same basic technologies: HTML, CSS, and Javascript. 

We'll be focusing on the basics front-end development today, so be sure to come back for part 2 (or look at the part 2 folder in this repository), when we'll talk more about backend!

## HTML
HTML stands for Hypertext Markup Language, and defines the basic structure of any webpage. Different elements are defined by opening and closing tags, and most tags can have other tags inside them. Here are some basic tags that you might use: 

### Paragraph Tag
```
<p>This is a paragraph tag.</p>
```
Defines paragraph content. Put any regular text in here. 

### Heading Tag
```
<h1>This is a heading</h1>
<h2>This is another heading</h2>
```
Defines different levels of headings (HTML has 6 in total). 

### Image Tag
```
<img src="image.jpg" alt="the thing didn't load"></img>
```
Loads in an image. Link to an image is given using the src attribute. Alt text can also be displayed if the image does not load. 

### Hyperlink Tag
```
<a href="http://acm.ucsd.edu/">Click here to go to ACM's website!</a>
```
Defines a hyperlink. Clicking on the enclosed text will tell the browser to navigate to the link given by the href attribute. 

### Form tag
```
<form>
  Enter your name: <input type="text"></input>
  <input type="submit" value="Submit"></input>
</form>
```
Defines a form, encapsulating data with all input tags inside. The form data can be sent to another webpage via HTTP request (more on that on part 4 when we talk about APIs).

### Head tag
```
<head>
  <!-- metadata goes in here -->
</head>
```
Holds any metadata that goes in a webpage. This can include the website title, or any Javascript or CSS that the website requires. 

## CSS
CSS stands for Cascading Style Sheets. Each CSS document contains instructions for how to style different elements in a webpage. We select these elements with what are called "selectors", and we can set different properties for the selected elements.

A typical CSS document would look something like this: 
```css
/* these are selectors! */
h1 {
  font-family: Nunito, "sans-serif";
  background-color: #64bef1;
}

p {
  font-family: Roboto, "sans-serif"; 
}

```
Any HTML document that links to this CSS file will have `<h1>` and `<p>` tags with these attributes. 

### Selectors 
We can specify any particular element in the DOM by describing where the element is in relation to others. A comprehensive list can be found (here)[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors], though below are a few examples.

#### Class Selector
Selects elements of the given class. For example, `.hackschool` will select every element with the class attribute set to "hackschool".

#### ID Selector
Selects elements of the given class. For example, `#navbar` will select every element with the id attribute set to "navbar".

#### Descendant Selector
Simply place the parent element before the child element you want to select. For example, `div img` will select all `<img>` tags inside any `<div>` tag.

#### Direct Descendant Selector
Denoted by a `>` symbol. For instance, `div > img` will only select `<img>` tags that are an immediate child of a `<div>` tag. 

### Building the Meme Gen
Obviously we're not actually going to start from bare-bones HTML and Javascript (we'll be using React to start making the actual end product), but we have created part of the meme generator in pure HTML and CSS as an example for you to get familiar with how to use HTML and CSS. Below are all the major components, listed from top to bottom.

#### Navigation Bar
```html
<div class="navbar">
    <h1 id="acm">ACM UCSD Meme Gen</h1>
    <div id="links-section">
      <a class="link selected" href="index.html">Generator</a>
      <a class="link" href="gallery.html">Gallery</a>
    </div>
</div>
```
```css
.navbar{
  background: #22ACEA;
  height: 75px;
}

#links-section{
  align-items: center;
  display: flex;
  float: right;
  height: 100%;
  justify-content: center;
  width: 20%;
}

#acm{
  color: #FFFFFF;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  height: 50px;
  line-height: 50%;
  position: absolute;
  width: 450px;
  padding-left: 10px;
}

```
#### Left Column
```html
<div class="left-col">
    <img id="selected-meme" width=500 height=333 src="https://i.imgflip.com/1ur9b0.jpg"/>
</div>
```
```css
.left-col {
  float: left;
  width: 50%;
}
```
#### Right Column
```html
<div class="right-col">
    <!-- everything else goes here! -->
</div>
```
```css
.right-col {
  float: right;
  width: 50%;
}
```

##### Textboxes
```html
<div class="textboxes">
    <div class="textbox">
        <p>Text Box 1</p>
        <textarea cols="50" rows="2"></textarea>
    </div>
    <div class="textbox">
        <p>Text Box 2</p>
        <textarea cols="50" rows="2"></textarea>
    </div>
</div>
```
##### Meme Selection
```html
<div id="meme-templates">
    <p id="meme-title">Distracted Boyfriend</p>
    <img class="meme-selection" src="https://i.imgflip.com/1ur9b0.jpg" alt />
    <img class="meme-selection" src="https://i.imgflip.com/30b1gx.jpg" alt />
    <img class="meme-selection" src="https://i.imgflip.com/1g8my4.jpg" alt />
    <img class="meme-selection" src="https://i.imgflip.com/1otk96.jpg" alt />
    <img class="meme-selection" src="https://i.imgflip.com/24y43o.jpg" alt />
</div>
```
```css
.meme-selection {
  width: 50px;
  height: 50px;
}
```
