import React from 'react';
import { Layout, Menu, Icon,Popover,Button,Drawer, Col, Row, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from './../logo-audit.png';

const { Header, Content, Footer } = Layout;

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 8,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 6,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

const value = 14;

class HeadLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             collapsed: false,
        }
    }

    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    state = { visible: false };

      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };

      onClose = () => {
        this.setState({
          visible: false,
        });
      };

  render() {
    return (
       <Layout style={{ minHeight: '90vh' }} >
        <Header style={{ background: '#fff', padding: 0 }} >
            <Menu mode="horizontal">
              <Menu.Item> <NavLink exact to='/home'><img src={logo} width="150" height="40" alt="" /></NavLink></Menu.Item>
              <Menu.Item key = "1" >
          <NavLink exact to='/home'><Icon type = "home" style={{color: 'red'}} />
            <span> Accueil </span></NavLink>
          </Menu.Item>
          <Menu.Item key="2" >
            <NavLink exact to='/depots'><Icon type="file-add" style={{color: 'red'}} /><span > Dépôts </span></NavLink>
          </Menu.Item>
          <Menu.Item key = "3" >
            <NavLink exact to='/outils'><Icon type = "tool" style={{color: 'red'}} /><span > Outils </span> </NavLink>
          </Menu.Item>
          <Menu.Item key = "4" >
            <NavLink exact to='/mesfichiers'><span ><Icon type = "file" style={{color: 'red'}} /><span > Mes fichiers </span> </span></NavLink>
          </Menu.Item> 
          <Menu.Item key = "5" >
            <NavLink exact to='/bilan'><Icon type = "dashboard" style={{color: 'red'}} /> <span>Relevé kilomètrique </span></NavLink>
          </Menu.Item> 
          <Menu.Item key = "6" >
            <NavLink exact to='/alertes'><Icon type = "exclamation-circle" style={{color: 'red'}} />
            <span > Alertes</span>  </NavLink>
          </Menu.Item> 
          <Menu.Item key = "7" >
            <NavLink exact to='/cabinet'><span ><Icon type = "audit"  style={{color: 'red'}}/>
            <span > Le cabinet </span> </span> </NavLink>
          </Menu.Item> 
          <Menu.Item style={{float:'right'}}>
              <Popover placement="bottom" content={
                              <div>
                              <p>Yvan Dolin RALAIMAZAVA</p><a onClick={this.showDrawer}>Détails</a><br /><br />
                              <NavLink exact to='/'><Button type="danger"><Icon type="logout" />Déconnecter</Button></NavLink>
                              </div>
  } title="Mon compte" trigger="click">
                <Button type="dashed" size="large" ><Icon type="user" style={{color: 'red'}}/><span>Mon compte</span></Button>
              </Popover>
          </Menu.Item>
          </Menu>
          </Header>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            {this.props.children}
          </Content>
        </Layout>
          <Footer style={{ textAlign: 'center' }}>©2019 by Team Noé Consulting</Footer> 
          <Drawer
          width={350}
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
      >
        <Row>
            <Col>
              <center><Avatar icon="user" size={80} /></center>
            </Col>
        </Row>
        <br />
        <Row>
            <Col span={value}>
              <DescriptionItem title="Prénom" content="Yvan Dolin" />
            </Col>
        </Row>
        <Row>
            <Col span={value}>
              <DescriptionItem title="Nom" content="RALAIMAZAVA" />
            </Col>
         </Row>
         <Row>
            <Col span={value}>
              <DescriptionItem title="Téléphone" content="0346423488" />
            </Col>
         </Row>
         <Row>
            <Col span={value}>
              <DescriptionItem title="Mail" content="yvandolin@gmail.com" />
            </Col>
         </Row>
         <Row>
            <Col span={12}>
              <DescriptionItem title="Mot de passe" content="...." />
            </Col>
            <Col span={12}>
              <Button>Modifier</Button>
            </Col>
         </Row>
         <Row>
            <Col span={value}>
              <DescriptionItem title="Type de compte" content="....." />
            </Col>
         </Row>
      </Drawer>
      </Layout>
    );
  }
}

export default HeadLayout;