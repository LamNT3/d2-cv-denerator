import React from 'react';

function TemplateThumbnail(props) {
    return (
        
        <div className="panel panel-default">
              <div className="panel-heading">
                    <h3 className="panel-title">props.name</h3>
              </div>
              <div className="panel-body">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a className="thumbnail" href="#">
                            <img src={props.image} alt={props.name}/>
                        </a>
                    </div>  
                    <button type="button" className="btn btn-success">Chọn CV</button>          
              </div>
        </div>
        
    );
}
  
export default TemplateThumbnail;