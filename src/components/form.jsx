import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          props.handleSubmitSend(event);
        }}
      >
        <input
          onChange={(event) => {
            props.handleChangeSend(event);
          }}
          type="text"
          value={props.Activity}
        />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
