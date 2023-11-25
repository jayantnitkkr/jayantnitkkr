const heading =React.createElement("h1",{
    id:'heading',xyz: 'abc'
},"Hello world from React");

const parent=React.createElement(
    "div",{id:"parent"},[React.createElement("div",{id:"child"},
        [React.createElement( "h1",{},"I am h1 tag"),React.createElement( "h1",{},"I am second h1 tag"),React.createElement( "h1",{},"I am third h1 tag")]),React.createElement("div",{id:"child"},
        [React.createElement( "h1",{},"I am h1 tag"),React.createElement( "h1",{},"I am second h1 tag"),React.createElement( "h1",{},"I am third h1 tag")])]
)
console.log(parent);
console.log(heading); // return a object

const root= ReactDOM.createRoot(document.getElementById("root"));
const root1=ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
root.render(heading);

// React Element returns an Object that the browser understand