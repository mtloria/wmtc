import * as React from 'react';
import NavBar from './components/navbar';
import { StaticImage } from 'gatsby-plugin-image';

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
        src='../images/brady-track-2.jpeg'
        alt='Background Image' 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          opacity: opacity,
          zIndex: -1 
        }} 
      />
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Working Man's Track Club</h1>
      </div>
      <div style={{ height: '100vh', padding: '20px', marginTop: '50vh' }} id="about-section">
        <h2>About the Team</h2>
        <p>Insert blurb about the club here.</p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Running | WMTC</title>
