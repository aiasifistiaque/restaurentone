import Head from 'next/head';
import Hero from '../components/home/Hero';
import HomeSections from '../components/home/HomeSections';
import MenuSection from '../components/home/MenuSection';
import HomeCenterContainer from '../components/overlay/HomeCenterContainer';

export default function Home() {
	return (
		<div className='home-page'>
			<HomeSections>
				<Hero />
			</HomeSections>
			<HomeSections>
				<MenuSection />
			</HomeSections>
			<HomeSections>
				<HomeCenterContainer>
					<h1>Find us on instagram</h1>
					<h3>@thinkcrypt.io</h3>
				</HomeCenterContainer>
			</HomeSections>
		</div>
	);
}
