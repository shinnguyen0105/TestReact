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
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Router>
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
                    <Link to={`/DetailSong/${song.id}`}>Detail</Link>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Router>
    </div>
  );
};

export default Home;
