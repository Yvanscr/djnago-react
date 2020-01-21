import React from 'react';
import {Route} from 'react-router-dom';

import FichierList from './containers/FichierListView';
import FichierDetail from './containers/FichierDetailView';
import Login from './containers/Login';
import Bilan from './containers/Bilan';
import Home from './containers/Home';
import Cabinet from './containers/Cabinet';
import Depots from './containers/Depots';
import Mesfichiers from './containers/Mesfichiers';
import Outils from './containers/Outils';
import Alertes from './containers/Alertes';
import Archives from './pages/Archives';
import AutreDoc from './pages/AutreDoc';
import BilanAnnuel from './pages/BilanAnnuel';
import BilanMensuel from './pages/BilanMensuel';
import ChiffresUtiles from './pages/ChiffresUtiles';
import DocAdministratif from './pages/DocAdministratif';
import DocMarketing from './pages/DocMarketing';
import FacturesF from './pages/FacturesF';
import FacturesVentes from './pages/FacturesVentes';
import Notedefrais from './pages/Notedefrais';
import NotreEquipe from './pages/NotreEquipe';
import PlanAcces from './pages/PlanAcces';
import Presentation from './pages/Presentation';
import RecommendezNous from './pages/RecommendezNous';
import ReleveBancaire from './pages/ReleveBancaire';
import Simulateurs from './pages/Simulateurs';
import SitesUtiles from './pages/SitesUtiles';

const BaseRouter = () => (
    <div >
        <Route exact path='/fichier' component={FichierList} />
        <Route exact path='/:fichierID' component={FichierDetail} />
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/cabinet' component={Cabinet} />
        <Route exact path='/depots' component={Depots} />
        <Route exact path='/mesfichiers' component={Mesfichiers} />
        <Route exact path='/outils' component={Outils} />
        <Route exact path='/alertes' component={Alertes} />
        <Route exact path='/archives' component={Archives} />
        <Route exact path='/autresDoc' component={AutreDoc} />
        <Route exact path='/annuel' component={BilanAnnuel} />
        <Route exact path='/bilan' component={Bilan} />
        <Route exact path='/mensuel' component={BilanMensuel} />
        <Route exact path='/chiffresutiles' component={ChiffresUtiles} />
        <Route exact path='/docadmin' component={DocAdministratif} />
        <Route exact path='/docmarketing' component={DocMarketing} />
        <Route exact path='/facturesF' component={FacturesF} />
        <Route exact path='/facturesV' component={FacturesVentes} />
        <Route exact path='/notedefrais' component={Notedefrais} />
        <Route exact path='/notreequipe' component={NotreEquipe} />
        <Route exact path='/planacces' component={PlanAcces} />
        <Route exact path='/presentation' component={Presentation} />
        <Route exact path='/recommandeznous' component={RecommendezNous} />
        <Route exact path='/relevebanc' component={ReleveBancaire} />
        <Route exact path='/simulateurs' component={Simulateurs} />
        <Route exact path='/sitesUtiles' component={SitesUtiles} />

    </div>
);

export default BaseRouter;