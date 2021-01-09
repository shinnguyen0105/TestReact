import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import songList from '../assets/songs';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const DetailSong = () => {
  const { id } = useParams();
  const thisSong = songList.find((s) => s.id === id);
  console.log(thisSong);
  const authors = songList.filter((a) => (a.author = thisSong.author));
  console.log(authors);

  return (
    <div>
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
        {authors.map((song) => (
          <div>
            <h3>song.title</h3>
            <h2>song.lyric</h2>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default DetailSong;
