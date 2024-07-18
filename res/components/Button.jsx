
const Button = () => {
  return (
    <div className="Btn">
      <h1 className="text">Component-1 [Button] </h1>
      <button onClick={() => window.alert("Button Clicked !")}>
        Click Me!
      </button>
    </div>
  );
};

export default Button;
