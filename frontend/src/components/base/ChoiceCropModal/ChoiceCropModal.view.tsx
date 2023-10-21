import React from "react";
import { ChoiceCropModalProps } from "./ChoiceCropModal.props";
import {
  Container,
  ModalBox,
  Description,
  CropInformation,
  Composition,
  CompositionDetails,
  Action,
} from "./ChoiceCropModal.style";

import Typography from "../Typography";
import Button from "../Button";
import Modal from "../Modal";

const ChoiceCropModal = (props: ChoiceCropModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Button text="Plant Info" variant="outline" onClick={toggleModal} />
      <Modal
        title={"This is my modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBack={toggleModal}
      >
        <ModalBox>
          <img src="https://picsum.photos/seed/picsum/605/304" alt="" />

          <Description>
            <Typography
              variant="title3"
              weight="700"
              textColor="n90"
              align="left"
            >
              Tomato
            </Typography>
            <Typography
              variant="body"
              weight="400"
              textColor="n70"
              align="left"
            >
              Small round tomato believed to be an intermediate genetic
              admixture between wild currant-type tomatoes and domesticated
              garden tomatoes. Cherry tomatoes range in size from a thumb tip to
              the size of a golf ball.
            </Typography>
          </Description>

          <Composition>
            <Typography
              variant="title3"
              weight="700"
              textColor="n90"
              align="left"
            >
              Fertilizer Composition
            </Typography>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
              <Typography
                variant="body"
                weight="400"
                textColor="n70"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
              <Typography
                variant="body"
                weight="400"
                textColor="n70"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
              <Typography
                variant="body"
                weight="400"
                textColor="n70"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
              <Typography
                variant="body"
                weight="400"
                textColor="n70"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
          </Composition>

          <Composition>
            <Typography
              variant="title3"
              weight="700"
              textColor="n90"
              align="left"
            >
              You Will Need
            </Typography>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
            <CompositionDetails>
              <Typography
                variant="body"
                weight="700"
                textColor="n90"
                align="left"
              >
                Tomato
              </Typography>
            </CompositionDetails>
          </Composition>
          <Action>
            <Button text="Plant later" variant="outline" takeFullWidth={true} />
            <Button text="Plant Now" variant="primary" takeFullWidth={true} />
          </Action>
        </ModalBox>
      </Modal>
    </Container>
  );
};

export default React.memo(ChoiceCropModal);
