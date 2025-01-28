
import { Container, Input, Label } from './styles';

type InputTypeProps = 'email' | 'password';

type props = {
  label: string;
  type: InputTypeProps;
  changeText: (e:  React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputComponent({ label, type, changeText }: props) {
  return (
    <Container>
      <Label>{ label }</Label>
      <Input 
        type={type} 
        onChange={changeText}
      />
    </Container>
  );
}