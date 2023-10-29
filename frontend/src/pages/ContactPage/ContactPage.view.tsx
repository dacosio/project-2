import React from 'react';
import { ContactPageGeneratedProps } from './ContactPage.props';
import { Container } from './ContactPage.style';
import ContactSection from '../../components/layout/ContactSection';

const ContactPageView = (props: ContactPageGeneratedProps) => {
  return <Container> <ContactSection /> </Container>;
};

export default ContactPageView;
