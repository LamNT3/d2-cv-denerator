import React, { Component } from 'react';

class TemplateCV1 extends Component{
    render() {
        const { users } = this.props;
        return (
            <div className="panel panel-primary cv-template col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-heading row">
                    <h3 className="panel-title">Template1</h3>
                </div>
                {users.map((user, index) =>
                <div className="panel-body" key= {index}>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img src={user.image} alt={user.name} width="300" height="300"/>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Họ và tên</label>
                        <p>{user.name}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Email</label>
                        <p>{user.email}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Tuổi</label>
                        <p>{user.age}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Địa chỉ</label>
                        <p>{user.address}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Kĩ năng</label>
                        <p>{user.skill}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Chứng chỉ</label>
                        <p>{user.certificate}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Học vấn</label>
                        <p>{user.education}</p>
                    </div>
                    <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Kinh nghiệm làm việc</label>
                        <p>{user.exp}</p>
                    </div>

                </div>
                )}
            </div>
        );
    }
}

export default TemplateCV1;