import "./NavigationBar.scss";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar id="navigationBar" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;