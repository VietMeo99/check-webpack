/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// import "./css/_core.css";
// import "./css/icons.css";
// import "./css/bootstrap.min.css";
// import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="topbar">
          {/* LOGO */}
          <div className="topbar-left">
            <div className="text-center">
              <a href="index.html" className="logo"><img src="assets/images/logo_white_2.png" height={28} /></a>
              <a href="index.html" className="logo-sm"><img src="assets/images/logo_sm.png" height={36} /></a>
            </div>
          </div>
          {/* Button mobile view to collapse sidebar menu */}
          <div className="navbar navbar-default" role="navigation">
            <div className="container">
              <div>
                <div className="pull-left">
                  <button type="button" className="button-menu-mobile open-left waves-effect waves-light">
                    <i className="ion-navicon" />
                  </button>
                  <span className="clearfix" />
                </div>
                <form className="navbar-form pull-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control search-bar" placeholder="Search..." />
                  </div>
                  <button type="submit" className="btn btn-search"><i className="fa fa-search" /></button>
                </form>
                <ul className="nav navbar-nav navbar-right pull-right">
                  <li className="dropdown hidden-xs">
                    <a href="#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                      <i className="fa fa-bell" /> <span className="badge badge-xs badge-danger">3</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-lg">
                      <li className="text-center notifi-title">Notification <span className="badge badge-xs badge-success">3</span></li>
                      <li className="list-group">
                        {/* list item*/}
                        <a href="javascript:void(0);" className="list-group-item">
                          <div className="media">
                            <div className="media-heading">Your order is placed</div>
                            <p className="m-0">
                              <small>Dummy text of the printing and typesetting industry.</small>
                            </p>
                          </div>
                        </a>
                        {/* list item*/}
                        <a href="javascript:void(0);" className="list-group-item">
                          <div className="media">
                            <div className="media-body clearfix">
                              <div className="media-heading">New Message received</div>
                              <p className="m-0">
                                <small>You have 87 unread messages</small>
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* list item*/}
                        <a href="javascript:void(0);" className="list-group-item">
                          <div className="media">
                            <div className="media-body clearfix">
                              <div className="media-heading">Your item is shipped.</div>
                              <p className="m-0">
                                <small>It is a long established fact that a reader will</small>
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* last list item */}
                        <a href="javascript:void(0);" className="list-group-item">
                          <small className="text-primary">See all notifications</small>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-xs">
                    <a href="#" id="btn-fullscreen" className="waves-effect waves-light"><i className="fa fa-crosshairs" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true"><img src="assets/images/users/avatar-1.jpg" alt="user-img" className="img-circle" /> </a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)"> Profile</a></li>
                      <li><a href="javascript:void(0)"><span className="badge badge-success pull-right">5</span> Settings </a></li>
                      <li><a href="javascript:void(0)"> Lock screen</a></li>
                      <li className="divider" />
                      <li><a href="javascript:void(0)"> Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </div>
        </div>
        {/* Top Bar End */}
        {/* ========== Left Sidebar Start ========== */}
        <div className="left side-menu">
          <div className="sidebar-inner slimscrollleft">
            <div className="user-details">
              <div className="text-center">
                <img src="assets/images/users/avatar-1.jpg" alt="" className="img-circle" />
              </div>
              <div className="user-info">
                <div className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Kenny Rigdon</a>
                  <ul className="dropdown-menu">
                    <li><a href="javascript:void(0)"> Profile</a></li>
                    <li><a href="javascript:void(0)"> Settings</a></li>
                    <li><a href="javascript:void(0)"> Lock screen</a></li>
                    <li className="divider" />
                    <li><a href="javascript:void(0)"> Logout</a></li>
                  </ul>
                </div>
                <p className="text-muted m-0"><i className="fa fa-dot-circle-o text-success" /> Online</p>
              </div>
            </div>
            {/*- Divider */}
            <div id="sidebar-menu">
              <ul>
                <li>
                  <a href="index.html" className="waves-effect"><i className="ti-home" /><span> Dashboard </span></a>
                </li>
                <li>
                  <a href="typography.html" className="waves-effect"><i className="ti-ruler-pencil" /><span> Typography <span className="badge badge-primary pull-right">6</span></span></a>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-agenda" /> <span> UI Elements </span> <span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-panels.html">Panels</a></li>
                    <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-components.html">Components</a></li>
                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                    <li><a href="ui-alerts.html">Alerts</a></li>
                    <li><a href="ui-sweet-alert.html">Sweet-Alert</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                  </ul>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-wand" /> <span> Icons </span> <span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="icons-material.html">Material Design</a></li>
                    <li><a href="icons-ion.html">Ion Icons</a></li>
                    <li><a href="icons-fontawesome.html">Font awesome</a></li>
                    <li><a href="icons-themify.html">Themify Icons</a></li>
                  </ul>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-write" /><span> Forms </span><span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="form-elements.html">General Elements</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-advanced.html">Advanced Form</a></li>
                    <li><a href="form-wysiwyg.html">WYSIWYG Editor</a></li>
                    <li><a href="form-uploads.html">Multiple File Upload</a></li>
                  </ul>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-menu-alt" /><span> Tables </span><span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="tables-basic.html">Basic Tables</a></li>
                    <li><a href="tables-datatable.html">Data Table</a></li>
                  </ul>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-pie-chart" /><span> Charts </span><span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="charts-morris.html">Morris Chart</a></li>
                    <li><a href="charts-chartjs.html">Chartjs</a></li>
                    <li><a href="charts-flot.html">Flot Chart</a></li>
                    <li><a href="charts-other.html">Other Chart</a></li>
                  </ul>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-map-alt" /><span> Maps </span><span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="maps-google.html"> Google Map</a></li>
                    <li><a href="maps-vector.html"> Vector Map</a></li>
                  </ul>
                </li>
                <li>
                  <a href="calendar.html" className="waves-effect"><i className="ti-calendar" /><span> Calendar <span className="badge badge-primary pull-right">NEW</span></span></a>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect"><i className="ti-files" /><span> Pages </span><span className="pull-right"><i className="mdi mdi-plus" /></span></a>
                  <ul className="list-unstyled">
                    <li><a href="pages-timeline.html">Timeline</a></li>
                    <li><a href="pages-invoice.html">Invoice</a></li>
                    <li><a href="pages-directory.html">Directory</a></li>
                    <li><a href="pages-login.html">Login</a></li>
                    <li><a href="pages-register.html">Register</a></li>
                    <li><a href="pages-recoverpw.html">Recover Password</a></li>
                    <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                    <li><a href="pages-blank.html">Blank Page</a></li>
                    <li><a href="pages-404.html">Error 404</a></li>
                    <li><a href="pages-500.html">Error 500</a></li>
                  </ul>
                </li>
                {/*<li class="has_sub">*/}
                {/*<a href="javascript:void(0);" class="waves-effect"><i class="ti-share"></i><span>Multi Menu </span><span class="pull-right"><i class="mdi mdi-plus"></i></span></a>*/}
                {/*<ul>*/}
                {/*<li class="has_sub">*/}
                {/*<a href="javascript:void(0);" class="waves-effect"><span>Menu Item 1.1</span> <span class="pull-right"><i class="mdi mdi-plus"></i></span></a>*/}
                {/*<ul style="">*/}
                {/*<li><a href="javascript:void(0);"><span>Menu Item 2.1</span></a></li>*/}
                {/*<li><a href="javascript:void(0);"><span>Menu Item 2.2</span></a></li>*/}
                {/*</ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<a href="javascript:void(0);"><span>Menu Item 1.2</span></a>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</li>*/}
              </ul>
            </div>
            <div className="clearfix" />
          </div> {/* end sidebarinner */}
        </div>
        {/* Left Sidebar End */}
        {/* Start right Content here */}
        <div className="content-page">
          {/* Start content */}
          <div className="content">
            <div className="container">
              {/* Page-Title */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-header-title">
                    <h4 className="pull-left page-title">Dashboard</h4>
                    <ol className="breadcrumb pull-right">
                      <li><a href="#">Xadmino</a></li>
                      <li className="active">Dashboard</li>
                    </ol>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="panel panel-primary text-center">
                    <div className="panel-heading">
                      <h4 className="panel-title">Total Subscription</h4>
                    </div>
                    <div className="panel-body">
                      <h3><b>2568</b></h3>
                      <p className="text-muted"><b>48%</b> From Last 24 Hours</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="panel panel-primary text-center">
                    <div className="panel-heading">
                      <h4 className="panel-title">Order Status</h4>
                    </div>
                    <div className="panel-body">
                      <h3><b>3685</b></h3>
                      <p className="text-muted"><b>15%</b> Orders in Last 10 months</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="panel panel-primary text-center">
                    <div className="panel-heading">
                      <h4 className="panel-title">Unique Visitors</h4>
                    </div>
                    <div className="panel-body">
                      <h3><b>25487</b></h3>
                      <p className="text-muted"><b>65%</b> From Last 24 Hours</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="panel panel-primary text-center">
                    <div className="panel-heading">
                      <h4 className="panel-title">Monthly Earnings</h4>
                    </div>
                    <div className="panel-body">
                      <h3><b>$2779.7</b></h3>
                      <p className="text-muted"><b>31%</b> From Last 1 month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="panel panel-primary">
                    <div className="panel-body">
                      <h4 className="m-t-0">Revenue</h4>
                      <ul className="list-inline m-t-30 widget-chart text-center">
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>5248</b></h4>
                          <h5 className="text-muted m-b-0">Marketplace</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-down-bold-circle text-danger" />
                          <h4><b>321</b></h4>
                          <h5 className="text-muted m-b-0">Last week</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>964</b></h4>
                          <h5 className="text-muted m-b-0">Last Month</h5>
                        </li>
                      </ul>
                      <div id="sparkline1" style={{margin: '0 -21px -22px -22px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="panel panel-primary">
                    <div className="panel-body">
                      <h4 className="m-t-0">Email Sent</h4>
                      <ul className="list-inline m-t-30 widget-chart text-center">
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>3654</b></h4>
                          <h5 className="text-muted m-b-0">Marketplace</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-down-bold-circle text-danger" />
                          <h4><b>954</b></h4>
                          <h5 className="text-muted m-b-0">Last week</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>8462</b></h4>
                          <h5 className="text-muted m-b-0">Last Month</h5>
                        </li>
                      </ul>
                      <div id="sparkline2" style={{margin: '0 -21px -22px -22px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="panel panel-primary">
                    <div className="panel-body">
                      <h4 className="m-t-0">Monthly Subscriptions</h4>
                      <ul className="list-inline m-t-30 widget-chart text-center">
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>3256</b></h4>
                          <h5 className="text-muted m-b-0">Marketplace</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-down-bold-circle text-danger" />
                          <h4><b>785</b></h4>
                          <h5 className="text-muted m-b-0">Last week</h5>
                        </li>
                        <li>
                          <i className="mdi mdi-arrow-up-bold-circle text-success" />
                          <h4><b>1546</b></h4>
                          <h5 className="text-muted m-b-0">Last Month</h5>
                        </li>
                      </ul>
                      <div id="sparkline3" style={{margin: '0 -21px -22px -22px'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Customers Tables</h3>
                    </div>
                    <div className="panel-body">
                      <table id="datatable-responsive" className="table table-striped table-bordered dt-responsive nowrap" cellSpacing={0} width="100%">
                        <thead>
                          <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Extn.</th>
                            <th>E-mail</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tiger</td>
                            <td>Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            <td>5421</td>
                            <td>t.nixon@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Garrett</td>
                            <td>Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                            <td>8422</td>
                            <td>g.winters@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Ashton</td>
                            <td>Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009/01/12</td>
                            <td>$86,000</td>
                            <td>1562</td>
                            <td>a.cox@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Cedric</td>
                            <td>Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>$433,060</td>
                            <td>6224</td>
                            <td>c.kelly@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Airi</td>
                            <td>Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>$162,700</td>
                            <td>5407</td>
                            <td>a.satou@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Brielle</td>
                            <td>Williamson</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>$372,000</td>
                            <td>4804</td>
                            <td>b.williamson@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Herrod</td>
                            <td>Chandler</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>$137,500</td>
                            <td>9608</td>
                            <td>h.chandler@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Rhona</td>
                            <td>Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                            <td>2010/10/14</td>
                            <td>$327,900</td>
                            <td>6200</td>
                            <td>r.davidson@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Colleen</td>
                            <td>Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                            <td>2009/09/15</td>
                            <td>$205,500</td>
                            <td>2360</td>
                            <td>c.hurst@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Sonya</td>
                            <td>Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td>2008/12/13</td>
                            <td>$103,600</td>
                            <td>1667</td>
                            <td>s.frost@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Jena</td>
                            <td>Gaines</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>30</td>
                            <td>2008/12/19</td>
                            <td>$90,560</td>
                            <td>3814</td>
                            <td>j.gaines@datatables.net</td>
                          </tr>
                          <tr>
                            <td>Quinn</td>
                            <td>Flynn</td>
                            <td>Support Lead</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2013/03/03</td>
                            <td>$342,000</td>
                            <td>9497</td>
                            <td>q.flynn@datatables.net</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> {/* End Row */}
            </div> {/* container */}
          </div> {/* content */}
          <footer className="footer">
            2016 © Xadmino.
          </footer>
        </div>
        {/* End Right content here */}
      </div>
    )
  }
}

export default App;