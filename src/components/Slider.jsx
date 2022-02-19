import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7f7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props => props.direction === "left" && "10px" };
    right: ${ props => props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${ props => props.slideIndex * -100 }vw);
`

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${ props => props.bgc };
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    margin-right: 70px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [ slideIndex, setSlideIndex ] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2 )
        } else {
            setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0 )
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={ () => handleClick("left") }>
                <ArrowBackIosRounded />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bgc={item.bgc} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={ () => handleClick("right") }>
                <ArrowForwardIosRounded />
            </Arrow>
        </Container>
    )
}

export default Slider