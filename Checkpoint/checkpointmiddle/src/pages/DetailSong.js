import React from 'react';
import { useParams } from 'react-router-dom';
import songList from '../assets/songs';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DetailSong = () => {
  let { id } = useParams();
  const thisSong = songList.find((s) => s.id === id);
  console.log(thisSong.author);
  return (
    <div>
      <Row>
        <Col xs='8'>
          <Card key={thisSong.id}>
            <CardBody>
              <CardTitle tag='h5'>{thisSong.title}</CardTitle>
              <CardSubtitle tag='h6' className='mb-2 text-muted'>
                {thisSong.author}
              </CardSubtitle>
              <CardText>{thisSong.lyric}</CardText>
              <CardText>{thisSong.publishedDate}</CardText>
              <CardText>{thisSong.id}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <h3>Author's song:</h3>
          {songList
            .filter((s) => s.author === thisSong.author && s.id !== id)
            .map((song, index) => (
              <Link to={`${song.id}`}>
                <h3 key={index}>{song.title}</h3>
              </Link>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default DetailSong;
