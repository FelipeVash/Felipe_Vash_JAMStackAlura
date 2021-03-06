/* eslint-disable linebreak-style */
import React from 'react';
import { Site } from '../src/components/commons/Site';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import { Text } from '../src/components/foundation/Text';
import Conteudo from '../src/components/commons/Projetos';
import Sobre from '../src/components/commons/Sobre';
import Footer from '../src/components/commons/Footer';
import FormCadastro from '../src/components/patterns/FormCadastro';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [conteudo, setConteudo] = React.useState('home');
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Site>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalState(false)}
      >
        {(propsDoModal) => (
          <FormCadastro
            propsDoModal={propsDoModal}
            onClose={() => setModalState(false)}
          />
        )}
      </Modal>
      <Capa />
      <Menu>
        {[
          {
            name: 'HOME', function: setConteudo, modo: 'home',
          },
          {
            name: 'SOBRE MIM', function: setConteudo, modo: 'sobre',
          },
          {
            name: 'CONTATO', function: setModalState, modo: 'true',
          },
        ].map((link) => (
          <li key={link.name}>
            <Text variant="smallestException" tag="button" onClick={() => { link.function(link.modo); }}>
              {link.name}
            </Text>
          </li>
        ))}
      </Menu>
      {conteudo === 'home' && <Conteudo />}
      {conteudo === 'sobre' && <Sobre />}
      <Footer />
    </Site>
  );
}
