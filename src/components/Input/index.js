import { InputContainer } from "../Input/styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value} />
      </InputContainer>
    );
  }
  
  export default Input;