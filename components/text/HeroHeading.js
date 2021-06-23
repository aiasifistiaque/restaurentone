import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
	font-size: 3.5em;
	font-weight: 500;
	letter-spacing: 2px;
	color: white;
	text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
	margin: 0;
	padding: 0;
	text-align: center;
	@media only screen and (max-width: 700px) {
		font-size: 2em;
	}
`;

const HeroHeading = () => {
	return <Heading>fresh and delicious</Heading>;
};

export default HeroHeading;
