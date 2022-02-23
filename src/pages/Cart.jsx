import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AddRounded, RemoveRounded } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: center;
    cursor: pointer;
    border: ${ props => props.filled && "none" };
    background-color: ${ props => props.filled ? "black" : "transparent" };
    color: ${ props => props.filled && "white" };
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 160px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ props => props.color };
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Amount = styled.div`
    font-size: 20px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    margin: 0px 10px;
    padding: 20px;
    max-height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: ${ props => props.type === "total" && "500" };
    font-size: ${ props => props.type === "total" && "24px" };
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 500;
`


const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>购物车</Title>
                <Top>
                    <TopButton>继续浏览商品</TopButton>
                    <TopTexts>
                        <TopText>购物车(2)</TopText>
                        <TopText>心愿清单(0)</TopText>
                    </TopTexts>
                    <TopButton filled={true} >现在结算</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="http://cresedim.com/web/product/big/cresedim_2307.jpg" />
                                <Details>
                                    <ProductName><b>服饰: </b>VELCRO POINT长款开衫</ProductName>
                                    <ProductColor color="#5e676f" />
                                    <ProductSize><b>尺码: </b>M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <AmountContainer>
                                    <AddRounded />
                                    <Amount>2</Amount>
                                    <RemoveRounded />
                                </AmountContainer>
                                <ProductPrice>￥ 432.00</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="http://cresedim.com/web/product/big/cresedim_2315.jpg" />
                                <Details>
                                    <ProductName><b>服饰: </b>层叠设计羊绒大衣</ProductName>
                                    <ProductColor color="#000e76" />
                                    <ProductSize><b>尺码: </b>M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <AmountContainer>
                                    <AddRounded />
                                    <Amount>1</Amount>
                                    <RemoveRounded />
                                </AmountContainer>
                                <ProductPrice>￥ 899.00</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>订单合计</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>商品小计</SummaryItemText>
                            <SummaryItemPrice>￥ 1331.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>运费</SummaryItemText>
                            <SummaryItemPrice>￥ 12.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>优惠减免</SummaryItemText>
                            <SummaryItemPrice>￥ 62.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>总计</SummaryItemText>
                            <SummaryItemPrice>￥ 1281.00</SummaryItemPrice>
                        </SummaryItem>
                        <Button>现在结算</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart