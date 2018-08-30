import React, { Component } from "react";
import ChoiceCard from "./components/ChoiceCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import choices from "./choices.json";
import "./App.css";

//const React = require('react');
//const Shuffle = require('react-shuffle');

class App extends Component {
  state = {
    choices,
    // picked: "true",
    count: 0
  };

  changeState = id => {
    console.log(this.state.picked)
    console.log(this.state.count)
    // for (let i=0; i<this.state.choices; i++){
      let newArray = this.state.choices.map((choice) => {
        if (id===choice.id){
          if (choice.picked){
            this.gameOver()
            return choice
          }else{
            choice.picked=true
            this.handleIncrement()
            return choice
          }
        }
        return choice
      })
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
      this.setState({choices:newArray})

    }



  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  gameOver = () => {
    let newArray = this.state.choices.map((choice) => {
      choice.picked=false
      return choice
    })
    this.setState({count:0, choices:newArray})

    alert("You've already chosen that Senator...Game Over!")
  };

  render() {
    return (
      <Wrapper>
        <Title>Choose a Senator</Title>
        <div className="h3">
        <hr />
        <h3 className="h3">Choose all twelve Senators, one at a time, without choosing any Senator twice.</h3>
        <h4 className="h4">Score:{this.state.count}</h4>
        <hr />
        <h4 className ="h4">The board will scramble after each choice</h4>
        <br />
        <hr />
        </div>
        {this.state.choices.map(choice => (
          <ChoiceCard
            id={choice.id}
            key={choice.id}
            name={choice.name}
            image={choice.image}
            changeState={this.changeState}
            pic={"string"}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;
