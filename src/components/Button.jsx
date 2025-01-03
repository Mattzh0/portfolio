const Button = ({ name, isBeam = false, containerClass, isPing = true }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          {isPing && <span className="btn-ping"></span> }
          { isPing && <span className="btn-ping_dot"></span> }
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;