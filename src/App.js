import logo from "./logo.svg";
import "./App.css";
import Article from "./Article";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
				<Article
					name="mostafa"
					Email="mostafa@gmail.com"
					phone="11122"
					content="anyThing ">
					<h1>Hello from children</h1>
				</Article>
				<Article />
				<Article />
			</header>
		</div>
	);
}

export default App;
