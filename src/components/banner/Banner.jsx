import React from 'react';
import imageBanner from '../../assets/bannerwall.jpg';
import { BannerStyle } from './BannerStyle';

const Banner = () => {

    return (
        <BannerStyle style={{ backgroundImage: `url(${imageBanner})` }} >
            <h1>Hello World</h1>
            <h2>De Dev para Dev.</h2>
        </BannerStyle>

    )
}

export default Banner