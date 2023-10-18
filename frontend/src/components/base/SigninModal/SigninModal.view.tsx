import React from 'react';
import { SigninModalProps } from './SigninModal.props';
import { Container } from './SigninModal.style';
import Signin from '../Signin';
import Button from '../Button';
import Modal from '../Modal';

const SigninModal = (props: SigninModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Button text="Sign in" variant="primary" onClick={toggleModal} />
      <Modal
        title={"This is my modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Signin />
      </Modal>
    </Container>
  );
};

export default React.memo(SigninModal);
