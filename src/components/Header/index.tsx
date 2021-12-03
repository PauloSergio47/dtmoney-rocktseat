import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransationModal: () => void;
}

export function Header({ onOpenNewTransationModal }: HeaderProps) {
    return(
        <Container>
         <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransationModal}>
              Nova Transação
          </button>
          </Content>
        </Container>
    );
}