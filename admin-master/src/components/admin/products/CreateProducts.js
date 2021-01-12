import React, { Component } from 'react'
import Footer from '../footer/';
import HeaderCards from '../common/HeaderCards';

export class CreateProducts extends Component {
    

    render() {
        return (
            <div>
                <React.Fragment>
                <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Create Products</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Create Products</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-8 col-md-8 mx-auto">
                            <div className="card-header">
                                <div className="card shadow-lg border-0 rounded-lg my-3">
                                    <h4 className="text-center pt-3 pb-3">Create Product</h4>
                                    <div className="card-body">
                                        <form action="" method="POST" enctype="multipart/form-data">
                                        <div class="form-row pb-3">
                                            <div class="col-md-6">
                                                <div class="form-group"><label class="small mb-1" for="inputFirstName">Product Name</label><input class="form-control py-4" id="createproductname" name="createproductname" type="text" placeholder="Enter Product name" /></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"><label class="small mb-1" for="inputFirstName">Product Price</label><input class="form-control py-4" id="createproductprice" name="createproductprice" type="number" placeholder="Enter Product price" /></div>
                                            </div>
                                        </div>

                                        <div class="form-row pb-3">
                                            <div class="col-md-6">
                                                <div class="form-group"><label class="small mb-1" for="inputFirstName">Category</label>
                                                    <select class="form-control" id="createproductcat" name="category"></select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 pb-2">
                                                <div class="form-group"><label class="small mb-1" for="inputFirstName">Veg/non-Veg</label>
                                                    <select class="form-control" id="vag_VS_non" name="vag_VS_non">
                                                        <option value="Veg">Veg</option>
                                                        <option value="Non-Veg">Non-Veg</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-row pb-3">
                                            <div class="col-md-12">
                                                <label for="comment">Description:</label>
                                                <textarea class="form-control" rows="5" id="createproductdescription" name="createproductdescription"></textarea>
                                            </div>
                                        </div>

                                        <div class="form-row pb-3">
                                            <div class="col-md-12">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroupFileAddon01">Product Photo</span>
                                                    </div>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="createproduct_pic" name="createproduct_pic" aria-describedby="inputGroupFileAddon01" />
                                                        <label class="custom-file-label" for="product_pic"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-row d-flex justify-content-center align-items-center pb-3">
                                            <div class="create-btnpro">
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

export default CreateProducts

