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
				I worked as a front-end developer, converting design specifications into a functional website. As part of the project, I also helped convert their existing content into a content-management system that Adobe had built internally.
			</p>

			<img src="/images/projects/adobeechosign/subscribe.png" />
		</section>
	</Card>
);
}