import React, { Component, Fragment } from 'react';
import Start from './components/Start.jsx';
import Loader from './components/Loader.jsx';
import Quiz from './components/Quiz.jsx';

const API = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null,
      isQuizStart: false
    };

    this.setData = this.setData.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.backToHomeHelper = this.backToHomeHelper.bind(this);
  }

  setData(result) {
    this.setState({ quizData: result.results });
  }

  componentDidMount() {
    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 2000))
      .catch(error => console.log('API error', error));
  }

  startQuiz() {
    this.setState({ isQuizStart: true });
  }

  backToHome() {
    this.setState({ quizData: null, isQuizStart: false });
    setTimeout(() => {
      this.backToHomeHelper();
    }, 3000);
  }

  backToHomeHelper() {
    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 1000))
      .catch(error => console.log('API error', error));
  }

  render() {
    const { quizData, isQuizStart } = this.state;
   

    return (
      <Fragment>
        {!quizData && <Loader />}
        {quizData && !isQuizStart && <Start startQuiz={this.startQuiz} />}
        {isQuizStart && (
          <Quiz quizData={quizData} backToHome={this.backToHome} />
        )}
      </Fragment>
    );
  }
}

export default App;
