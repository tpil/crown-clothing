//import "./form-input.styles.scss";
import {
  FormGroup,
  FormInputLabel,
  FormInputItem,
  FormInputErrorMsg,
} from "./form-input.styles";

const FormInput = ({ label, inputOptions, error }) => {
  return (
    <FormGroup>
      <FormInputItem
        hasError ={error}
        {...inputOptions}
      />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
      {error && <FormInputErrorMsg>{error}</FormInputErrorMsg>}
    </FormGroup>
  );
};

export default FormInput;
