import React, { Component } from 'react';

class TemplateCV2 extends Component{
    render() {
        const { users } = this.props;
        return (
            <div className="panel panel-primary col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-heading row">
                    <h3 className="panel-title">Form title</h3>
                </div>
                {users.map((user, index) =>
                <div className="panel-body" key= {index}>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img src={user.image} alt={user.name}/>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Họ và tên</label>
                        <div className="col-sm-10">
                            <p>{user.name}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Tuổi</label>
                        <div className="col-sm-10">
                        <p>{user.age}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Địa chỉ</label>
                        <div className="col-sm-10">
                            <p>{user.address}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Kĩ năng</label>
                        <div className="col-sm-10">
                            <p>{user.skill}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Chứng chỉ</label>
                        <div className="col-sm-10">
                            <p>{user.certificate}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Học vấn</label>
                        <div className="col-sm-10">
                            <p>{user.education}</p>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label className="col-sm-2 control-label">Kinh nghiệm làm việc</label>
                        <div className="col-sm-10">
                            <p>{user.exp}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default TemplateCV2;