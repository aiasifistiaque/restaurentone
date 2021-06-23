import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.3);
	flex: 1;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 100%;
	scroll-snap-align: start;
	padding: 0 10%;
`;

const HeroImageOverlay = ({ children }) => {
	return <Overlay>{children}</Overlay>;
};

export default HeroImageOverlay;
