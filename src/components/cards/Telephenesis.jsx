import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="Telephenesis"
		projectLink="https://telephenesis.com"
		githubLink="https://github.com/cameronsteele/telephenesis"
	>
		<section>
			<p>
				An online game and outerspace interface of musical creation and recreation. I co-created the concept (with <a href="https://nopiano.com" className="external" target="_blank">Chris Marianetti</a>) and programmed the website myself.
			</p>

			<img src="/images/projects/telephenesis/constellation.png" />

			<p>
				First, an artist uploads a piece of music and places it in a scrolling galaxy as a star that others can click on and listen to.
			</p>

			<p>
				Then, another artist listens to it, reinterprets and recreates it, and uploads their take as another star. A line is drawn back to the original, creating branching constellations of musical interpretations.
			</p>

			<img src="/images/projects/telephenesis/invite1.png" />
			{/*<!-- <img src="/images/projects/telephenesis/invite2.png" /> -->*/}
		</section>

		<section>
			<img src="/images/projects/telephenesis/login.png" />

			<div className="technical">
				<h4>Technical</h4>
				<p>
					I was sole developer, and used <code>HTML</code>, <code>Javascript</code>, and <code>Node.js</code> on the <code>Express</code> web application framework. The server is an <code>DigitalOcean</code> <code>droplet</code>.
				</p>
			</div>
			<img src="/images/projects/telephenesis/create.png" />
		</section>
	</Card>
);
}