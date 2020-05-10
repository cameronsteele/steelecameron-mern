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
				I tried to create something simple but compelling.
			</p>


			<figure>
				<img src="/images/projects/steelecameron/feedback-loop.png" />
				<figcaption>
					I mostly just wanted to create a visual feedback loop.
				</figcaption>
			</figure>

			<p>
				Initially, I had some trouble communicating with myself about the project needs and budget, but ultimately we came to terms. It was a pleasure working with myself and I'll probably be doing a lot more with myself in the future.
			</p>

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