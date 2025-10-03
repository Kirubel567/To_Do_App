import React from "react";

function ToDo(props) {
  const [erased, setErased] = React.useState(false);
  function handleClick() {
    setErased(!erased);
  }
  return (
    <li
      onClick={
        erased
          ? () => {
              return props.onChecked(props.id);
            }
          : handleClick
      }
      style={erased ? { textDecoration: "line-through" } : null}
    >
      {props.text}
    </li>
  );
}

export default ToDo;
