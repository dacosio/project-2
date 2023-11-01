import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CropDetailProps } from "./CropDetail.props";
import {
  Container,
  DescriptionContainer,
  DescriptionLeftContainer,
  DescriptionRightContainer,
  TitleContainer,
  TitleLeftContainer,
  TitleRightContainer,
} from "./CropDetail.style";
import Typography from "../../base/Typography";
import Button from "../../base/Button";
import { useTheme } from "../../../utils/Theme";
import { Hidden, Visible } from "react-grid-system";
import { Delete, Favorite } from "../../base/SVG";
import CircleProgress from "./../../base/CircleProgress";
import CropInformation from "../CropInformation";

const CropDetail = (props: CropDetailProps): JSX.Element => {
  const { crop, handlePlant, handleFavorite, handleOnDelete } = props;

  const theme = useTheme();

  const getDate = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const addDays = (date: Date, days: number) => {
    const tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate() + days);
    return tempDate;
  };

  const getDays = (previousDate: Date, nextDate: Date) => {
    const milliseconds = Math.abs(nextDate.getTime() - previousDate.getTime());
    const days = Math.ceil(milliseconds / (24 * 60 * 60 * 1000));
    return days;
  };

  const dateToday = new Date();
  const datePlanted = new Date(crop.datePlanted);
  const dateEstimated = addDays(datePlanted, crop.growthDuration.max);

  return (
    <Container>
      <div>
        <TitleContainer>
          <TitleLeftContainer>
            {crop.isPlanted ? (
              <Typography
                variant="small"
                weight="700"
                style={{ color: theme.btn.color.token }}
              >
                PLANTED
              </Typography>
            ) : (
              <Typography
                variant="small"
                weight="700"
                style={{ color: theme.btn.color.tokenHover }}
              >
                TO PLANT
              </Typography>
            )}
            <Typography variant="title3">{crop.cropName}</Typography>
          </TitleLeftContainer>
          <TitleRightContainer>
            <Hidden xs sm md lg>
              {crop.isPlanted ? (
                crop.isFavorite ? (
                  <Button
                    variant="outline"
                    iconPosition="before"
                    icon={<Favorite fill={theme.btn.color.primary} />}
                    text="Unfavorite"
                    onClick={() => handleFavorite(crop._id, false)}
                  />
                ) : (
                  <Button
                    variant="outline"
                    iconPosition="before"
                    icon={<Favorite fill={theme.btn.color.primary} />}
                    text="Favorite"
                    onClick={() => handleFavorite(crop._id, true)}
                  />
                )
              ) : (
                <Button
                  text="Plant Now"
                  onClick={() => handlePlant(crop._id)}
                />
              )}
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Delete fill={theme.btn.color.primary} />}
                text="Delete"
                onClick={() => handleOnDelete(crop._id)}
              />
            </Hidden>
            <Visible xs sm md lg>
              {crop.isPlanted ? (
                crop.isFavorite ? (
                  <Button
                    variant="outline"
                    iconPosition="before"
                    icon={<Favorite fill={theme.btn.color.primary} />}
                    onClick={() => handleFavorite(crop._id, false)}
                  />
                ) : (
                  <Button
                    variant="outline"
                    iconPosition="before"
                    icon={<Favorite fill={theme.btn.color.primary} />}
                    onClick={() => handleFavorite(crop._id, true)}
                  />
                )
              ) : (
                <Button
                  text="Plant Now"
                  onClick={() => handlePlant(crop._id)}
                />
              )}
              <Button
                variant="outline"
                iconPosition="before"
                icon={<Delete fill={theme.btn.color.primary} />}
                onClick={() => handleOnDelete(crop._id)}
              />
            </Visible>
          </TitleRightContainer>
        </TitleContainer>
      </div>
      <div>
        {crop.isPlanted && (
          <DescriptionContainer>
            <DescriptionLeftContainer>
              <div>
                <Typography variant="body" weight="700">
                  Estimated Harvest
                </Typography>
                <Typography variant="body">{getDate(dateEstimated)}</Typography>
              </div>
              <div>
                <Typography variant="body" weight="700">
                  Date Planted
                </Typography>
                <Typography variant="body">{getDate(datePlanted)}</Typography>
              </div>
              <div>
                <Typography variant="body" weight="700">
                  Estimated Yield
                </Typography>
                <Typography variant="body">{crop.estimatedYield}</Typography>
              </div>
            </DescriptionLeftContainer>
            <DescriptionRightContainer>
              <Hidden xs sm md lg>
                <CircleProgress
                  value={
                    crop.growthDuration.max - getDays(dateToday, dateEstimated)
                  }
                  maxValue={crop.growthDuration.max}
                  size="desktop"
                  title={getDays(dateToday, dateEstimated).toString()}
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
        )}
        <CropInformation
          temperature={`${crop.idealTemperature.celcius.min} - ${crop.idealTemperature.celcius.max}`}
          humidity={`${crop.humidity.min} - ${crop.humidity.max}`}
          growthDuration={`${crop.growthDuration.min} - ${crop.growthDuration.max}`}
          ph={`${crop.soilPh.min} - ${crop.soilPh.max}`}
          nitrogen={crop.soilN.toString()}
          phosphorus={crop.soilP.toString()}
          potassium={crop.soilK.toString()}
          suggestions={crop.tools}
          tips={crop.growingTips}
        />
      </div>
    </Container>
  );
};

export default React.memo(CropDetail);
