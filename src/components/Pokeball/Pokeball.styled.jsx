import styled from 'styled-components';

const ballSize = '10vmin';
const stripeHeight = `calc(${ballSize} * .06)`;
const shadowWidth = `calc(${ballSize} / 10)`;
const shadowColor = 'rgba(0, 0, 0, .075)';
const buttonSize = `calc(${ballSize} * .38)`;
const btnSize = `calc(${buttonSize} * .45)`;

export const BallStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${ballSize};
  height: ${ballSize};
  border-radius: 50%;
`;

export const TopStyled = styled.div`
  height: calc(${ballSize} / 2 - (${stripeHeight} / 2));
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  background: red;
  box-shadow: ${shadowWidth} 0 0 ${shadowColor} inset;

  .&::after {
    content: '';
    position: absolute;
    top: calc(11%);
    left: calc(61%);
    width: calc(${ballSize} * 0.3);
    height: calc(${ballSize} * 0.17);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: rotate(40deg);
  }
`;

export const MidStyled = styled.div`
align-self: center;
  height: ${stripeHeight};
  width: calc(${ballSize} * .96);
  100%;
  background: black;`;

export const BottomStyled = styled.div`
  height: calc(${ballSize} / 2 - (${stripeHeight} / 2));
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  background: white;
  box-shadow: ${shadowWidth} calc(${shadowWidth} * -0.2) 0 ${shadowColor} inset;

  .&::after {
    content: '';
    position: absolute;
    top: calc(50% + ${ballSize} / 2.25);
    left: calc(50% - ${ballSize} / 2.1);
    width: calc(${ballSize} * 0.8);
    height: calc(${ballSize} * 0.1);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.075);
    z-index: -1;
  }
`;

export const ButtonStyled = styled.div`
  position: absolute;
  top: calc(50% - ${buttonSize} / 2);
  left: calc(50% - ${buttonSize} / 2);
  width: ${buttonSize};
  height: ${buttonSize};
  border-radius: 50%;
  background: white;
  border: solid ${stripeHeight} black;
  box-shadow: 1px 0px 0px black inset;

  .&:after {
    content: '';
    position: absolute;
    top: calc(50% - ${btnSize} / 2);
    left: calc(50% - ${btnSize} / 2);
    width: ${btnSize};
    height: ${btnSize};
    border-radius: 50%;
    background: white;
    border: solid 2px #666;
  }
`;
