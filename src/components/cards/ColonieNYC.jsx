import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="Colonie NYC"
		projectLink="http://colonienyc.com"
	>
		<section>
			<img src="/images/projects/colonienyc/logo.png" />

			<p>
				<strong>Colonie NYC</strong> is a popular fine-dining restaurant in New York City. They were looking for a unique online identity and menu.
			</p>

			<img src="/images/projects/colonienyc/brunch.png" />

			<p>
				I programmed the website, including a miniature custom content-management system built for menu items and other content, using <code>HTML</code>, <code>Javascript</code>, and <code>PHP</code>.
			</p>

			<img src="/images/projects/colonienyc/navigation.png" />
		</section>
	</Card>
);
}