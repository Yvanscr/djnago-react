import React from 'react';
import {Form,Icon,Input,Button,Checkbox,Card} from 'antd';
import logo from './../logo-audit.png';
import { NavLink } from 'react-router-dom';

const userBefore = (
    <Icon type="user" />
  );

const passBefore = (
    <Icon type="lock" />
  );

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
    
      handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
      };
        render() {
            const { formLayout } = this.state;
            
            const buttonItemLayout =
            formLayout === 'horizontal'
                ? {
                    wrapperCol: { span: 13, offset: 5 },
                }
                : null;
            return(
                <div style={{ padding: 24, background: '#', minHeight: 360 }}>
                    <center>
                    <Card style={{ width: '50%', height:'50%'}}>
                        <Form layout={formLayout}>
                            <Form.Item  {...buttonItemLayout} >
                                <img src={logo}  width="200" height="100" alt="" />
                            </Form.Item>
                            <Form.Item style={{ width: '50%' }}>
                                <Input type="text"  size="large" addonBefore={userBefore} placeholder="Votre nom d'utilisateur ou adresse mail" /> 
                            </Form.Item>
                            <Form.Item style={{ width: '50%' }} >
                            <Input type="password" size="large" addonBefore={passBefore} placeholder="Mot de passe"/>
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                            <Checkbox>Se souvenir de moi</Checkbox>
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                                <Button >
                                    <NavLink exact to='/home'>Se connecter <Icon type="login"/></NavLink> 
                                </Button> 
                            </Form.Item>
                        </Form>
                    </Card>
                    </center>
                </div>
                )
        }
}

export default Login;