import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="Adobe EchoSign"
		projectLink="https://acrobat.adobe.com/us/en/sign.html"
	>
		<section>
			<p>
				Adobe hired a team of engineers that included myself in order to build out a consumer-facing page on their central website.
			</p>

			<img src="/images/projects/adobeechosign/header.png" />

			<p>
				I worked as a front-end developer in a fairly large team. I converted design specs into web pages. We also helped convert a bunch of their existing pages into a content-management system internal to Adobe.
			</p>

			<img src="/images/projects/adobeechosign/subscribe.png" />
		</section>
	</Card>
);
}