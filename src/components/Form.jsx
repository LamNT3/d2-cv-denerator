import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            email: '',
            age: '',
            address: '',
            skill: '',
            certificate: '',
            education: '',
            exp: '',
            template: 'template1',
            isCvTemplateVisible: false,
        };
    }
    onHandleChange = (event) => {
        var target = event.target
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isCvTemplateVisible: true
        });
        let url = "http://localhost:3000/users/1";
        fetch(url, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.json());
        })
        .catch(function(err) {
            console.info(err + " url: " + url);
        });
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="panel panel-success col-xs-12 col-sm- col-md-4 col-lg-4">
                        <div className="panel-heading row">
                            <h3 className="panel-title">Điền thông tin</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Link ảnh</label>
                                <input type="text" className="form-control" placeholder="Input field" name="image" value={this.state.image} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Họ và tên</label>
                                <input type="text" className="form-control" placeholder="Input field" name="name" value={this.state.name} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Input field" name="email" value={this.state.email} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Tuổi</label>
                                <input type="text" className="form-control" placeholder="Input field" name="age" value={this.state.age} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Địa chỉ</label>
                                <input type="text" className="form-control" placeholder="Input field" name="address" value={this.state.address} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Kĩ năng</label>
                                <input type="text" className="form-control" placeholder="Input field" name="skill" value={this.state.skill} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Chứng chỉ</label>
                                <input type="text" className="form-control" placeholder="Input field" name="certificate" value={this.state.certificate} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Học vấn</label>
                                <textarea className="form-control" placeholder="Input field" name="education" value={this.state.education} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label>Kinh nghiệm làm việc</label>
                                <textarea className="form-control" placeholder="Input field" name="exp" value={this.state.exp} onChange={this.onHandleChange} />
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="template" value="template1" checked={this.state.template === "template1"} onChange={this.onHandleChange} />
                                        Template 1
                                    </label>
                                    <label>
                                        <input type="radio" name="template" value="template2" checked={this.state.template === "template2"} onChange={this.onHandleChange} />
                                        Template 2
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;