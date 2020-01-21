import React from 'react';
import { Breadcrumb,Result,Spin,Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './../containers/Layout';

class BilanAnnuel extends React.Component {
  
  render() {
    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Acceuil</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/bilan'>Bilan</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/annuel'>Annuel</NavLink></Breadcrumb.Item>
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

export default BilanAnnuel;