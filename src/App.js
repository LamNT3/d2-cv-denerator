import React from 'react';
import './App.css';
import Form from './components/Form';
// import Form2 from './components/Form2';
// import Form3 from './components/Form3';

function App() {
	return (
		<div className="App">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Generate CV</h3>
				</div>
				<div className="panel-body">
					<Form></Form>
				</div>
			</div>

		</div>
	);
}

export default App;
