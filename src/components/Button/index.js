import { ButtonContainer, EmptyButtonContainer } from "./styles";



export const EmptyButton = () => {
  return (
    <EmptyButtonContainer>
      #
    </EmptyButtonContainer>
  );
}

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
export default Button;