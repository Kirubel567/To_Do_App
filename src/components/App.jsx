import React from "react";

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

  function handleSubmit(event) {
    event.preventDefault();

    setToDo((prevValue) => {
      return [activity, ...prevValue];
    });
  }
  console.log(toDo);

  function iterate(toDo) {
    return <li>{toDo}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" />
          <button>
            <span>Add</span>
          </button>
        </form>
      </div>

      <div>
        <ul>{toDo.map(iterate)}</ul>
      </div>
    </div>
  );
}

export default App;
