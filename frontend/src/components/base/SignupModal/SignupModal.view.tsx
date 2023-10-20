import React from 'react';
import { SignupModalProps } from './SignupModal.props';
import { Container } from './SignupModal.style';
import Button from '../Button';
import Modal from '../Modal';
import Signup from '../Signup';

const SignupModal = (props: SignupModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Button text="Sign up" variant="primary" onClick={toggleModal} />
      <Modal
        title={"This is my modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Signup />
      </Modal>
    </Container>
  );
};

export default React.memo(SignupModal);
