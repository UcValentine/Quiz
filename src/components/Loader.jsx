import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

export default props => (
  <Container textAlign="center">
    <Message icon size="large" color="teal">
      <Icon loading />
      <Message.Content>
        <Message.Header>Please wait..!</Message.Header>
        {props.text || 'questions will soon arive.'}
      </Message.Content>
    </Message>
  </Container>
);
