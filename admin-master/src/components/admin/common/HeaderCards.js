import React, { Component } from 'react';
import { connect } from 'react-redux';

import'../../../css/link.css'

export class HeaderCards extends Component {

    componentDidMount(){
        if(!this.props.orderData.pendigOrderCount){
            // get active pending and complted count.
        
        }

        if(!this.props.tableRequestData.tableRequests){
            // get count of table Request.
        }
    }

    render() {
        return (
            <React.Fragment>

                   <div className="col-xl-3 col-md-6">
                            <a className="a-link" cla href="/admin">
                                <div className="dashboard-report-card red">
                                    <div className="card-content">
                                        <span className="card-title">Table Request</span>
                                        <span className="card-count">0</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="far fa-times-circle" />
                                    </div>
                                </div>
                                </a>
                            </div>
               
                <div className="col-xl-3 col-md-6">
                <a className="a-link" cla href="/admin/order/PendingOrders">
                                <div className="dashboard-report-card purple">
                                    <div className="card-content">
                                        <span className="card-title" >Order Pending</span>
                                        <span className="card-count">2</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fab fa-rev" />
                                    </div>
                                </div>
                                </a>
                            </div>
                           
                            <div className="col-xl-3 col-md-6">
                            <a className="a-link" cla href="/admin/order/ActiveOrder">
                                <div className="dashboard-report-card info">
                                    <div className="card-content">
                                        <span className="card-title">Order Process</span>
                                        <span className="card-count">5</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-sync-alt rpt_icon" />
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-md-6">
                            <a className="a-link" cla href="/admin/order/CompleteOrder">
                                <div className="dashboard-report-card success">
                                    <div className="card-content">
                                        <span className="card-title">Order Completed</span>
                                        <span className="card-count">10</span>
                                    </div>
                                    <div className="card-media">
                                    <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>({
    authData:state.authData,
    orderData:state.orderData,
    tableRequestData:state.tableRequestData,
});


export default connect(mapStateToProps,{})(HeaderCards)