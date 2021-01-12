import React, { Component } from 'react'
import Footer from '../footer/';
import HeaderCards from '../common/HeaderCards';


export class CreateCategory extends Component {
   
    render() {
        return (
            <div>
                <React.Fragment>
                <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Create Category</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Create Category</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-7 col-md-7 mx-auto">
                            <div className="card-header">
                                <div className="card shadow-lg border-0 rounded-lg my-3">
                                    <h4 className="text-center pt-3 pb-3">Create Category</h4>
                                    <div className="card-body">
                                        <form action="" method="POST" enctype="multipart/form-data">
                                        <div class="form-row pb-3">
                                            <div class="col-md-12">
                                                <div class="form-group"><label class="small mb-1" for="inputFirstName">Category Name</label><input class="form-control py-4" id="categoryname" name="categoryname" type="text" placeholder="Enter Product name" /></div>
                                            </div>
                                        </div>

                

                                        

                                        <div class="form-row pb-3">
                                            <div class="col-md-12">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="">Category Photo</span>
                                                    </div>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="" name="categoryproduct_pic" aria-describedby="" />
                                                        <label class="custom-file-label" for="product_pic"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-row d-flex justify-content-center align-items-center pb-3">
                                            <div class="craetecategory-btn">
                                                <button type="submit" class=" btn btn-cpro btn-block btn-danger">Create Product</button>
                                            </div>
                                        </div>

                                        </form>
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

export default CreateCategory
