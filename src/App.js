
import {Container, Content, Row} from './styles'
import Input from './components/Input'
import Button, { EmptyButton } from './components/Button'
import { useState } from 'react'

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  }

  const handleClearNumber = () => {
    setCurrentNumber('');
    setPreviousNumber('0')
  }

  const handleOperation = (operation) => {

    setOperation(operation);
    setPreviousNumber(String(currentNumber));
    setCurrentNumber('');
  }

  const handleResult = () => {
    
    switch (operation) {
      case '+': setCurrentNumber(String( (Number(previousNumber) + Number(currentNumber)).toFixed(2)));
      break;
      case '-': setCurrentNumber(String( (Number(previousNumber) - Number(currentNumber)).toFixed(2)));
      break;
      case 'x': setCurrentNumber(String( (Number(previousNumber) * Number(currentNumber)).toFixed(2)));
      break;
      case '/': setCurrentNumber(String( (Number(previousNumber) / Number(currentNumber)).toFixed(2)));
      break;
      default: 
    }
    setPreviousNumber('0');

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <EmptyButton></EmptyButton> 
          <EmptyButton></EmptyButton> 
          <EmptyButton></EmptyButton> 
          <Button label="CE" onClick={() => handleClearNumber()}></Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="/" onClick={() => handleOperation('/')}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="x" onClick={() => handleOperation('x')}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="-" onClick={() => handleOperation('-')}></Button>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}></Button>
          <Button label="." onClick={() => handleAddNumber(".")}></Button>
          <Button label="=" onClick={() => handleResult()}></Button>
          <Button label="+" onClick={() => handleOperation('+')}></Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
