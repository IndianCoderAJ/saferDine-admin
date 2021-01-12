import React, { Component } from 'react';
import HeaderCards from '../common/HeaderCards';
import Footer from '../footer/';
import Spiner from '../../loader/'
import { connect } from 'react-redux';

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            req:[1,2],
        }
    }
    componentDidMount(){
       
    }

    render() {
         let {loading}= this.props.loadingData;
        // let tableReqs = this.props.tableRequestData.tableRequests;
        let tableReqs = this.state.req;
         let tableReqContent;
         if(loading){
            tableReqContent = <Spiner />
         }else{
             tableReqContent = tableReqs.map(item => {
                 return(
                    <tr>
                    <td>#ORDER 123</td>
                    <td> 3 </td>
                    <td>
                       03:02AM
                    </td>
                    <td>Pending</td>
                    <td className="action-btns">
            
                        <i className="fas fa-eye" />
            
                        <i className="fas fa-edit" />
                    </td>
                </tr>

                 )
             });
         }

        return (
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Dashboard</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Recent Table Request</li>
                        </ol>
                        <div className="row">
                           <HeaderCards historyProps={this.props.history} />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Recent Table Request</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Request ID</th>
                                                        <th style={{ width: 130 }}>Table No</th>
                                                        <th style={{ width: 200 }}>Time</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 100 }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                     {tableReqContent}
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                 <Footer /> 
            </div>

        );
    }
}


const mapStateToProps = (state) =>({
    authData:state.authData,
    orderData:state.orderData,
    tableRequestData:state.tableRequestData,
    errorData:state.errorData,
    notificationData:state.notificationData,
    loadingData:state.loadingData
});


export default connect(mapStateToProps,{})(Home);