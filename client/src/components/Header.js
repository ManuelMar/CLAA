import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderNavRight() {
    if (this.props.auth === null) {
      return;
    } else if (this.props.auth === false) {
      return <a href="/auth/google">Login with Google</a>;
    } else {
      return [
        <li key="1">
          <Payments />
        </li>,
        <li key="2">
          <a href="/api/logout">Logout</a>
        </li>
      ];
    }
  }

  renderNavLeft() {
    return (
      <Link to={this.props.auth ? '/events' : '/'} className="brand-logo left">
        {this.props.auth ? `Hi ${this.props.auth.displayName}` : 'CLAA'}
      </Link>
    );
  }

  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="teal nav-wrapper">
          {this.renderNavLeft()}
          <ul id="nav-mobile" className="right ">
            {this.renderNavRight()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  //console.log({ auth });
  return { auth };
}

export default connect(mapStateToProps)(Header);
