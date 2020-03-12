import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Button } from 'antd';

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
        return [
          <li key='0'>
            <Button style={{ color: 'white' }} type='link' size='large'>
              Credits: {this.props.auth?.credits}
            </Button>
          </li>,
          <li key='1'>
            <Payments />
          </li>,
          <li key='2'>
            <a href='/api/logout'>Sign Out</a>
          </li>
        ];
    }
  }
  render() {
    const { auth } = this.props;
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
