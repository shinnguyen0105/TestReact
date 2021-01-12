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
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <CardGroup>
        {songList
          .sort((a, b) => {
            return new Date(b.publishedDate) - new Date(a.publishedDate);
          })
          .map((song, index) => (
            <Col sm='4' key={index}>
              <Card>
                <CardBody>
                  <CardTitle tag='h5'>{song.title}</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    {song.author}
                  </CardSubtitle>
                  <CardText>{song.lyric}</CardText>
                  <Button>
                    <Link to={{ pathname: `/songs/${song.id}` }}>Detail</Link>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
      </CardGroup>
    </div>
  );
};

export default Home;
