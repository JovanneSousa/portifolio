import { colors } from '../../styles'
import { backendStacks, frontendStacks, toolsStacks, type Stack } from '../../Data/StacksData'
import ProgressBar from '../ProgressBar'
import { CardSection } from './styles'

interface CardProps {
  type: 'Frontend' | 'Backend' | 'Database & Tools'
}

const Card: React.FC<CardProps> = ({ type }) => {
  const getColor = () => {
    switch (type) {
      case 'Frontend':
        return colors.gradientOne
      case 'Backend':
        return colors.gradientOne
      case 'Database & Tools':
        return colors.gradientOne
      default:
        return colors.gradientOne
    }
  }

  const stacks: Stack[] =
    type === 'Frontend'
      ? frontendStacks
      : type === 'Backend'
      ? backendStacks
      : toolsStacks;

  return (
    <CardSection className='shadow' type={type}>
        <h3>{type}</h3>
      {stacks.map((stack) => (
        <div className="stack" key={stack.name}>
          <div className="title-bar">
            <h4>{stack.name}</h4>
            <p className='porcent'>{stack.value}%</p>
          </div>
          <ProgressBar value={stack.value} color={getColor()} />
        </div>
      ))}
    </CardSection>
  )
}

export default Card
