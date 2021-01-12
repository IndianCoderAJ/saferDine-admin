import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderCards from '../common/HeaderCards';
import Footer from '../footer/';
import Spiner from '../../loader/'

export class PendingOreders extends Component {

    constructor(){
        super();
        this.state = {
            ord:[1,2],
        }
    }
    componentDidMount(){
        
    }
    
 
    render() {

        let {loading}= this.props.loadingData;
        // let orderData = this.props.orderData.activeOrder.activeOrders;
        let orderData = this.state.ord;
        let tableBodyContent;

        if(loading){
            tableBodyContent = <Spiner />
         }else{ 
            tableBodyContent = orderData.map(item => {
                return (
                    <tr >
                    <td>1</td>
                    <td>15</td>
                    <td>5</td>
                    <td>Divya Gotecha</td>
                    <td>8:45</td>
                    <td>Pending</td>
                    <td className="action-btns">
                        {/* <i className="fas fa-eye pr-2" /> */}
                        {/* <i className="fas fa-edit pr-2" />
                        <i class="fas fa-trash-alt"></i> */}
                        <button type="button" className="btn " data-toggle="modal" data-target="#exampleModal">
                             <i className="fas fa-eye text-success" />
                        </button>
                        </td>
                    </tr>
                )
            })
          }
       
        return (
            <div>
                <React.Fragment>
                <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Pending Orders</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Pending Orders</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Pending Orders</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Sr No.</th>
                                                        <th style={{ width: 130 }}>Order No</th>
                                                        <th style={{ width: 200 }}>Table No.</th>
                                                        <th style={{ width: 200 }}>Customer Name</th>
                                                        <th style={{ width: 130 }}>Time</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 100 }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {tableBodyContent}
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
                </React.Fragment>
                
                
            </div>
        )
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

export default connect(mapStateToProps,{})(PendingOreders);
