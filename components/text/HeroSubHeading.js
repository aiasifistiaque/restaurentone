import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
	font-size: 2em;
	font-weight: 400;
	letter-spacing: 2px;
	color: white;
	text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
	margin: 0;
	padding: 0;
	text-align: center;

	@media only screen and (max-width: 700px) {
		font-size: 1em;
	}
`;

const HeroSubHeading = () => {
	return (
		<Heading>traditional italian food to delight the whole family</Heading>
	);
};

export default HeroSubHeading;
