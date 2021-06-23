import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	min-height: 100vh;
	display: flex;
	width: 100%;
	scroll-snap-align: start;
`;

const HomeSections = ({ children }) => {
	return <Section>{children}</Section>;
};

export default HomeSections;
