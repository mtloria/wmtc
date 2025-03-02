import * as React from 'react';
import NavBar from './components/navbar';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  return (
    <main style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <StaticImage 
        src='../images/brady-track.jpg' 
        alt='Background Image' 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          opacity: 0.8,
          zIndex: -1 
        }} 
      />
      <NavBar />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
