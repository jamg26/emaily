import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href='/api/logout'>Sign Out</a>
          </li>
        );
    }
  }
  render() {
    const { auth } = this.props;
    console.log(auth?.googleId);
    return (
      <div>
        <nav className='nav-wrapper'>
          <Link to={auth ? '/surveys' : '/'} className='brand-logo'>
            EMAILY
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
