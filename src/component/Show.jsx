import React, { useState } from "react";

function Show(props) {
  const { question, option, answer } = props;

  const [selected, setSelected] = useState();

  const handleSelect = (i) => {
    if (selected === i && selected === answer) {
      return "select";
    } else if (selected === i && selected !== answer) {
      return "wrong";
    } else if (i === answer) {
      return "select";
    }
  };
  const chkAnswer = (id) => {
    setSelected(id);
    if (id === answer) {
      console.log("answer is correct");
    }
  };

  /* const handleNext = () => {
    if (number > 5) {
      return "disabled";
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      alert("please select an option");
    }
  }; */

  return (
    <div className="card">
      <h2 className="ques">. {question}</h2>
      <div className="option">
        {option.map((list) => (
          <>
            {" "}
            <h4
              onClick={() => chkAnswer(list.id)}
              className={`singleoption ${selected && handleSelect(list.id)}`}
              key={list.id}
            >
              {list.option}
            </h4>
          </>
        ))}
      </div>
    </div>
  );
}

export default Show;
