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
} from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom';

const DetailSong = () => {
  let { id } = useParams();

  //   const [songA, setSongA] = useState();
  const thisSong = songList.find((s) => s.id === id);
  //   console.log(thisSong.author);
  const authors = songList.filter((a) => a.author === thisSong.author);
  //   setSongA({ ...authors });
  console.log(...authors);
  return (
    <div>
      <Col xs='6'>
        <Card>
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
          .filter((s) => s.author === thisSong.author && s.id !== thisSong.id)
          .map((song) => (
            <Link to={`${song.id}`}>
              <h3>{song.title}</h3>
            </Link>
          ))}
      </Col>
    </div>
  );
};

export default DetailSong;
