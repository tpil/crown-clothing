import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
    <input className="form-input" {...inputOptions} />
      {//if label exists render
        label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )} 
    </div>
  );
};

export default FormInput;
