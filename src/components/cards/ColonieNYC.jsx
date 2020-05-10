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
				I was sole-developer, coding each page according to design specifications and building a miniature custom content-management system built for menu items, news, and other content.
			</p>

			<p>
				The design was created by <a href="https://www.madwell.com/" className="external" target="_blank">Madwell NYC</a>.
			</p>

			<div className="technical">
				<p>It's quite a simple site on a technical level. I used <code>HTML</code>, <code>Javascript</code>, and <code>jQuery</code> for the front-end. The back-end is built on <code>PHP</code> and <code>MySQL</code>.</p>
			</div>

			<img src="/images/projects/colonienyc/navigation.png" />
		</section>
	</Card>
);
}