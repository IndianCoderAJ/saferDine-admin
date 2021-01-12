import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './header';
import Home from './dashboard';
import SideBar from './sidebar';
import PendingOrders from './order/PendingOreders';
import ActiveOrder from './order/ActiveOrder';
import CompleteOrder from './order/CompleteOrder';
import CreateProducts from './products/CreateProducts';
import ProductsList from './products/ProductsList';
import CreateCategory from './category/CreateCategory';
import CategoryList from './category/CategoryList';


 

export default class rootRoutes extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        <Header />
        <div id="layoutSidenav">
          <SideBar />
          <Switch>
            <Route exact path={[`${match.path}/home`, `${match.path}`]} component={Home} />
            <Route exact path="/admin/order/PendingOrders" component={PendingOrders} />
            <Route exact path="/admin/order/ActiveOrder" component={ActiveOrder} />
            <Route exact path="/admin/order/CompleteOrder" component={CompleteOrder} />
            <Route exact path="/admin/products/CreateProducts" component={CreateProducts} />
            <Route exact path="/admin/products/ProductsList" component={ProductsList} />
            <Route exact path="/admin/category/CreateCategory" component={CreateCategory} />
            <Route exact path="/admin/category/CategoryList" component={CategoryList} />
          </Switch>
        </div>
      </main>
    );
  }
}