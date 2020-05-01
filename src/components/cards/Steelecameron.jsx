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

			<figure>
				<img src="/images/projects/steelecameron/feedback-loop.png" />
				<figcaption>
					I added the portfolio itself as a project because I thought it would be weird and/or funny; also I wanted to make an image with a visual feedback loop. {/*I thought this would be an effective demonstration of how impossibly clever and meta I am.*/}
				</figcaption>
			</figure>

			{/*<!-- <img src="/images/projects/telephenesis/invite2.png" /> -->*/}
		</section>

		<section>
			<p>
				One of the unexpectedly complex challenges was getting the scrollbars to operate as expected. Each project page has its own scrollbar that remains in place when revisiting the page. This actually required a fair amount of work.
			</p>

			<img src="/images/projects/telephenesis/create.png" />
			
			<div className="technical">
				<h4>Technical</h4>
				<p>
					The website is built on <code>React</code>, <code>Redux</code>, <code>Express.js</code>, and <code>Node.js</code>.
				</p>

				<p>
					Of note is server-side rendering of a React app and a small router I wrote from scratch which handles navigation between pages on the site without reloading; including back and forward buttons and analytics tracking. I also wrote hooks that allow for integration of things like React.
				</p>

				<p>
					Other development tools involved were <code>SASS</code> and <code>Webpack</code>. Code was deployed onto a <code>Debian</code> <code>Linux</code> server. We used <code>Nginx</code> to create a reverse-proxy against the Node.js server.
				</p>
			</div>
		</section>
	</Card>
);
}