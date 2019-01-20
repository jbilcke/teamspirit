import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Row from '../../presentational/atoms/Row';
import Col from '../../presentational/atoms/Col';
import Navigation from '../../presentational/organisms/Navigation';
import Teams from '../Teams';
import Team from '../Team';
import Players from '../Players';

// demo: we do not have a home so we will just redirect to teams
const Home = () => <Redirect to='/teams' />;

const App = () => (
  <Router>
    <Row>
      <Col className='col-fifth'><Navigation /></Col>
      <Col>
        <Route exact path='/' component={Home} />
        <Route path='/teams' component={Teams} />
        <Route path='/team/:id' component={Team} />
        <Route path='/players' component={Players} />
      </Col>
    </Row>
  </Router>
);
export default App;