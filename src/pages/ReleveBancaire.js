import React from 'react';
import {Result, Breadcrumb ,Spin,Icon} from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './../containers/Layout';

class ReleveBancaire extends React.Component {
  
  render() {
    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Acceuil</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/depots'>Dépôts</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/releveBanc'>Relevé Banquaire</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Result
          icon={<Icon type="tool" theme="twoTone" style={{color: 'red'}} />}
          title="Page en cours de développement..."
          extra={<Spin size="large" />}
        />
        </div>
      </HeadLayout>
    );
  }
}

export default ReleveBancaire;