// React is javascript library created by Facebook
// Most Popular Javascript library for creating UI.
// Also used by Netflix and Instagram.
// Used to create Single Page Application(SPA).
// We can Build modern, fast Single Page Applications on websites with React.

// React is library not a frame work

// What is Library 

// Libvrary is a programming can be explained as a collections of code. we use library to write code in a much simpler way or to import a feature from it into our project.
// What is Framework
// A framewok on the other hand, is a complete package of code with its own functionatilites and libraries. A frameowrk has its own rules, you dont have much flexibility and the project is dependent on the Framework you use like angular.

// How React actually works
// React Create Virtual DOM
// Dom is basically the representation of the html codes in a webpages. the document is the webpage itself, the objects are the html tags.

// Benefits of virtual dom 
// Each time you make a change in the code, Dom will be completely updated and rewritten.this is very expensive and take time
// so React creates an exact copy of the DOM
// Then REact figures out which part is new and only updates that specific part in the virtual DOM
// Finally react copies only the new parts of the virtual DOM to the actual DOM, rather than completely rewritten it.
//This approaches makes a webpage much fater than a normal.

// React Core Syntax: JSX javascript xml
// In Classic Frontend programming we have seprated html css and js files structures . but react is a bit different

// In JSX syntax, we write HTML tages inside javascript
// Examples:- const ele = <h1>Hello!</h1>;

//What is JSX
// It is a syntax extension to javascript used by react. jsx is basically used to write html tags inside javasxcript. Later, the JSX code will be translated into normal javascript, by babel.
// in summary, React doesnt have HTML files, HTML tages are rended direclty indide javascript. this makes React Fatser.


// Some important rules about JSX:
//1. We cant return more than one HTML element at once, but we can wrap the elements inside a parent HTML tags.
// class Test extends React.components{
// render(){
//      return(
//     <div>
//         <p>Hello</p>
//         <p>hi</p>
//     </div>
//     );
//   }
//}

// 2. We can use jsx inside for loops and if else cases.
// 2. HTML atrributes names like "class" becomes "className".
// 3. In place of for and in JSX htmlFor.
// 4. Html tags must always be closed.

// rECAT COMPONENTS
// a COMPONENT IS AND INDEPENDENT, REUSABLE CODE block, which divides the UI into smaller pieces.
// In other words, we can think of componets as lego blocks
// we create webpages or UI from many little code blocks.
// React has 2 types of components: Functional(stateless) and Class(Stateful).

// Function Components
// example:- function Welcome(props){
//      return <h1>Hello, {props.name}</h1>;
// }