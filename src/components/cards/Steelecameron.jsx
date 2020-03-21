import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="steelecameron.com"
		cardImage="/images/projects/steelecameron/main.png"
		projectLink="https://steelecameron.com"
		githubLink="https://github.com/cameronsteele/steelecameron-mern"
	>
		<section>
			<p>
				The portfolio you're looking at. I tried to create something simple but subtly compelling and impressive from a code-base standpoint.
			</p>

			<img src="/images/projects/telephenesis/constellation.png" />

			<p>
				I avoided using libraries to accomplish certain complex tasks (outlined in the technical section ahead), partially to teach myself how they worked but mostly to impress prospective employers.
			</p>

			<img src="/images/projects/telephenesis/invite1.png" />
			{/*<!-- <img src="/images/projects/telephenesis/invite2.png" /> -->*/}
		</section>

		<section>
			<img src="/images/projects/telephenesis/login.png" />

			<div className="technical">
				<h4>Technical</h4>
				<p>
					The website is built on one of the latest crazes in web development, <code>React</code>, <code>Redux</code>, and <code>Node.js</code>.
				</p>
			</div>
			<img src="/images/projects/telephenesis/create.png" />
		</section>
	</Card>
);
}