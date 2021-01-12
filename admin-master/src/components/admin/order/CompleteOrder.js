import React, { Component } from 'react'
import Footer from '../footer/';
import HeaderCards from '../common/HeaderCards';
import Spiner from '../../loader/'
import { connect } from 'react-redux';


export class CompleteOrder extends Component {
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
        // let orderData = this.props.orderData.completedOrder.completedOrders;
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
                    <td>Completed</td>
                    <td className="action-btns">
                        {/* <i className="fas fa-eye pr-2" /> */}
                        {/* <i className="fas fa-edit pr-2" />
                        <i class="fas fa-trash-alt"></i> */}
                        <button type="button" className="btn " data-toggle="modal" data-target="#completeorder">
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
                        <h2 className="mt-30 page-title">Completed Orders</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Completed Orders</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Completed Orders</h4>
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

export default  connect(mapStateToProps,{})(CompleteOrder);
