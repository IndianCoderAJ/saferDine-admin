import React, { Component } from 'react'
import '../../../css/modal-confirm.css'

export class ModalConfirm extends Component {

    
    render() {
       
        // let showFlag = true;
       
        // if(showFlag){
            return(
                <React.Fragment>
                <div class="modal fade" id="" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header modalconfirm-header">
                                <h5 className="modal-title modalconfirm-title" id="exampleModalLongTitle">Please Confirm</h5>
                                <button type="button" className="close modalconfirm-closebackg"  data-dismiss="modal" aria-label="Close">
                                    <span className="modalconfirm-closesign" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                            <div className="modal-body text-center">
                                <p className="modalconfirm-body">Are you sure you want to continue?</p>
                            </div>
                            
                            <div className="modal-footer modalconfirm-footerposition">
                                <button type="button" className="btn btn-success modalconfirm-yesbtn">Yes</button>
                                <button type="button" className="btn btn-danger modalconfirm-nobtn" data-dismiss="modal">No</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment> 
            )
        // }else
        // {
        //     return
        // }
    }
}

export default ModalConfirm
