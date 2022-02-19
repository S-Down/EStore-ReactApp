import { AddShoppingCartRounded, FavoriteBorderRounded, SearchRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 320px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5ead9;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2; 
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #d0f3f3cf;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <AddShoppingCartRounded />
            </Icon>
            <Icon>
                <SearchRounded />
            </Icon>
            <Icon>
                <FavoriteBorderRounded />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product