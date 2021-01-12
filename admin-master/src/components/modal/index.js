import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
        <div className="modal fade " id="activeorder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="text-center modal-title" id="exampleModalLabel">Order Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <table className="table table-bordered  "id="order" width="100%" cellspacing="0">
                <thead>
                    <tr className="table-bordered modal-tab">
                        <th>Sr</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Table No.</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                    <tr class="table-bordered">
                        <th>1</th>
                        <th>Roti</th>
                        <th>3</th>
                        <th>2</th>
                        <th>2pm</th>
                        <th>Status</th>
                    </tr>

                    <tr class="table-bordered">
                        <th>1</th>
                        <th>Roti</th>
                        <th>3</th>
                        <th>2</th>
                        <th>2pm</th>
                        <th>Status</th>
                    </tr>

                    <tr class="table-bordered">
                        <th>1</th>
                        <th>Roti</th>
                        <th>3</th>
                        <th>2</th>
                        <th>2pm</th>
                        <th>Status</th>
                    </tr>

                    <tr class="table-bordered">
                        <th>1</th>
                        <th>Roti</th>
                        <th>3</th>
                        <th>2</th>
                        <th>2pm</th>
                        <th>Status</th>
                    </tr>
            </table>
        </div>
                <div class="modal-footer">
                    {/* <!-- <button type="button" class="btn accept" data-dismiss="modal">Accept</button>
                    <button type="button" class="btn reject">Reject</button> --> */}
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Modal;
