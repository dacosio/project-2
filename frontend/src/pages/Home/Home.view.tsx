import React, { useState } from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container, Header, About, Details, Contact } from "./Home.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import Button from "components/base/Button";
import headerImg from "images/headerImg.png";
import aboutimg from "images/aboutimg.png";
import axios from "axios";

const HomeView = (props: HomeGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <Container>
      <Header>
        <div className="header-contents">
          <Typography variant="title1" weight="700" textColor="accent">
            Sow and grow your farming goals
          </Typography>
          <div className="input-landing-page">
            <TextField
              value={email}
              onChangeText={setEmail}
              placeholder="user@nomail.com"
              style={{flexGrow: "1"}}
            />
            <Button
              text="Farm with us"
              variant="primary"
              size="md"
              takeFullWidth={false}
            ></Button>
          </div>
        </div>
        <img src={headerImg} alt="" style={{maxHeight:"70vh"}}/>
      </Header>

      <About>
        <div className="about-header">
          <Typography variant="title1" weight="700" textColor="accent"
          style={{position: "relative", top:"100px", zIndex:"1"}}
          >
            Farming<br></br>simplified
          </Typography>
          <img src={aboutimg} alt="" 
          style={{maxHeight:"70vh", position: "relative", bottom:"100px"}}/>
        </div>

        <div className="about-details">
          <Details>
            <Typography variant="title2" weight="700" textColor="n90">
              Get our tailor-made recs
            </Typography>
            <Typography variant="body" weight="400" textColor="n80">
              Know which crops are best for your planting and weather conditions
              and also get a yield estimate
            </Typography>
          </Details>
          <Details>
            <Typography variant="title2" weight="700" textColor="n90">
              Know your crops
            </Typography>
            <Typography variant="body" weight="400" textColor="n80">
              With our crop database, you’ll get the necessary info about your
              crops and resources needed to grow ‘em
            </Typography>
          </Details>
          <Details>
            <Typography variant="title2" weight="700" textColor="n90">
              Be ready, rain or shine
            </Typography>
            <Typography variant="body" weight="400" textColor="n80">
              Always stay ahead of any weather situation with our long-range
              weather forecast
            </Typography>
          </Details>
        </div>
      </About>
      <Contact>
        <Typography variant="title2" weight="700" textColor="n90">
          We’d love to hear from you!
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Juan Dela Cruz"
        />
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="user@nomail.com"
        />
      </Contact>
    </Container>
  );
};

export default HomeView;
