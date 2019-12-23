# Hack School Part 3 - React 
Congratulations on making it past the basics of web-development; here's where things get a bit more (well, a lot more) complicated. You've made basic webpage layouts with pure HTML and CSS, and now we're introducing React, a Javascript framework used to streamline the process of making interactive webpages. 

## What is React? 
In Part 1, we touched on dynamically changing the content of a webpage with user input using Javascript. React allows us to define how certain parts of our webpage will behave using three main concepts: *components*, *state*, and *props*.

### Components
If you've ever used any object oriented programming language before, components should be pretty familiar to you! Much like classes in Java, components allow you define a particular part of a webpage, whether that be a navigation bar, profile picture, or email list. Any component can have different member functions that dictate how it behaves, though every component will have a render function which creates the content that needs to be displayed. Here's a basic example of a component: 
```javascript
class Example extends React.Component {
  render() {
    return (
      <div>
        <p> This is a component! </p>
      </div>
    )
  }
}
```
At minimum, every component will have a render function that returns what the component will look like in plain HTML. These are class-based components. You can also define components using functions like this: 
```javascript
function Example () {
  return (
    <div> 
      <p> This is another component! </p>
    </div>
  )
}
```
We'll only use class-based components in this workshop, though function-based components are also becoming more popular due to them being more light-weight that an equivalent class-based component.

Sounds great, though how can we make these interact with user input? This is where state comes in. 

### State
Every component has a state - essentially a snapshot of the data currently being displayed in a component. Which user is currently logged in? How many cookies have I clicked? What are the latest posts on my instagram feed? These are just some examples of the type of data that state can contain. The great thing about React is that every time the state is updated, any components that rely on that state will immediately get updated. We can define member functions in our components that modify the state based on what the user did; for instance, if the user adds 1 to a counter, we can define a function that increments the count in the state of the website. If we want to display the count, that change will be reflected immediately. 

A component's state takes the form of a Javascript object: `this.state`. The intial state of a component is normally defined in the constructor of the component: 
```javascript
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hello!",
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <p> Current count: {this.state.counter} </p>
      </div>
    )
  }
}
```
We can then display state variables by including them in our rendered component.

### Props 
Components can also render other components, and sometimes, we want to pass down information from the parent to the child, whether that be data, or even functions. We do this via props. Typically, data that we pass down as props will be from the state of one of our components, and when that state gets changed, all the components that got that data through props will also re-render. To pass down props into a 

This is definitely a lot of information to take in at once, so let's go through everything with a basic example.

## A Basic Blog
The basic-text example contains a crude application where you can type in any text, and every time you hit enter, it will add what you just typed onto a list and display it. It uses three main components: 

### App
```html
  <div className="App">
    <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} text={this.state.text}/>
    <Feed textList={this.state.textList}/>
  </div>
```

### Form
```html
  <form className="post" onSubmit={this.props.handleSubmit}>
    <input type="text" className="textbox" placeholder="What's on your mind?" onChange={this.props.handleChange} value={this.props.text}/>
    <input type="submit" className="submit"></input>
  </form>
```

### Feed
```html
  <div className="feed">
    {
      this.props.textList.map(element => 
        <div className="post"><p>{element}</p></div>
      )
    }
  </div> 
```
We're only including what each render function returns for the sake of brevity, though you can see that the App component renders both the Form and Feed components. The Form component is the text box that the user types into, and the Feed component is what displays the text the user has typed in. Let's take a look at how this works. 

The App component has a function called *constructor*; this is called whenever a new App component is created: 
```javascript
constructor() {
  super();
  this.state = {
    text: '',
    textList: []
  };
}
```
The state of App has two variables: `text` and `textList`. `text` is what stores the current text inside the textbox, and `textList` is a list of all content the user typed and entered. These state variables are modified using the following functions: 
```javascript
handleSubmit = (event) => {
  event.preventDefault();
  if (event.target.value !== "") {
    let newTextList = this.state.textList;
    newTextList.push(this.state.text);
    this.setState({
      text: "",
      textList: newTextList
    });
  }
}

handleChange = (event) => {
  this.setState({
    text: event.target.value
  })
}
```
You may notice that both functions use a function called this.setState() to change the state instead of changing the state directly. This function is provided by React and is how React knows to re-render the components - without it, nothing would happen. These are both passed down as props to the Form and Feed components respectively, as the triggers for these functions are both inside those components. 






Another thing to note is that every component in our web app is controlled by the App component. This is an incredibly common design pattern that you should definitely try to use in your React projects, as it makes the structure of your code easier to understand, and it keeps the entirety of your website's current state in one place. 
