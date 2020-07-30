import React from 'react';

function TemplateCV2(props) {
    return (
        <div className="panel panel-primary col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="panel-heading row">
                <h3 className="panel-title">Form title</h3>
            </div>
            <div className="panel-body">
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Họ và tên</label>
                    <div className="col-sm-10">
                        <p>{props.name}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <p>{props.email}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Tuổi</label>
                    <div className="col-sm-10">
                    <p>{props.age}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Địa chỉ</label>
                    <div className="col-sm-10">
                        <p>{props.address}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Kĩ năng</label>
                    <div className="col-sm-10">
                        <p>{props.skill}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Chứng chỉ</label>
                    <div className="col-sm-10">
                        <p>{props.certificate}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Học vấn</label>
                    <div className="col-sm-10">
                        <p>{props.education}</p>
                    </div>
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label className="col-sm-2 control-label">Kinh nghiệm làm việc</label>
                    <div className="col-sm-10">
                        <p>{props.exp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateCV2;