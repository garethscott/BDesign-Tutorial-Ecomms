import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductHeading,
    ProductTitle,
    ProductsCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductsCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductsCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
