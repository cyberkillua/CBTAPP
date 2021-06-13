import React, { Component } from "react";

class Onequestion extends Component {
  constructor() {
    super();

    this.state = {
      quest: "",
      options: {},
      answer: "",
      page: 0,
      selectedOption: "",
      x: [],
      score: 0,
      time: {},
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    const { Questions } = this.props;
    this.setState({
      ...Questions[0],
    });
    this.startTimer();
  }

  formSubmit(event) {
    this.checkAnswer();
    event.preventDefault();
    this.state.x.push(
      this.state.quest,
      this.state.selectedOption,
      this.state.answer,
      this.state.score
    );
    console.log(this.state.x);
  }

  checkAnswer() {
    console.log(this.state.answer, this.state.selectedOption);
    if (this.state.answer === this.state.selectedOption) {
      this.setState(
        {
          score: this.state.score + 10,
        },
        () => {
          console.log(this.state.score);
        }
      );
    }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  handleNext(page) {
    const { Questions } = this.props;
    console.log("was here");
    this.setState({
      ...Questions[page],
      page,
      selectedOption: "",
    });
  }

  startTimer() {
    const countDownTime = Date.now() + 60000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            // alert("time uo")
          }
        );
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
          },
        });
      }
    }, 1000);
  }

  render() {
    const { Questions } = this.props;
    const { quest, options, page, score, time } = this.state;
    console.log(this.state);
    if (page === Questions.length) {
      return (
        <div>
          <h1>your total score is {score}%</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {time.minutes === 0 && time.seconds === 0 ? (
              <h1>Time's up your score is {score}%</h1>
            ) : (
              <div>
                <h3>
                  Time Remaining: {time.minutes}:
                  {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                </h3>
                <h2>
                  {page + 1}. {quest}
                </h2>

                <form>
                  {Object.keys(options).map((key) => (
                    <div className="quest-label" key={key}>
                      <label>
                        {" "}
                        <input
                          type="radio"
                          name={key}
                          value={key}
                          checked={this.state.selectedOption === key}
                          onChange={this.handleOptionChange}
                        />
                        {options[key]}
                      </label>
                    </div>
                  ))}
                  <div className="btn-div">
                    {/* <button type="submit">submit</button> */}
                    <button
                      onClick={(event) => {
                        this.formSubmit(event);
                        this.handleNext(page + 1);
                      }}>
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="next-div"></div>
        </div>
      );
    }
  }
}

export default Onequestion;
