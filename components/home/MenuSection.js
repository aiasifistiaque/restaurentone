import React from 'react';
import HomeImageOverlay from '../overlay/HeroImageOverlay';
import BigButton from '../buttons/BigButton';

const MenuSection = () => {
	return (
		<div className='menu-section'>
			<Menu />
			<Store />
		</div>
	);
};

const Menu = () => {
	return (
		<div className='menu-part'>
			<HomeImageOverlay>
				<h3>Explore our</h3>
				<h5>
					menu <br /> favourites
				</h5>
			</HomeImageOverlay>
		</div>
	);
};

const Store = () => {
	return (
		<div className='store-part'>
			<BigButton>Find a store</BigButton>
		</div>
	);
};

export default MenuSection;
