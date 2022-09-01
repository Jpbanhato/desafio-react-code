import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="form-group-contact right">
        <button
          style={{
            background: props.color,
          }}
          className="button-component primary"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default Button;
