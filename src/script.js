const firstElement = document.getElementById('root')
const root = ReactDOM.createRoot(firstElement)

//const reactElement = React.createElement('h1', {}, 'Hello, from ReactJS!!!1')

const reactElement1 = ( <header className="site-header">
    <h1>Hello from JSX!!!!</h1>
    <h2>slogan2</h2>
</header>);



root.render(reactElement1)