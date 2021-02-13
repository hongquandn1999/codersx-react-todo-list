import './App.css';

function App() {
  const todos = ['Go to market', 'Buy food', 'Make dinner'];
  
  return (
		<div className='App'>
			<header className='App-header'>
				{todos.map((todo) => (
					<li>{todo}</li>
				))}
			</header>
		</div>
	);
}

export default App;
