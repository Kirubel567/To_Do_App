import React from "react";
import ToDo from "./item";
import InputArea from "./form";

//fisrt get the value when added, you do that by using the onChange event of the input
//the state has to be an array of tto do lists
//using the form, we can submit that, when submiting we use the onSubmit event of the form
function App() {
  const [activity, setActivity] = React.useState("");
  const [toDo, setToDo] = React.useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setActivity(value);
  }
  console.log(activity);

  function isAlnum(str) {
    return /^[a-z0-9 ]+$/i.test(str);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setToDo((prevValue) => {
      if (isAlnum(activity)) {
        return [...prevValue, activity];
      } else {
        return [...prevValue];
      }
    });
    setActivity("");
  }
  console.log(toDo);

  function iterate(toDo, index) {
    return <ToDo text={toDo} onChecked={deleteItem} key={toDo} id={index} />;
  }

  function deleteItem(id) {
    setToDo((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleChangeSend={handleChange}
        handleSubmitSend={handleSubmit}
        Activity={activity}
      />

      <div>
        <ul>{toDo.map(iterate)}</ul>
      </div>
    </div>
  );
}

export default App;
