import React, { useState, useRef } from "react";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  Header,
  HeaderContents,
  About,
  Details,
  AboutDisplay,
  AboutTypography,
  AboutDetails,
  Contact,
  ContactImage,
  Form,
  UserInfo,
  Message,
  ContactForm,
  Hide,
  Column,
  Sacolumn,
} from "./Home.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import Button from "components/base/Button";
import axios from "axios";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import HomeNavigation from "./../../components/layout/HomeNavigation";
import ContactSection from "./../../components/layout/ContactSection";

//Images
import headerImg from "images/headerImg.png";
import aboutimg from "images/aboutimg.png";
import icon1 from "images/icon1.png";
import icon2 from "images/icon2.png";
import icon3 from "images/icon3.png";
import contact from "images/contact.png";
import Footer from "components/layout/Footer";
import { SproutLogo } from "components/base/SVG";
import WeatherCard from "./../../components/base/WeatherCard";
import Search from "./../../components/base/Search";
import LocationSearch from "components/module/LocationSearch";
import { useAppDispatch } from "app/hooks";
import { toggleSignUp } from "features/authModal/authModalSlice";

// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_buhpmve', 'template_caubnyp', form.current, 'XjkLA79uvMpAgWV9B')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

const HomeView = (props: HomeGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <Container>
      {/* <Header>
        <Column sm={4}>One of three columns</Column>
        <Sacolumn sm={4}>One of three columns</Sacolumn>
        <Column sm={4}>One of three columns</Column>
      </Header> */}
      <HomeNavigation />

      <Header justify="center" align="center" style={{ margin: 0 }}>
        <HeaderContents xxl={4} xl={4} lg={6} md={6}>
          <Typography variant="title1" weight="700" textColor="accent">
            Sow and grow your farming goals
          </Typography>

          <div
            className="text"
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}>
            <TextField
              value={email}
              setValue={setEmail}
              placeholder="Type in your email"
              style={{ flexGrow: "1" }}
            />
            <Button
              text="Farm with us"
              variant="primary"
              size="md"
              takeFullWidth={false}
              onClick={() => {
                dispatch(toggleSignUp(true));
              }}
            />
          </div>
        </HeaderContents>
        <HeaderContents xxl={4} xl={4} lg={6} md={6}>
          <Hide sm xs>
            <img src={headerImg} alt="" style={{ maxWidth: "100%" }} />
          </Hide>
        </HeaderContents>
      </Header>

      <About justify="center" align="center">
        <AboutDisplay xxl={5} xl={5} lg={5}>
          <Hide md sm xs>
            <AboutTypography>
              <Typography
                variant="title1"
                weight="700"
                textColor="accent"
                style={{
                  position: "relative",
                  zIndex: "1",
                }}>
                Farming<br></br>simplified
              </Typography>
            </AboutTypography>
            <img src={aboutimg} alt="" />
          </Hide>

          <Visible md sm xs>
            <Typography
              variant="title1"
              weight="700"
              textColor="accent"
              align="center">
              Farming simplified
            </Typography>
          </Visible>
        </AboutDisplay>

        <AboutDetails xxl={5} xl={5} lg={5} md={11}>
          <Details>
            <Hide sm xs>
              <img src={icon1} alt="" />
            </Hide>

            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Get our tailor-made recs
              </Typography>
              <Typography variant="subtitle" weight="400" textColor="n80">
                Know which crops are best for your planting and weather
                conditions and also get a yield estimate
              </Typography>
            </div>
          </Details>

          <Details>
            <Hide sm xs>
              <img src={icon2} alt="" />
            </Hide>
            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Know your crops
              </Typography>
              <Typography variant="subtitle" weight="400" textColor="n80">
                With our crop database, you’ll get the necessary info about your
                crops and resources needed to grow ‘em
              </Typography>
            </div>
          </Details>

          <Details>
            <Hide sm xs>
              <img src={icon3} alt="" />
            </Hide>
            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Be ready, rain or shine
              </Typography>
              <Typography variant="subtitle" weight="400" textColor="n80">
                Always stay ahead of any weather situation with our long-range
                weather forecast
              </Typography>
            </div>
          </Details>
        </AboutDetails>
      </About>
      <ContactSection />

      {/* <Contact align="center">
        <Hide md sm xs>
          <ContactImage
            xxl={6}
            xl={6}
            lg={6}
            style={{
              paddingLeft: "0",
            }}
          >
            <img src={contact} alt="" />
          </ContactImage>
        </Hide>

        <ContactForm xxl={5} xl={5} lg={5}>
          <Hide md sm xs>
            <Typography variant="title2" weight="700" textColor="n0">
              We’d love to hear from you!
            </Typography>
          </Hide>

          <Visible md sm xs>
            <Typography
              variant="title2"
              weight="700"
              textColor="n0"
              align="center"
            >
              We’d love to hear from you!
            </Typography>
          </Visible>

          <Form ref={form} onSubmit={sendEmail}>
            <UserInfo>
              <TextField
                label="Name"
                value={name}
                setValue={setName}
                placeholder="Juan Dela Cruz"
                style={{ flexGrow: "1", flexBasis: "0" }}
              />
              <TextField
                label="Email"
                value={email}
                setValue={setEmail}
                placeholder="user@nomail.com"
                style={{ flexGrow: "1", flexBasis: "0" }}
              />
            </UserInfo>

            <Message>
              <label htmlFor="Comments">
                <Typography variant="title4" weight="700" textColor="n0">
                  Comments
                </Typography>
              </label>
              <textarea
                name="Comments"
                id="Comments"
                placeholder="comments"
                style={{
                  resize: "none",
                }}
              ></textarea>
            </Message>

            <Button
              text="Farm with us"
              variant="tonal"
              size="md"
              takeFullWidth={true}
            ></Button>
          </Form>
        </ContactForm>
      </Contact> */}
      {/* <Footer today=""></Footer> */}
    </Container>
  );
};

export default HomeView;
