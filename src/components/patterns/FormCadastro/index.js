/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import emailjs, { init } from 'emailjs-com';
import { CloseO } from '@styled-icons/evil/CloseO';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import messageAnimation from './animations/menssage.json';
import { Grid } from '../../layout/Grid';
import { Box } from '../../layout/Box';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { Text } from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const CloseButton = styled(CloseO)`
  display: flex;
  color: #FFFFFF;
  width:50px;
  height:50px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = (
    userInfo.email.length === 0
    || userInfo.name.length === 0
    || userInfo.message.length === 0
  );

  function sendEmail(event) {
    init('user_Sseu4Y6OcUx07gs4I9jhK');
    emailjs.sendForm('gmail', 'contact_dev', event.target, 'user_Sseu4Y6OcUx07gs4I9jhK')
      .then((result) => {
        setSubmissionStatus(formStates.DONE);
        console.log(result.text);
      }, (error) => {
        setSubmissionStatus(formStates.ERROR);
        console.error(error);
      });
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      sendEmail(event);
      setIsFormSubmited(true);
      setTimeout(() => {
        setUserInfo({
          name: '',
          email: '',
          message: '',
        });
        setIsFormSubmited(false);
      }, 5000);
    }}
    >
      <Lottie
        width="100%"
        height="250px"
        className="lottie-container basic"
        config={{ animationData: messageAnimation, loop: true, autoplay: true }}
      />
      <Text
        variant="title"
        tag="h1"
        color="primary.main"
      >
        Gostaria de fazer contato?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="primary.main"
        marginBottom="32px"
      >
        Deixe seu nome, e-mail e sua mensagem, por gentileza. =)
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange} // capturadores de ação
          tag="input"
        />
      </div>

      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange} // capturadores de ação
          tag="input"
        />
      </div>

      <div>
        <TextField
          placeholder="Mensagem"
          name="message"
          value={userInfo.message}
          onChange={handleChange} // capturadores de ação
          tag="textarea"
          height="200px"
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        ENVIAR
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          flexDirection="column"
          marginTop="20px"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Lottie
            width="50px"
            height="50px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <Text
            tag="span"
            variant="smallestException"
            color="primary.main"
            textAlign="center"
            marginTop="10px"
          >
            Deu tudo certo! =)
          </Text>
        </Box>
      )}
      ;

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          flexDirection="column"
          marginTop="20px"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Lottie
            width="50px"
            height="50px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <Text
            tag="span"
            variant="smallestException"
            color="primary.main"
            textAlign="center"
            marginTop="10px"
          >
            Não foi possível enviar a mensagem, por gentileza, tente novamente.
          </Text>
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ onClose, propsDoModal }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        display="flex"
        justifyContent="center"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 8, xl: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '40px',
          }}
          backgroundColor="#09090BE6"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <CloseButton
            onClick={() => {
              onClose();
            }}
          />
          <FormContent propsDoModal={propsDoModal} />
        </Box>

      </Grid.Col>
    </Grid.Row>
  );
}
