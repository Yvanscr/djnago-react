import React from 'react';
import { Breadcrumb, Form, Input, Select, Row, Col,DatePicker, Icon,Button, Upload, InputNumber } from 'antd';
import { NavLink } from 'react-router-dom';
import Camera from 'react-camera';
import { Scan } from 'react-scan';

import HeadLayout from './../containers/Layout';

const InputGroup = Input.Group;
const { Option } = Select;

class Notedefrais extends React.Component {
  
  render() {
    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Acceuil</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/outils'>Outils</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/notedefrais'>Note de frais</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Form>
          <Row>
            <Col span={8}>
              <Form.Item style={{ width: '50%' }}>
                <label>Titre:</label>
                <Input type="text" />
              </Form.Item>
              <Form.Item>
                <label>Catégorie:</label>
                <InputGroup compact>
                  <Select defaultValue="Location de voiture">
                    <Option value="Location de voiture">Location de voiture</Option>
                    <Option value="Location de salle">Location de sallle</Option>
                    <Option value="Hebergement">Hébèrgement</Option>
                    <Option value="Nourriture">Nourriture</Option>
                  </Select>
                </InputGroup>
              </Form.Item>
              <Form.Item style={{ width: '50%' }}>
                <label>Tarif TTC:</label>
                <Input type="text" />
              </Form.Item>
              <Form.Item style={{ width: '50%' }}>
                <label>Taux TVA:</label>
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item style={{ width: '50%' }}>
                <label>Montant TVA:</label>
                <Input type="text" />
              </Form.Item>
              <Form.Item style={{ width: '50%' }}>
                <label>Montant HT:</label>
                <Input type="text" />
              </Form.Item>
              <Form.Item style={{ width: '50%' }}>
                <label>Description:</label>
                <Input type="text" />
              </Form.Item>
              <Form.Item style={{ width: '50%' }}>
                <label>Date de dépense:</label>
                <DatePicker  placeholder="Séléctionnez une date"/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item style={{ width: '50%' }}>
                <label>Facture: </label>
                <Row mode="inline">
                  <Col span={8}>
                    <Upload>
                      <Icon type="upload" />
                    </Upload>
                    <Scan>
                      <Icon type="scan" />
                    </Scan>
                  </Col>
                  <Col span={8}>
                    <Upload>
                      <Icon type="join" />
                    </Upload>
                    <Camera>
                      <Icon type="camera" />
                    </Camera>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                      <label>HT :</label><br />
                      <label>TTC :</label><br />
                      <label>TVA :</label>
                  </Col>
                  <Col span={8}>
                      <InputNumber min={0} step={0.1} placeholder="0" /><br />
                      <InputNumber min={0} step={0.1} placeholder="0"/><br />
                      <InputNumber min={0} step={0.1} placeholder="0"/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button>Enregistrer</Button> <Button style={{color: 'red'}}>Annuler</Button>
              </Form.Item>
            </Col>
            </Row>
          </Form>

        </div>
      </HeadLayout>
    );
  }
}

export default Notedefrais;