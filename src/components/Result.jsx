import React, { Component } from 'react';
import {
  Container,
  Segment,
  Header,
  Button,
  Icon
} from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: props.correctAnswers,
      userScore: (props.correctAnswers * 100) / 10
    };
  }

  render() {
    const { correctAnswers, userScore } = this.state;
    const { retakeQuiz, backToHome } = this.props;
    console.log(userScore);

    let remarks = 'Sorry, You did not Pass the test!';
    if (userScore >= 60) {
      remarks = 'Congratulations, You Passed the test!';
    }

    return (
      <div>
        <Container textAlign="center" color="teal">
          <Segment Segments color="orange">
           
            <Header as="h3" textAlign="center" block>
              {remarks}
           
       <br></br>
              Passing Score: 60
              <br></br>
            
              Total Questions: 10
      
              <br></br>
              Correct Answers: {correctAnswers}
       
              <br></br>
              Your Score: {userScore}
            </Header>
            <div style={{ marginTop: '15px', marginBottom: '4px' }}>
              <Button primary size="medium" onClick={retakeQuiz}>
                Re-attempt Quiz
                <Icon corner="top right"  />
              </Button>
              <Button color="teal" size="medium" onClick={backToHome}>
               Return to Home
                <Icon corner="top right" />
              </Button>
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Result;
