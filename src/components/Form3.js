import React from 'react';

function Form3() {
    return (

        <form method="POST" role="form">
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Form title</h3>
                </div>
                <div className="panel-body">
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Họ và tên</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Tuổi</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Địa chỉ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Kĩ năng</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Chứng chỉ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Kinh nghiệm làm việc</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form3;