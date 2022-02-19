import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { AddRounded, AddShoppingCartRounded, RemoveRounded } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0px;
  font-size: 24px;
  font-weight: 200;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 24px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: ${ props => props.color };
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    color: teal;
    font-weight: 500;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: teal;
        color: white;
    }
    transition: all 0.3s ease;
`

const ProductPage = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="http://cresedim.com/web/product/big/201703/3267_shop1_799665.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>春季新品杏色牛仔外套</Title>
                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nisi enim quos ipsam, aliquam porro iure in illum id aut ducimus 
                        nihil officiis quidem assumenda ab natus earum, aperiam qui eaque.
                    </Description>
                    <Price>￥ 128.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>颜色</FilterText>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterText>尺寸</FilterText>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveRounded />
                            <Amount>1</Amount>
                            <AddRounded />
                        </AmountContainer>
                        <Button>
                            <AddShoppingCartRounded />添加到购物车
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductPage