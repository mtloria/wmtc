import * as React from 'react';
import NavBar from '../components/navbar';
import { StaticImage } from 'gatsby-plugin-image';
import AboutTheTeamPage from './about-the-team';
import { useLocation } from '@reach/router';

const IndexPage = () => {
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  const [opacity, setOpacity] = React.useState(0.8);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const newOpacity = Math.max(0, 0.8 - (scrollTop / maxScroll));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ height: '200vh', position: 'relative' }}>
      <StaticImage 
        src='../images/brady-track-bw.jpeg'
        alt='Background Image' 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '70%', 
          objectFit: 'cover', 
          opacity: opacity,
          zIndex: -1 
        }} 
      />
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Working Man's Track Club</h1>
      </div>
      <div 
        style={{ 
          height: '100vh', 
          padding: '20px', 
          marginTop: '60vh', 
          opacity: 1 - opacity
        }} 
        id="about-section"
      >
        <AboutTheTeamPage />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => {
  const location = useLocation();
  const pipeWMTC = ' | WMTC';
  let title;

  switch (location.pathname) {
    case '/':
      title = 'Running' + pipeWMTC;
      break;
    case '/meet-the-team/':
      title = 'Meet the Team' + pipeWMTC;
      break;
    // Add more cases here for future pages
    default:
      title = 'WMTC';
  }

  React.useEffect(() => {
    document.title = title;
  }, [location.pathname, title]);

  return null;
}
