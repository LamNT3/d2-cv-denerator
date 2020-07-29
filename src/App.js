import React from 'react';
import './App.css';
import TemplateThumbnail from './components/TemplateThumbnail';
import Form from './components/Form';
// import Form2 from './components/Form2';
import Form3 from './components/Form3';

function App() {
	return (
		<div className="App">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Chọn template</h3>
				</div>
				<div className="panel-body">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<TemplateThumbnail name="Mẫu 1" image="https://www.topcv.vn/images/cv/screenshots/thumbs/vi/optimize/mau-cv-default.jpg" />
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<TemplateThumbnail name="Mẫu 2" image="https://www.topcv.vn/images/cv/screenshots/thumbs/vi/optimize/mau-cv-pro_1.jpg" />
					</div>
				</div>
			</div>

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Điền thông tin</h3>
				</div>
				<div className="panel-body">
					<Form></Form>
					{
						// <Form2/>
						// <Form3/>
					}
					
				</div>
			</div>

		</div>
	);
}

export default App;
