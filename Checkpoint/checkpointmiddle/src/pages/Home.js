import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  CardGroup,
} from 'reactstrap';
import songList from '../assets/songs';
import DetailSong from './DetailSong';
import { useRouteMatch } from 'react-router-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Home = () => {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <CardGroup>
          {songList.map((song) => (
            <Col sm='4'>
              <Card>
                <CardBody>
                  <CardTitle tag='h5'>{song.title}</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    {song.author}
                  </CardSubtitle>
                  <CardText>{song.lyric}</CardText>
                  <Button>
                    <Link to={`${url}/${song.id}`}>Detail</Link>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
      <Switch>
        <Route path={`${path}/:id`}>
          <DetailSong />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
