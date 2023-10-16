import React from "react";
import { CropDetailProps } from "./CropDetail.props";
import {
  Container,
  DescriptionContainer,
  DescriptionLeftContainer,
  DescriptionRightContainer,
  FertilizerContainer,
  FertilizerFooterContainer,
  FertilizerHeaderContainer,
  InformationContainer,
  InformationFooterContainer,
  InformationHeaderContainer,
  SuggestionContainer,
  SuggestionFooterContainer,
  SuggestionHeaderContainer,
  TipCircleContainer,
  TipContainer,
  TipFooterContainer,
  TipHeaderContainer,
  TitleContainer,
  TitleLeftContainer,
  TitleRightContainer,
} from "./CropDetail.style";
import Typography from "../../base/Typography";
import Button from "../../base/Button";
import { useTheme } from "../../../utils/Theme";
import { Hidden, Visible } from "react-grid-system";
import { Delete, Favorite } from "../../base/SVG";
import CircleProgress from "../../base/CircleProgress";

export const CropDetail = (props: CropDetailProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      <div>
        <TitleContainer>
          <TitleLeftContainer>
            <Typography
              variant="small"
              weight="700"
              style={{ color: theme.btn.color.token }}
            >
              PLANTED
            </Typography>
            <Typography variant="title3">Tomato</Typography>
          </TitleLeftContainer>
          <TitleRightContainer>
            <Hidden xs sm md lg>
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Favorite fill={theme.btn.color.primary} />}
                text="Favorite"
              />
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Delete fill={theme.btn.color.primary} />}
                text="Delete"
              />
            </Hidden>
            <Visible xs sm md lg>
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Favorite fill={theme.btn.color.primary} />}
              />
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Delete fill={theme.btn.color.primary} />}
              />
            </Visible>
          </TitleRightContainer>
        </TitleContainer>
      </div>
      <div>
        <DescriptionContainer>
          <DescriptionLeftContainer>
            <div>
              <Typography variant="body" weight="700">
                Estimated Harvest
              </Typography>
              <Typography variant="body">February 9, 2023</Typography>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Date Planted
              </Typography>
              <Typography variant="body">January 1, 2023</Typography>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Estimated Yield
              </Typography>
              <Typography variant="body">XX</Typography>
            </div>
          </DescriptionLeftContainer>
          <DescriptionRightContainer>
            <Hidden xs sm md lg>
              <CircleProgress
                value={40}
                maxValue={55}
                size="desktop"
                title="40"
                subtitle="days"
                id="progress"
                style={{ height: 145, width: 145 }}
              />
            </Hidden>
            <Visible xs sm md lg>
              <CircleProgress
                value={40}
                maxValue={55}
                size="mobile"
                title="40"
                subtitle="days"
                id="progress"
                style={{ height: 96, width: 96 }}
              />
            </Visible>
            <Hidden xs sm md lg>
              <Typography variant="body" align="center">
                Before Estimated Harvest
              </Typography>
            </Hidden>
            <Visible xs sm md lg>
              <Typography variant="body">
                Before
                <br />
                Estimated
                <br />
                Harvest
              </Typography>
            </Visible>
          </DescriptionRightContainer>
        </DescriptionContainer>
        <InformationContainer>
          <InformationHeaderContainer>
            <Typography variant="title3">Crop Information</Typography>
          </InformationHeaderContainer>
          <InformationFooterContainer>
            <Hidden xs sm md lg>
              {/* <div>
        <CropCondition

          variant="temperature"
          description="0.0 - 0.0°C"
        />
      </div>
      <div>
        <CropCondition
          variant="humidity"
          description="00 - 00%"
        />
      </div>
      <div>
        <CropCondition
          variant="duration"
          description="0 - 0 months"
        />
      </div> */}
            </Hidden>
            <Visible xs sm md lg>
              <div>
                <Typography variant="body" weight="700">
                  Ideal Temperature
                </Typography>
                <div>
                  <Typography variant="body">0.0 - 0.0°C</Typography>
                  <Typography variant="body">0.0 - 0.0°F</Typography>
                </div>
              </div>
              <div>
                <Typography variant="body" weight="700">
                  Ideal Humidity
                </Typography>
                <div>
                  <Typography variant="body">00 - 00%</Typography>
                </div>
              </div>
              <div>
                <Typography variant="body" weight="700">
                  Growth Duration
                </Typography>
                <div>
                  <Typography variant="body">0 - 0 months</Typography>
                </div>
              </div>
            </Visible>
          </InformationFooterContainer>
        </InformationContainer>
        <FertilizerContainer>
          <FertilizerHeaderContainer>
            <Typography variant="title3">Fertilizer Composition</Typography>
          </FertilizerHeaderContainer>
          <FertilizerFooterContainer>
            <div>
              <Typography variant="body" weight="700">
                pH Level
              </Typography>
              <div>
                <Typography variant="body">0.0 - 0.0</Typography>
              </div>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Nitrogen (N)
              </Typography>
              <div>
                <Typography variant="body">0</Typography>
              </div>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Phosphorus (P)
              </Typography>
              <div>
                <Typography variant="body">0</Typography>
              </div>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Potassium (K)
              </Typography>
              <div>
                <Typography variant="body">0</Typography>
              </div>
            </div>
          </FertilizerFooterContainer>
        </FertilizerContainer>
        <SuggestionContainer>
          <SuggestionHeaderContainer>
            <Typography variant="title3">You Will Need</Typography>
          </SuggestionHeaderContainer>
          <SuggestionFooterContainer>
            <div>
              <Typography variant="body" weight="700">
                Organic Compost
              </Typography>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Organic Compost
              </Typography>
            </div>
          </SuggestionFooterContainer>
        </SuggestionContainer>
        <TipContainer>
          <TipHeaderContainer>
            <Typography variant="title3">Growing Tips</Typography>
          </TipHeaderContainer>
          <TipFooterContainer>
            <div>
              <TipCircleContainer>
                <Typography variant="title5" weight="700">
                  1
                </Typography>
              </TipCircleContainer>
              <Typography variant="body">
                Grow this produce in the ground, in raised beds, or opt for
                container gardening.
              </Typography>
            </div>
            <div>
              <TipCircleContainer>
                <Typography variant="title5" weight="700">
                  2
                </Typography>
              </TipCircleContainer>
              <Typography variant="body">
                Choose a spot with at least six to eight hours of sun each day.
              </Typography>
            </div>
            <div>
              <TipCircleContainer>
                <Typography variant="title5" weight="700">
                  3
                </Typography>
              </TipCircleContainer>
              <Typography variant="body">
                Choose a spot with at least six to eight hours of sun each day.
              </Typography>
            </div>
          </TipFooterContainer>
        </TipContainer>
      </div>
    </Container>
  );
};
