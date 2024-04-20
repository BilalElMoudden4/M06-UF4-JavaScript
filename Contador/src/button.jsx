// Button.js
function Button({ text, onClick, esClick }) {
    const btnClass = esClick ? "btn btn-success" : "btn btn-danger";
    return (
      <button className={`${btnClass} mx-2`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
  