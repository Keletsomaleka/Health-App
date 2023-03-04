import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider  } from 'react-redux'
import { Container } from 'react-bootstrap'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProgramScreen from "./screens/ProgramScreen"
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TestimonialsScreen from "./screens/TestimonialsScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
 
    <Router>

        <main>
          <Header />
          <Container>
            <Routes>

                <Route path="/" element={<HomeScreen />} exact />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/testimonials' element={<TestimonialsScreen />} />
                <Route path='/about' element={<AboutScreen />} />
                <Route path='/program/:id' element={<ProgramScreen />} />
                <Route path='/contact/' element={<ContactScreen />} />

            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
