import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
	return (
		<main>
			<PageHero title='about' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='nice desk' />
				<article>
					<div className='title'>
						<h2>Our Story</h2>
						<div className='underline' />
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad fugit
						maxime neque amet nostrum, quaerat quibusdam vel cumque, unde minima
						ea. Earum debitis officiis voluptates? Qui, nostrum voluptatibus
						autem nesciunt eos accusantium eligendi ab aspernatur corporis
						necessitatibus explicabo maxime impedit tempora voluptate culpa
						obcaecati quisquam, sapiente, praesentium natus aperiam ad
						consequuntur corrupti? Pariatur illum quidem officiis veritatis,
						quam illo minima at similique expedita quaerat sequi impedit totam
						quas qui ullam. Laboriosam labore maxime cupiditate necessitatibus
						voluptatibus. Minus nostrum ipsum non dolor sequi at culpa officia
						eum voluptatibus laborum sint et aperiam, est autem enim animi, modi
						quia? Unde hic voluptates facilis ratione quisquam ipsam numquam
						minima perferendis ab ad, aliquam nesciunt repellendus culpa
						exercitationem laboriosam consequuntur id soluta excepturi itaque
						debitis dolorem magni adipisci.
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
		text-align: justify;
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage
