import "./NavigationBar.scss";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Styling Libraries
import { LinearGradient } from 'react-text-gradients'

const NavigationBar = () => {
  return (
    <Navbar id="navigationBar" fixed="top">
      <Container>
        <Navbar.Brand>
          <LinearGradient gradient={['to left', 'darkcyan ,black']}>
            Dev Portfolio
          </LinearGradient>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;