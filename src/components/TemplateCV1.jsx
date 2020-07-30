import React from 'react';

function TemplateCV1(props) {
    return (
        <div className="panel panel-primary cv-template col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="panel-heading row">
                <h3 className="panel-title">Template1</h3>
            </div>
            <div className="panel-body">
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Họ và tên</label>
                    <p>{props.name}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Email</label>
                    <p>{props.email}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Tuổi</label>
                    <p>{props.age}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Địa chỉ</label>
                    <p>{props.address}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Kĩ năng</label>
                    <p>{props.skill}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Chứng chỉ</label>
                    <p>{props.certificate}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Học vấn</label>
                    <p>{props.education}</p>
                </div>
                <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <label>Kinh nghiệm làm việc</label>
                    <p>{props.exp}</p>
                </div>

            </div>
        </div>
    );
}

export default TemplateCV1;