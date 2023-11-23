import styled from "@emotion/styled";

export const Fruits = styled.div`
  .fruit-images {
    overflow: hidden;
  }

  //Animations//

  @keyframes tomato {
    0% {
      transform: translateY(0px) rotate(0deg);
    }

    25% {
      transform: translateY(-100px) rotate(3deg);
    }

    50% {
      transform: translateY(4px) rotate(0deg);
    }

    75% {
      transform: translateY(4px) rotate(-3deg);
    }

    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }

  //Images//

  img.fruits {
    position: absolute;
  }

  img.hide,
  img.cucumber,
  img.cabbage2,
  img.blueberry{
    display: none;
  }

  img.tomato {
    top: 30%;
    left: -12%;
    max-width: 120px;
    transform: scaleX(-1);
  }

  img.tomato2 {
    left: 45%;
    bottom: 5%;
    z-index: 0;
    max-width: 60px;
    filter: blur(1rem);
  }

  img.carrots {
    top: 40%;
    right: 10%;
    opacity: 0.8;
    width: 80px;
    rotate: 170deg;
    filter: blur(0.8rem);
  }

  img.cabbage {
    bottom: -15%;
    left: -50%;
    max-width: 400px;
    filter: blur(4rem);
  }

  img.water {
    right: 4.5%;
    bottom: -5%;
    z-index: 5;
    rotate: -30deg;
    max-width: 130px;
    transform: scaleX(-1);
  }

  @media (min-width: 450px) {
    img.tomato {
      top: 10%;
      left: -12%;
    }
  }

  @media (min-width: 620px) {
    img.tomato {
      top: 10%;
      left: -1%;
    }
  }

  @media (min-width: 768px) {
    img.hide{
      display: unset;
    }
    img.tomato {
      top: 5%;
      left: 2%;
      max-width: 100px;
    }

    img.water {
      right: 3%;
      bottom: 12%;
      max-width: 220px;
    }

    img.carrots {
      top: 25%;
      right: 45%;
      filter: blur(0.4rem);
    }

    img.cabbage {
      left: -5%;
    }

    img.grapes {
      top: 0;
      right: 6%;
      width: 300px;
      rotate: 30deg;
      filter: blur(3rem);
    }
  }

  @media (min-width: 951px) {
    img.tomato {
      max-width: 160px;
    }

    img.tomato2 {
      left: 45%;
      bottom: 5%;
      z-index: 5;
      max-width: 60px;
      filter: blur(1rem);
    }

    img.cabbage {
      left: -5%;
    }
  }

  @media (min-width: 1100px) {
    img.cucumber,
    img.cabbage2,
    img.blueberry {
      display: unset;
    }

    img.cabbage2 {
      left: 2%;
      bottom: -60%;
      z-index: 0;
      max-width: 180px;
    }

    img.cucumber {
      right: 2%;
      bottom: -60%;
      z-index: 0;
      transform: scaleX(-1);
      max-width: 200px;
    }

    img.blueberry {
      left: 75%;
      bottom: -25%;
      transform: scaleX(-1);
      max-width: 80px;
    }
  }

  @media (min-width: 1200px) {
    img.tomato {
      top: 15%;
    }

    img.cabbage {
      left: -5%;
    }
  }
`;
