import styled from "@emotion/styled";

export const Fruits = styled.div`
  .fruit-images {
    overflow: hidden;
  }

  //Animations//

  @keyframes tomato {
    0% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }

    25% {
      transform: scaleX(-1) scale(1.03) translateY(-15px) rotate(3deg);
    }

    50% {
      transform: scaleX(-1) scale(1.06) translateY(0px) rotate(0deg);
    }

    75% {
      transform: scaleX(-1) scale(1) translateY(15px) rotate(-3deg);
    }

    100% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }
  }

  @keyframes tomato2 {
    0% {
      transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
      filter: blur(1rem);
    }

    35% {
      transform: scale(.8) translateX(5px) translateY(7px) rotate(-3deg);
      filter: blur(1.1rem);
    }

    75% {
      transform: scale(.9) translateX(-3px) translateY(-5px) rotate(3deg);
      filter: blur(1.4rem);
    }

    100% {
      transform: scale(1) translateX(0px) scale(1) translateY(0px) rotate(0deg);
      filter: blur(1rem);
    }
  }


  @keyframes water {
    0% {
      transform: scaleX(-1) translateX(0px) translateY(0px) rotate(0deg);
    }

    25% {
      transform: scaleX(-1) translateX(0px) translateY(-15px) rotate(-3deg);
    }

    50% {
      transform: scaleX(-1) translateX(0px) translateY(0px) rotate(0deg);
    }

    75% {
      transform: scaleX(-1) translateX(0px) translateY(15px) rotate(3deg);
    }

    100% {
      transform: scaleX(-1) translateX(0px) scale(1) translateY(0px) rotate(0deg);
    }
  }



  @keyframes cabbage {
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      filter: blur(2rem);
    }

    35% {
      transform: translateX(-40px) translateY(-15px) rotate(-3deg);
      filter: blur(4rem);
    }

    75% {
      transform: translateX(0px) translateY(15px) rotate(3deg);
      filter: blur(4rem);
    }

    100% {
      transform: translateX(0px) scale(1) translateY(0px) rotate(0deg);
      filter: blur(2rem);
    }
  }

  @keyframes carrots {
    0% {
      transform: scale(.8) translateX(0px) translateY(0px) rotate(0deg);
      filter: blur(0.8rem);
    }

    35% {
      transform: scale(.9) translateX(-3px) translateY(-3px) rotate(-3deg);
      filter: blur(0.6rem);
    }

    75% {
      transform: scale(1) translateX(1px) translateY(1px) rotate(3deg);
      filter: blur(0.4rem);
    }

    100% {
      transform: scale(.9) translateX(0px) scale(1) translateY(0px) rotate(0deg);
      filter: blur(0.8rem);
    }
  }

  @keyframes grapes {
    0% {
      transform: scale(.8) translateX(0px) translateY(0px) rotate(0deg);
      filter: blur(2rem);
    }

    35% {
      transform: scale(.9) translateX(-3px) translateY(-3px) rotate(-3deg);
      filter: blur(4rem);
    }

    35% {
      transform: scale(.9) translateX(-3px) translateY(-3px) rotate(-3deg);
      filter: blur(6rem);
    }

    75% {
      transform: scale(1) translateX(1px) translateY(1px) rotate(3deg);
      filter: blur(4.3rem);
    }

    100% {
      transform: scale(.9) translateX(0px) scale(1) translateY(0px) rotate(0deg);
      filter: blur(2rem);
    }
  }

  @keyframes blueberry {
    0% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }

    25% {
      transform: scaleX(-1) scale(1.01) translateY(7px) rotate(6deg);
    }

    75% {
      transform: scaleX(-1) scale(1) translateY(-3px) rotate(-2deg);
    }

    100% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }
  }

  @keyframes cabbage2 {
    0% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }

    25% {
      transform: scaleX(-1) scale(1.01) translateY(7px) rotate(90deg);
    }

    75% {
      transform: scaleX(-1) scale(1) translateY(-3px) rotate(180deg);
    }

    100% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(360deg);
    }
  }

  @keyframes cucumber {
    0% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }

    25% {
      transform: scaleX(-1) scale(1.01) translateY(7px) rotate(6deg);
    }

    75% {
      transform: scaleX(-1) scale(1) translateY(-3px) rotate(-2deg);
    }

    100% {
      transform: scaleX(-1) scale(1) translateY(0px) rotate(0deg);
    }
  }










  //Images//

  img.fruits {
    position: absolute;
    z-index: 0;
  }

  img.hide,
  img.cucumber,
  img.cabbage2,
  img.blueberry {
    display: none;
  }

  img.tomato {
    top: 30%;
    left: -12%;
    max-width: 120px;
    animation: tomato 5s linear infinite;
  }

  img.tomato2 {
    left: 45%;
    bottom: 5%;
    z-index: 0;
    max-width: 60px;
    animation: tomato2 5s linear infinite;
  }

  img.carrots {
    top: 40%;
    right: 10%;
    opacity: 0.8;
    width: 80px;
    rotate: 170deg;
    animation: carrots 5s linear infinite;
  }

  img.cabbage {
    bottom: -15%;
    left: -50%;
    max-width: 400px;
    // filter: blur(4rem);
    animation: cabbage 5s linear infinite;
  }

  img.water {
    right: 4.5%;
    bottom: -5%;
    z-index: 5;
    rotate: -30deg;
    max-width: 130px;
    animation: water 5s linear infinite;
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
    }

    img.cabbage {
      left: -5%;
    }

    img.grapes {
      top: 0;
      right: 6%;
      width: 300px;
      rotate: 30deg;
      animation: grapes 5s linear infinite;
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
    img.grapes,
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
      animation: cabbage2 100s linear infinite;
    }

    img.cucumber {
      right: 2%;
      bottom: -60%;
      z-index: 0;
      max-width: 200px;
      animation: cucumber 5s linear infinite;
    }

    img.blueberry {
      left: 75%;
      bottom: -25%;
      max-width: 80px;
      animation: blueberry 5s linear infinite;
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
