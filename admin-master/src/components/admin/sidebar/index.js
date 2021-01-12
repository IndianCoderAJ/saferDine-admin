import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//  import'../../../css/';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <a className="nav-link active" href="/admin">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                Dashboard
                            </a>

                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                                <div className="sb-nav-link-icon"><i class="fa fa-shopping-cart sidebarorder-icon" aria-hidden="true"></i></div>
                                Orders
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseShops" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/order/PendingOrders">Pending Orders</a>
                                    <a className="nav-link sub_nav_link" href="/admin/order/ActiveOrder">Active Orders</a>
                                    <a className="nav-link sub_nav_link" href="/admin/order/CompleteOrder">Completed Orders</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="sb-nav-link-icon"><i className="fas fa-box" /></div>
                                Products
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/products/CreateProducts">Create Product</a>
                                    <a className="nav-link sub_nav_link" href="/admin/products/ProductsList">List Products</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                <div className="sb-nav-link-icon"><i className="fas fa-list" /></div>
                                Categories
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseCategories" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/category/CreateCategory">Create Category</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/CategoryList">Category List</a>
                                    {/* <a className="nav-link sub_nav_link" href="/admin/category/sub-create">Add Sub-Category</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/sub-child-create">Add Child-Category</a> */}

                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsecheckout" aria-expanded="false" aria-controls="collapseLocations">
                                <div className="sb-nav-link-icon"><i class="fa fa-credit-card sidebarcheckout-icon" aria-hidden="true"></i></div>
                                Checkouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapsecheckout" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/location/list">Pending Checkout</a>
                                    <a className="nav-link sub_nav_link" href="/admin/location/create">Completed Checkout</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapstable" aria-expanded="false" aria-controls="collapseAreas">
                                <div className="sb-nav-link-icon"><i class="fa fa-table " aria-hidden="true"></i></div>
                                Tables
                             <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapstable" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/area/list">Create Table</a>
                                    <a className="nav-link sub_nav_link" href="/admin/area/create">List Tables</a>
                                </nav>
                            </div>

                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseuser" aria-expanded="false" aria-controls="collapseLocations">
                                <div className="sb-nav-link-icon"><i class="fa fa-user sidebaruser-icon" aria-hidden="true"></i></div>
                                Users
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseuser" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/location/list">Create User</a>
                                    <a className="nav-link sub_nav_link" href="/admin/location/create">List User</a>
                                </nav>
                            </div>

                            
                            
                            
                            
                            
                            
                            
                            <a className="nav-link" href="/admin/customer/list">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Customers
                            </a>
                            {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-newspaper" /></div>
                                Posts
                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="posts.html">All Posts</a>
                                    <a className="nav-link sub_nav_link" href="add_post.html">Add New</a>
                                    <a className="nav-link sub_nav_link" href="post_categories.html">Categories</a>
                                    <a className="nav-link sub_nav_link" href="post_tags.html">Tags</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAreas" aria-expanded="false" aria-controls="collapseAreas">
                                <div className="sb-nav-link-icon"><i className="fas fa-map-marked-alt" /></div>
                                Areas
          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseAreas" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="areas.html">All Areas</a>
                                    <a className="nav-link sub_nav_link" href="add_area.html">Add Area</a>
                                </nav>
                            </div>
                            
                            
                            <a className="nav-link" href="orders.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-cart-arrow-down" /></div>
                                Orders
        </a>
                            <a className="nav-link" href="customers.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Customers
        </a>
                            <a className="nav-link" href="offers.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-gift" /></div>
                                Offers
        </a>
                            <a className="nav-link" href="pages.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                Pages
        </a>
                            <a className="nav-link" href="menu.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-layer-group" /></div>
                                Menu
        </a>
                            <a className="nav-link" href="updater.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-cloud-upload-alt" /></div>
                                Updater
        </a>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                                <div className="sb-nav-link-icon"><i className="fas fa-cog" /></div>
                                Setting
          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseSettings" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="general_setting.html">General Settings</a>
                                    <a className="nav-link sub_nav_link" href="payment_setting.html">Payment Settings</a>
                                    <a className="nav-link sub_nav_link" href="email_setting.html">Email Settings</a>
                                </nav>
                            </div>
                            <a className="nav-link" href="reports.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-bar" /></div>
                                Reports
        </a> */}
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}
