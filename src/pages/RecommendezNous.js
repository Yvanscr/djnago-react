import React from 'react';
import {Input , Breadcrumb, Form, Button  } from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './../containers/Layout';

const { TextArea } = Input;

class RecommandezNous extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Acceuil</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/cabinet'>Le cabinet</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/recommandeznous'>Recommandez-Nous</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Form >
            <Form.Item>
              <TextArea
                style={{ width: '50%' }}
                value={value}
                onChange={this.onChange}
                placeholder="Mettez votre recommandation ici"
                autoSize={{ minRows: 2, maxRows: 6}}
              />
            </Form.Item>
            <Form.Item align="right">
              <Button>Envoyez</Button>
            </Form.Item>
          </Form>
        </div>
      </HeadLayout>
    );
  }
}

export default RecommandezNous;