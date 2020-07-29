import React, { useState } from 'react';

function Form() {

    const [state, setState] = React.useState({
        txtName: "",
        txtEmail: "",
        txtAge: "",
        txtAddress: "",
        txtSkill: "",
        txtCertificate: "",
        txtEducation: "",
        txtExp: "",

    });

    function onHandleChange(event) {
        var target = event.target
        var name = target.name;
        var value = target.value
        setState({
            ...state,
            [name]: value
        })
    }

    const [submitName, setSubmitName] = useState(state.txtName);
    const [submitEmail, setSubmitEmail] = useState(state.txtEmail);
    const [submitAge, setSubmitAge] = useState(state.txtAge);
    const [submitAddress, setSubmitAddress] = useState(state.txtAddress);
    const [submitSkill, setSubmitSkill] = useState(state.txtSkill);
    const [submitCertificate, setSubmitCertificate] = useState(state.txtCertificate);
    const [submitEducation, setSubmitEducation] = useState(state.txtEducation);
    const [submitExp, setSubmitExp] = useState(state.txtExp);
    const [isCvTemplateVisible, setIsCvTemplateVisible] = useState(false);

    function submit(event) {
        event.preventDefault();
        setIsCvTemplateVisible(true);
        setSubmitName(state.txtName);
        setSubmitEmail(state.txtEmail);
        setSubmitAge(state.txtAge);
        setSubmitAddress(state.txtAddress);
        setSubmitSkill(state.txtSkill);
        setSubmitCertificate(state.txtCertificate);
        setSubmitEducation(state.txtEducation);
        setSubmitExp(state.txtExp);

    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Form title</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtName" value={state.txtName} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtEmail" value={state.txtEmail} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Tuổi</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtAge" value={state.txtAge} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Địa chỉ</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtAddress" value={state.txtAddress} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Kĩ năng</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtSkill" value={state.txtSkill} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Chứng chỉ</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtCertificate" value={state.txtCertificate} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Học vấn</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtEducation" value={state.txtEducation} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Kinh nghiệm làm việc</label>
                            <input type="text" className="form-control" placeholder="Input field" name="txtExp" value={state.txtExp} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            {
                isCvTemplateVisible ?
                (
                    <div className="panel panel-success cv-template">
                        <div className="panel-heading">
                            <h3 className="panel-title">Form title</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Họ và tên</label>
                                <p>{submitName}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Email</label>
                                <p>{submitEmail}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Tuổi</label>
                                <p>{submitAge}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Địa chỉ</label>
                                <p>{submitAddress}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Kĩ năng</label>
                                <p>{submitSkill}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Chứng chỉ</label>
                                <p>{submitCertificate}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Học vấn</label>
                                <p>{submitEducation}</p>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label>Kinh nghiệm làm việc</label>
                                <p>{submitExp}</p>
                            </div>
                            <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                ) : ""
            }

        </div>
    );
}

export default Form;