import React from 'react'
import styled from 'styled-components'
import { EmailRounded, Facebook, Instagram, LocationOnRounded, Phone, Twitter } from '@material-ui/icons'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${ props => props.bg };
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-STORE.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Rerum, hic earum! Corporis repudiandae voluptatem possimus necessitatibus 
                sint eum aliquam impedit et at, commodi fuga inventore sequi dolorem facere illo aliquid!
            </Description>
            <SocialContainer>
                <SocialIcon bg="#3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon bg="#8a303d">
                    <Instagram />
                </SocialIcon>
                <SocialIcon bg="#4390ca">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>????????????</Title>
            <List>
                <ListItem>??????</ListItem>
                <ListItem>?????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
                <ListItem>????????????</ListItem>
            </List>
        </Center>
        <Right>
            <Title>????????????</Title>
            <ContactItem><LocationOnRounded style={{marginRight:"10px"}} />??????????????????????????????0001???</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} />+ 86 0123 4567 8910</ContactItem>
            <ContactItem><EmailRounded style={{marginRight:"10px"}} />sample@demo.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer