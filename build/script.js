var firstElement = document.getElementById('root');
var root = ReactDOM.createRoot(firstElement);

//const reactElement = React.createElement('h1', {}, 'Hello, from ReactJS!!!1')

var reactElement1 = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX!!!!"
    ),
    React.createElement(
        "h2",
        null,
        "slogan2"
    )
);

root.render(reactElement1);