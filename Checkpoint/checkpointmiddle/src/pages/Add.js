import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Add = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for='name'>Name Song</Label>
          <Input
            type='name'
            name='namesong'
            id='namesong'
            placeholder='Name Song'
          />
        </FormGroup>
        <FormGroup>
          <Label for='author'>Author</Label>
          <Input
            type='name'
            name='author'
            id='nameauthor'
            placeholder='Author'
          />
        </FormGroup>
        <FormGroup>
          <Label for='lyrics'>Lyrics</Label>
          <Input type='lyrics' name='lyrics' id='lyrics' placeholder='lyrics' />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Add;
