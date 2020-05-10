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
			<p><strong>CloudCred</strong>, by VMWare, is an online professional network and a learning game. Players form into teams and contribute to their team's collective score by completing learning challenges related to cloud technology in order to earn prizes.</p>

			<p>We were a team of 5 engineers and designers. It took us about 2 months to complete. My work involved slicing Photoshop files and various interface components.</p>

			<img src="/images/projects/vmwarecloudcred/info.png" />
		</section>

		<section>
			<img src="/images/projects/vmwarecloudcred/main.png" />

			<p>I built out the homepage and the front-end for user profiles, search auto-completion, and high-score listings.</p>

			<p>VMWare have kept it running with new challenges and prizes 7 years later.</p>

			<div className="technical">
				<h4>Technical</h4>
				<p>I served as a general front-end developer using <code>HTML5</code> and <code>Javascript</code>. <code>AJAX</code> played a large role in various data tables and search fields.</p>

				<p>We used <code>SASS</code> and <code>Compass</code> for <code>CSS</code> development.</p>

				<p>We also used <code>jQuery</code> and <code>Bootstrap</code>.</p>
			</div>
		</section>
	</Card>
);
}