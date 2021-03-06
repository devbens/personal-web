import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Facts from './pages/Facts';

const MainContent = () => {
  return (
    <main className="content float-right">
    {/* <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/experience' component={Experience} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </Switch> */}

      <Home />
      <About />
      <Skills />
      <Facts />
      <Services />
      <Experience />
      <Portfolio />
      <Clients />
      <Contact />
      
    </main>
  )
}

export default MainContent;