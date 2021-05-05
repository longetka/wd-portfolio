import React from 'react';
import { Logo } from './components/Navbar/Logo';
import logotype from './components/Navbar/cdwd-logo.png';
import { Navbar } from './components/Navbar/Navbar';
import './styles/index.scss';
import { NavList } from './components/Navbar/NavList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Navbar>
          <Logo image={logotype} alt="logotype"/>
          <NavList 
            list={[
                {name: "Главная", href: "/"},
                {name: "Обо мне", href: "/about"},
                {name: "Работы", href: "/works"},
                {name: "Контакты", href: "/contacts"},
              ]}
          />
        </Navbar>
        
      </header>
    </div>
  );
}

export default App;