import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import TemplateCV1 from './components/TemplateCV1';
import TemplateCV2 from './components/TemplateCV2';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
	}

	onSubmit = (data) => {
        var { users } = this.state;
        users.pop();
        users.push(data);
        this.setState({
            users: users
		});
		console.log(this.state.users);
		console.log(Object.values(this.state.users)[0].template);
		
    }
	render() {
		let template;
		if (this.state.users.length === 0 ) {
			 console.log('No data');
		} else {
			if (this.state.users[0].template == "template1") {
				template = <TemplateCV1 users={this.state.users} />
			} else {
				template = <TemplateCV2 users={this.state.users} />
			}
		}


		return (
			<div className="App">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Generate CV</h3>
					</div>
					<div className="panel-body">
						<Form onSubmit={this.onSubmit}/>
						<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						{ template}
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
