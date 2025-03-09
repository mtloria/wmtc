import { getImage } from 'gatsby-plugin-image';


export const getImageByName = (imageData, name) => {
  const imageNode = imageData.allFile.edges.find(({ node }) => node.name === name);
  return imageNode ? getImage(imageNode.node.childImageSharp.gatsbyImageData) : null;
};