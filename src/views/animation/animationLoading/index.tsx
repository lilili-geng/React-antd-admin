import { Card } from "antd";
import styled, { keyframes } from "styled-components";
import { useNavigate } from 'react-router-dom';
import MonacoHtmlEditor from "@/components/MonacoHtmlEditor";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingOne = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #006affd4;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const LoadingTwo = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;  
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;


const rotate = keyframes`
   100%   {transform: rotate(360deg)}
`;
const prixClipFix = keyframes`
   0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
   25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
   50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
   75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
   100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`;

const LoadingThree = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid #FFF;
    border-bottom-color: #FFF; /* 你可以更改颜色 */
    animation: ${prixClipFix} 2s linear infinite;
  }
`;

const animloader = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;


const LoadingFour = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';  
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animloader} 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }
`;


const LoadingFiveAnimation = keyframes`
  0%   { height: 48px} 
  100% { height: 4px}
`;

const LoadingFive = styled.div`
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation:${LoadingFiveAnimation} 0.3s 0.3s linear infinite alternate;

  &::after,
  &::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  box-sizing: border-box;
  animation: ${LoadingFiveAnimation} 0.3s  0.45s  linear infinite alternate;
  }
  &::before {
  left: -20px;
  animation-delay: 0s;
}
`;

const mulShdSpin = keyframes`
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 
    2em -2em 0 0em, 3em 0 0 -1em, 
    2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
    3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 
    2em -2em 0 0, 3em 0 0 0.2em, 
    2em 2em 0 0, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
     -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
     -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
     -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
    3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
    3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
`;

const LoadingSix = styled.div`
  color: #fff;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${mulShdSpin} 1.3s infinite linear;
  transform: translateZ(0);
`;

const animations = [
  {
    component: LoadingOne,
    style: {
      backgroundColor: "#006affd4",
    },
  },
  {
    component: LoadingTwo,
    style: {
      backgroundColor: "#006affd4",
    },
  },
  {
    component: LoadingThree,
    style: {
      display: "flex",
      backgroundColor: "#006affd4",
      justifyContent: "center",
    },
  },
  {
    component: LoadingFour,
    style: {
      display: "flex",
      backgroundColor: "#006affd4",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    component: LoadingFive,
    style: {
      display: "flex",
      backgroundColor: "#006affd4",
      height: "100px",
      justifyContent: "center",
    },
  },
  {
    component: LoadingSix,
    style: {
      display: "flex",
      backgroundColor: "#006affd4",
      justifyContent: "center",
      alignItems: "center",
    },
  },
];


const AnimationLoading = () => {

  const animationNum = (animation: any) => {
    console.log(animation);
  };

  return (
    <div className="p-2">
      <Card>
        <div className="w-full h-full grid grid-cols-3 gap-[70px]">
          {animations.map((animation, index) => (
            <div key={index} className="p-4 bg-[#006affd4] cursor-pointer" style={animation.style} onClick={() => { animationNum(animation) }}>
              <animation.component />
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}

export default AnimationLoading;
