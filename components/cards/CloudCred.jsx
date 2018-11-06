import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="VMWare CloudCred"
		projectLink="https://www.cloudcredibility.com"
	>
		<section>
			<p>
				<strong>CloudCred</strong>, by VMWare, is an online professional network and a learning game. Players form into teams and contribute to their team's collective score by completing learning challenges in order to earn prizes.
			</p>

			<img src="/images/projects/vmwarecloudcred/main.png" />

			<p>
				I worked in a team of 5 as a front-end engineer to build the homepage and a number of live modules within the application like user profiles, search, and high-score listings. We used <code>HTML5</code> and <code>Javascript</code>/<code>AJAX</code>.
			</p>

			<img src="/images/projects/vmwarecloudcred/info.png" />
		</section>
	</Card>
);
}