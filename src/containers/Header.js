import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HeadLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return ( 
      <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline" theme="ligth" inlineCollapsed={this.state.collapsed}>
          <Menu.Item key = "1" >
            <Icon type = "home" />
            <span > Acceuil </span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span ><Icon type="file-add" theme = "twoTone" /><span > Dépôts </span> </span>
          } >
            <Menu.Item key = "2" > Factures fournisseurs </Menu.Item>
            <Menu.Item key = "3" > Factures de vente </Menu.Item> 
            <Menu.Item key = "4" > Relevé bancaire </Menu.Item> 
            <Menu.Item key = "5" > Autres documents </Menu.Item> 
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type = "tool" /><span > Outils </span> </span>} >
            <Menu.Item key = "6" > Simulateur </Menu.Item> 
            <Menu.Item key = "7" > Note de frais </Menu.Item> 
            <Menu.Item key = "8" > Sites utiles </Menu.Item> 
            <Menu.Item key = "9" > Chiffre utiles </Menu.Item>
          </SubMenu>
          <SubMenu key = "sub3" title={<span ><Icon type = "file" /><span > Mes fichiers </span> </span>}>
            <Menu.Item key = "10" > Documents administratif </Menu.Item> 
            <Menu.Item key = "11" > Documents marketing </Menu.Item> 
            <Menu.Item key = "12" > Archives </Menu.Item> 
          </SubMenu> 
          <SubMenu key="sub4" title={<span ><Icon type = "dashboard" /><span > Relevé kilomètrique </span> </span>} >
            <Menu.Item key = "13" > Mensuel </Menu.Item>
            <Menu.Item key = "14" > Annuel </Menu.Item> 
          </SubMenu> 
          <Menu.Item key = "15" ><Icon type = "exclamation-circle" />
            <span > Alertes </span> 
          </Menu.Item> 
          <SubMenu key="sub5" title={<span ><Icon type = "audit" />
            <span > Le cabinet </span> </span>
          } >
            <Menu.Item key = "16" > Présentation du cabinet </Menu.Item> 
            <Menu.Item key = "17" > Notre équipe </Menu.Item> 
            <Menu.Item key = "18" > Plan d 'accès</Menu.Item> 
            <Menu.Item key = "19" > Recommandez - nous </Menu.Item> 
          </SubMenu> 
          <Menu.Item key="20" >
            <Icon type = "logout" />
            <span> Déconnexion </span>
          </Menu.Item> 
        </Menu>
        </Sider>
        </Layout>
    );
  }
}

export default HeadLayout;