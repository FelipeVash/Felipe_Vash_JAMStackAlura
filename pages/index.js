import React from 'react';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Projetos from '../src/components/commons/Projetos';

export default function Home() {
  return (
    <>
      <Capa />
      <Menu />
      <Projetos />
      <Footer />
    </>
  )
}
