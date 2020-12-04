import React, { useState , useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import sun from './../assets/smiley-sun.svg';


const time = '0.1s';
const lightBackground = 'linear-gradient(90deg, #EAC29C 0%, #EDE8CF 100%)';
const darkBackground = 'linear-gradient(90deg, #46517F 0%, #8DA5B4 100%)';
const setAnimation = (from, to) => keyframes({from: from, to: to});


const OuterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${lightBackground};
    animation: ${time} ${({ showBackground }) => showBackground && setAnimation({ background: lightBackground }, { background: darkBackground })} linear;
    animation-fill-mode: forwards;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    margin:0 auto;
    z-index: 10000;
`;

const Header = styled.h1`
color: #333333;
animation: ${time} ${({ showLightfont }) => showLightfont && setAnimation({ color: '#333333' }, { color: '#ffffff' })} linear;
animation-fill-mode: forwards;
position: relative;
font-size: 40px;
font-family: 'Raleway Dots', cursive;
display: flex;
align-items: center;
margin-bottom:40px;
`;

const StyledToggle = styled.div`
   border-radius: 50px;
   background:  linear-gradient(90deg, #FFA751 0%, #FFE259 100%);
   animation: ${time}  ${({dark}) => dark && setAnimation({background: lightBackground}, {background: darkBackground})} linear;
   animation-fill-mode: forwards;
   height: 32px;
   width: 58px;
   display:flex;
   position: relative;
   align-self: center;
   z-index:100;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const StyledSwitch = styled.span`
   background: #ffffff url('./assets/smiley-sun.svg') no-repeat center;
   z-index: 101;
   width:28px;
   height: 26px;
   border-radius: 50px;
   display:flex;
   justify-content:center;
   align-self: center;
   margin-left: 3px;
   margin-top:0.5px;
   z-index: 10000;
   animation: ${time}  ${({dark}) => dark && setAnimation({marginLeft: '3px', background: '#ffffff url(\'./assets/smiley-sun.svg\') no-repeat center'}, {marginLeft: '26px', background: '#ffffff url(\'./assets/smiley-moon.svg\') no-repeat center'})} linear;
   cursor: pointer;
   animation-fill-mode: forwards;
`;

const Toggle = (props) => {
    const [dark, setDark] = useState(false);
    const {onDark, onNotDark} = props;
    useEffect(() => {
        if (!dark) {
            onNotDark();
            return;
        }
        onDark();
    }, [dark])

    const handleClick = () => {
        setDark(!dark)
    }; 

    return (<StyledToggle dark={dark}>
        <StyledSwitch dark={dark} onClick={handleClick}></StyledSwitch>
    </StyledToggle>
    )};

function ToggleComponent() {
    const [showBackground, setShowBackground] = useState(false);
    const [showLightfont, setShowLightfont] = useState(false);

    const handleNotDark = () => setShowBackground(false) & setShowLightfont(false);
    const handleDark = () => setShowBackground(true) & setShowLightfont(true);

    

    return (
        <OuterWrapper showBackground={showBackground}>
            <StyledWrapper>
                <Header showLightfont= {showLightfont}>
                    Toggle Switch
                </Header>
                        <Toggle onNotDark= {handleNotDark} onDark= {handleDark} />
            </StyledWrapper>
        </OuterWrapper>
);
}

export default ToggleComponent;