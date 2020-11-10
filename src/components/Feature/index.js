import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfrado suace topped with 24 carat glod dust!</p>
            <FeatureButton>OrderNow</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
