import React from "react";
import "./ChoiceCard.css";

const ChoiceCard = props => (
    <div className="img-container">
      <img onClick ={() => {console.log(props); props.changeState(props.id)}} className="pic" alt={props.name} src={props.image} />
    </div>


);

export default ChoiceCard;
