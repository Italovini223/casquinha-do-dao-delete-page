import { ButtonText, Container } from './styles';

type props = {
  title: string;
  click: () => void;
}

export function Button({ title, click}: props) {
  return (
    <Container
      onClick={click}
    >
      <ButtonText>{ title }</ButtonText>
    </Container>
  );
}