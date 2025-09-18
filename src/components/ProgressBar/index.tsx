import { Container, Filler } from "./styles";

interface ProgressBarProps {
  value: number; // valor de 0 a 100
  color?: string; // cor opcional
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color = '#5649E6' }) => {
  return (
    <Container>
      <Filler value={value} color={color} />
    </Container>
  );
};

export default ProgressBar;