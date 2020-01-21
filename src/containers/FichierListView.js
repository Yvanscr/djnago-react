import React from 'react';
import axios from 'axios';

import Fichiers from '../components/Fichier';


class FichierList extends React.Component {
    
    state = {
        fichiers: []
    }

    componentDidMount(){
        axios.get('http:127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    fichiers: res.data
                });
            })
    }
    
    render(){
       return(
            <Fichiers data={this.state.fichiers} />
       ) 
    }
}

export default FichierList;