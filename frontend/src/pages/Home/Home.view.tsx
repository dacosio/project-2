import React, { useState } from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container, Header, About, Details, Contact } from "./Home.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import Button from "components/base/Button";
import axios from "axios";

const HomeView = (props: HomeGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <Container>
      <Header>
        <Typography variant="title1" weight="700" textColor="accent">
          Sow and grow your farming goals
        </Typography>
        <div className="header-text">
          <TextField
            value={email}
            onChangeText={setEmail}
            placeholder="user@nomail.com"
          />
          <Button
            text="Farm with us"
            variant="primary"
            size="md"
            takeFullWidth={false}
          ></Button>
          <img src="{headerImg}" alt="" />
        </div>
        
      </Header>

      <About>
        <Typography variant="title1" weight="700" textColor="accent">
          Farming simplified
        </Typography>
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
