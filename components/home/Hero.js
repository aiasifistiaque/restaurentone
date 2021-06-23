import React from 'react';
import HeroHeading from '../text/HeroHeading';
import HeroSubHeading from '../text/HeroSubHeading';
import HeroImageOverlay from '../overlay/HeroImageOverlay';
import BigButton from '../buttons/BigButton';
import MedButton from '../buttons/MedButton';

const Hero = () => {
	return (
		<div className='hero'>
			<HeroImageOverlay>
				<HeroHeading />
				<HeroSubHeading />
				<br />
				<br />
				<MedButton>Learn More</MedButton>
			</HeroImageOverlay>
		</div>
	);
};

export default Hero;
