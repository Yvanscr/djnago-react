import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class FichierDetail extends React.Component {

    state = {
        fichier: {}
    }

    componentDidMount(){
        const fichierID = this.props.match.params.fichierID;
        axios.get(`http:127.0.0.1:8000/api/${fichierID}`)
            .then(res => {
                this.setState({
                    fichier: res.data
                });
            })
    }

    render(){
       return(
            <Card title={this.state.fichier.title}>
                <p>{this.state.fichier.content}</p>
            </Card>
       )
    }
}

export default FichierDetail;