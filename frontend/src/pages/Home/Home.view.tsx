import React, { useState } from "react";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  Header,
  HeaderContents,
  About,
  Details,
  Contact,
  Hide,
  Column,
  Sacolumn,
} from "./Home.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import Button from "components/base/Button";
import axios from "axios";
import { Col, Row, Visible, Hidden } from "react-grid-system";

//Images
import headerImg from "images/headerImg.png";
import aboutimg from "images/aboutimg.png";
import icon1 from "images/icon1.png";
import icon2 from "images/icon2.png";
import icon3 from "images/icon3.png";
import contact from "images/contact.png";
import Footer from "components/layout/Footer";

const HomeView = (props: HomeGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <Container>
      {/* <Header>
        <Column sm={4}>One of three columns</Column>
        <Sacolumn sm={4}>One of three columns</Sacolumn>
        <Column sm={4}>One of three columns</Column>
      </Header> */}

      <Header justify="center" align="center">
        <HeaderContents xxl={4} xl={4} lg={6} md={6}>
          <Typography variant="title1" weight="700" textColor="accent">
            Sow and grow your farming goals
          </Typography>
          <Row justify="center" align="center">
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={7}
              style={{ paddingRight: "0.25rem" }}
            >
              <TextField
                value={email}
                onChangeText={setEmail}
                placeholder="user@nomail.com"
                style={{ flexGrow: "1" }}
              />
            </Col>
            <Col style={{ paddingLeft: ".25rem" }}>
              <Button
                text="Farm with us"
                variant="primary"
                size="md"
                takeFullWidth={false}
              ></Button>
            </Col>
          </Row>
        </HeaderContents>
        <HeaderContents xxl={4} xl={4} lg={6} md={6}>
          <Hide sm xs>
            <img src={headerImg} alt="" style={{ maxWidth: "100%" }} />
          </Hide>
        </HeaderContents>
      </Header>

      {/* <About>
        <div className="about-header">
          <Typography
            variant="title1"
            weight="700"
            textColor="accent"
            style={{ position: "relative", top: "150px", zIndex: "1" }}
          >
            Farming<br></br>simplified
          </Typography>
          <img
            src={aboutimg}
            alt=""
            style={{
              height: "auto",
              width: "40vw",
              position: "relative",
              bottom: "150px",
            }}
          />
        </div>

        <div className="about-details">
          <Details>
            <img src={icon1} alt="" />

            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Get our tailor-made recs
              </Typography>
              <Typography variant="body" weight="400" textColor="n80">
                Know which crops are best for your planting and weather
                conditions and also get a yield estimate
              </Typography>
            </div>
          </Details>
          <Details>
            <img src={icon2} alt="" />
            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Know your crops
              </Typography>
              <Typography variant="body" weight="400" textColor="n80">
                With our crop database, you’ll get the necessary info about your
                crops and resources needed to grow ‘em
              </Typography>
            </div>
          </Details>
          <Details>
            <img src={icon3} alt="" />
            <div>
              <Typography variant="title2" weight="700" textColor="n90">
                Be ready, rain or shine
              </Typography>
              <Typography variant="body" weight="400" textColor="n80">
                Always stay ahead of any weather situation with our long-range
                weather forecast
              </Typography>
            </div>
          </Details>
        </div>
      </About>
      <Contact>
        <img src={contact} alt="" />
        <div>
          <Typography variant="title2" weight="700" textColor="n0">
            We’d love to hear from you!
          </Typography>
          <div style={{ display: "flex", gap: "1rem" }}>
            <TextField
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Juan Dela Cruz"
              style={{ flexGrow: "1" }}
            />
            <TextField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="user@nomail.com"
              style={{ flexGrow: "1" }}
            />
          </div>
          <TextField
            label="Comments"
            value={email}
            onChangeText={setEmail}
            placeholder="user@nomail.com"
          />
        </div>
      </Contact>
      <Footer today=""></Footer> */}
    </Container>
  );
};

export default HomeView;
