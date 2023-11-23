import styled from "@emotion/styled";

export const Fruits = styled.div`
  .fruit-images {
    overflow: hidden;
  }

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

  img.fruits {
    display: none;
    position: absolute;
  }
  @media (min-width: 1199px){
    img.fruits {
      display: unset;
    }
    img.tomato {
      top: 15%;
      left: 2%;
      max-width: 160px;
      transform: scaleX(-1);
      // animation: tomato 5s linear infinite;
    }
  
    img.tomato2 {
      left: 45%;
      bottom: 5%;
      z-index: 5;
      max-width: 60px;
      filter: blur(1rem);
      // animation: tomato 5s linear infinite;
    }
  
    img.carrots {
      top: 25%;
      right: 45%;
      width: 80px;
      rotate: 170deg;
      filter: blur(0.4rem);
      // animation: tomato 5s linear infinite;
    }
  
    img.grapes {
      top: 0;
      right: 6%;
      width: 300px;
      rotate: 30deg;
      filter: blur(3rem);
      // animation: tomato 5s linear infinite;
    }
  
    img.blueberry {
      right: 25%;
      bottom: -25%;
      z-index: 0;
      transform: scaleX(-1);
      max-width: 80px;
      filter: blur(0.08rem);
      // animation: tomato 5s linear infinite;
    }
  
    img.cucumber {
      right: 2%;
      bottom: -80%;
      z-index: 0;
      transform: scaleX(-1);
      max-width: 200px;
      // animation: tomato 5s linear infinite;
    }
  
    img.cabbage2 {
      left: 2%;
      bottom: -60%;
      z-index: 0;
      max-width: 180px;
      // animation: tomato 5s linear infinite;
    }
  
    img.carrots2 {
      left: 50%;
      bottom: -200%;
      z-index: 0;
      max-width: 300px;
      rotate: -25deg;
      // animation: tomato 5s linear infinite;
    }
  
    img.cabbage {
      bottom: -15%;
      left: -5%;
      max-width: 400px;
      filter: blur(4rem);
      // animation: tomato 5s linear infinite;
    }
  
    img.water {
      right: 3%;
      bottom: 12%;
      z-index: 5;
      rotate: -30deg;
      max-width: 220px;
      transform: scaleX(-1);
      // filter: blur(.4rem);
      // animation: tomato 5s linear infinite;
    }
  }
`;
