import React from 'react';

import {
  Container,
  Segment,
  Item,
  Button
} from 'semantic-ui-react';


export default props => (
  
  <Container textAlign='center' top="10">
    <Segment raised>
      <Item.Group>
        <Item>
         
          <Item.Content>
            <Item.Header>
              <h1 > Trivia Quiz</h1>
            </Item.Header>
            <br />
            <Item.Meta>
              <Segment size="large">
              <label htmlFor="difficulty">Difficulty</label><br /><br />
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
              </Segment>
              <Segment>
              <label htmlFor="difficulty">Amount: 10 questions</label>
              </Segment>
            </Item.Meta>
            <Item.Extra>
              <Button inverted color="blue" size="medium"  onClick={props.startQuiz}>
                Start
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </Container>
);
