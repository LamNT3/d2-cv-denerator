import React from 'react';

function Form2() {
    const [name, setName] = useState('Lam');
    const [email, setEmail] = useState('lamnt@rikkeisoft.com');
    
    function updateName(event) {
        setName(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    const [submitName, setSubmitName] = useState(name);
    const [submitEmail, setSubmitEmail] = useState(email);

    function submit(event) {
        event.preventDefault();
        setSubmitName(name);
        setSubmitEmail(email);
    }
    return (

        <form onSubmit={submit}>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Form title</h3>
                </div>
                <div className="panel-body">
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Họ và tên</label>
                        <input type="text" className="form-control" placeholder="Input field"  value={name} onChange={updateName}/>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Input field" value={email} onChange={updateEmail}/>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Tuổi</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Địa chỉ</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Kĩ năng</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Chứng chỉ</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Học vấn</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Kinh nghiệm làm việc</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default Form2;