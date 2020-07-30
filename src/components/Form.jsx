import React, { useState } from 'react';
import TemplateCV1 from './TemplateCV1';
import TemplateCV2 from './TemplateCV2';

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
        template: "template1"

    });
    // const [image, setImage] = React.useState({
    //     file: "",
    //     imagePreviewUrl: "",
    // });
    function onHandleChange(event) {
        var target = event.target
        var name = target.name;
        var value = target.value;

        setState({
            ...state,
            [name]: value
        })

        // let reader = new FileReader();
        // console.log(target.files[0]);
        // let file = target.files[0];
        
        // reader.onloadend = () => {
        //     setImage({
        //         file: file,
        //         imagePreviewUrl: reader.result
        //     });
        // }

        // reader.readAsDataURL(file)
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
    const [isCvTemplate, setIsCvTemplate] = useState(state.template);

    function submit(event) {
        event.preventDefault();
        console.log(state);
        setIsCvTemplateVisible(true);
        setSubmitName(state.txtName);
        setSubmitEmail(state.txtEmail);
        setSubmitAge(state.txtAge);
        setSubmitAddress(state.txtAddress);
        setSubmitSkill(state.txtSkill);
        setSubmitCertificate(state.txtCertificate);
        setSubmitEducation(state.txtEducation);
        setSubmitExp(state.txtExp);
        setIsCvTemplate(state.template);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="panel panel-success col-xs-12 col-sm- col-md-6 col-lg-6">
                    <div className="panel-heading row">
                        <h3 className="panel-title">Điền thông tin</h3>
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
                            <textarea className="form-control" placeholder="Input field" name="txtEducation" value={state.txtEducation} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label>Kinh nghiệm làm việc</label>
                            <textarea className="form-control" placeholder="Input field" name="txtExp" value={state.txtExp} onChange={onHandleChange} />
                        </div>
                        <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="template" value="template1" checked={state.template === "template1"} onChange={onHandleChange} />
                                    Template 1
                                </label>
                                <label>
                                    <input type="radio" name="template" value="template2" checked={state.template === "template2"} onChange={onHandleChange} />
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
            {
                isCvTemplateVisible ?
                    (
                        isCvTemplate == "template1" ?
                            <TemplateCV1
                                name={submitName}
                                email={submitEmail}
                                age={submitAge}
                                address={submitAddress}
                                skill={submitSkill}
                                certificate={submitCertificate}
                                education={submitEducation}
                                exp={submitExp}
                            /> :
                            <TemplateCV2
                                name={submitName}
                                email={submitEmail}
                                age={submitAge}
                                address={submitAddress}
                                skill={submitSkill}
                                certificate={submitCertificate}
                                education={submitEducation}
                                exp={submitExp}
                            />
                    ) : ""
            }

        </div>
    );
}

export default Form;