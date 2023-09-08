import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions, error }) => {
  return (
    <div className="group">
      <input className={`${error ? 'error' : ''} form-input`} {...inputOptions} />
      {
        //if label exists render
        label && (
          <label
            className={`${
              inputOptions.value.length ? "shrink" : ''
            } form-input-label`}
          >
            {label}
          </label>
        )
      }
      {error && (
        <span className="form-input-error-msg">{error}</span>
      )}
    </div>
  );
};

export default FormInput;
