import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="form-group-contact right">
        <button
          onClick={props.onClick}
          style={{
            background: props.color,
          }}
          className="button-component primary"
        >
          {props.name}
        </button>
      </div>
    </>
  );
}

export default Button;
