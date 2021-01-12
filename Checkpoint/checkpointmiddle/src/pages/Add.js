import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import songList from '../assets/songs';
import { useHistory } from 'react-router-dom';
const Add = () => {
  const initialState = {
    namesong: '',
    author: '',
    lyrics: '',
  };
  const [input, setInput] = useState(initialState);
  const history = useHistory();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    let crypto = require('crypto');
    let id = crypto.randomBytes(16).toString('hex');
    let publishDate = new Date().toLocaleString();
    songList.push({
      id: id,
      author: input.author,
      publishedDate: publishDate,
      title: input.namesong,
      lyric: input.lyrics,
    });
    alert('Successful add song: ' + input.namesong);
    history.push(`/songs/${id}`);
  };
  return (
    <div>
      <Form onSubmit={HandleSubmit}>
        <FormGroup>
          <Label for='name'>Name Song</Label>
          <Input
            type='name'
            name='namesong'
            id='namesong'
            placeholder='Name Song'
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for='author'>Author</Label>
          <Input
            type='name'
            name='author'
            id='nameauthor'
            placeholder='Author'
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for='lyrics'>Lyrics</Label>
          <Input
            type='name'
            name='lyrics'
            id='lyrics'
            placeholder='lyrics'
            onChange={onChangeInput}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Add;
