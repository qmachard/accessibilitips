import React from 'react';
import * as PropTypes from 'prop-types';

import Layout from '../components/global/Layout';
import Card from "../components/molecules/Card";

const title = "Tips #12";
const link = "/";
const description = (
  <>
    <p>⌨️ On dit tout le temps que la navigation au clavier est importante, c'est vrai !</p>

    <p>🤔 Mais on se demande parfois quel raccourci dois-je associer à telle action ?</p>

    <p>✅ Voici une première liste !</p>

    <p>#accessibilite #a11y #navigationclavier #shortcuts</p>
  </>
);
const image = {
  src: "https://pbs.twimg.com/media/EaDjgfhXkAE5SfF?format=png",
  alt: "Intégrer des sous-titres"
}

const IndexPage = () => (
  <Layout className="index-page" title="Accessibili'Tips" description="Lorem ipsum">
    <div className="container">
      <Card title={title} description={description} link={link} image={image} />
      <Card title={title} description={description} link={link} />
      <Card title={title} description={description} link={link} image={image} />
    </div>
  </Layout>
);

export default IndexPage;
