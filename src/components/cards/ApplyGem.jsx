import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="ApplyGem"
	>
		<section>
			<p>
				ApplyGem is an online business tool for creating application forms and reviewing applicants that I designed, engineered, and own independently.
			</p>

			<img src="/images/projects/applygem/home.png" />

			<p>
				My intent was to build something simple, elegant, unpretentious, and highly-functional. The project is currently down while it's rewritten on a different platform and given a second-wind.
			</p>

			<p>
				Ultimately, the plan is to produce a variety of "gems" that people can use to help run their business; all with the same philosophy of having a straight-forward interface and straight-forward pricing.
			</p>

			<img src="/images/projects/applygem/appsview.png" />
		</section>

		<section>
			<figure>
				<img src="/images/projects/applygem/self-portrait.png" />
				<figcaption>
					Incidentally, I drew a bunch of portraits of various popular characters for use in the demo as image uploads. Above is Bombur from The Hobbit.
				</figcaption>
			</figure>

			<img src="/images/projects/applygem/applicants.png" />

			<div className="technical">
				<h4>Technical</h4>

				<p>
					I independently programmed ApplyGem (excluding libraries) using <code>PHP</code>, <code>Javascript</code>, and <code>HTML</code>.
				</p>

				<p>
					We wrote a <code>REST</code> <code>API</code> available for developers interested in building more complex forms or otherwise connecting other software.
				</p>

				<p>
					We built implementations for <code>Google Cloud Engine</code>, <code>Digital Ocean</code>, and <code>AWS</code>, in case pricing or features urge us to change platforms. {/*There is also a plugin for <code>WordPress</code> coming soon.*/}
				</p>
			</div>
		</section>
	</Card>
);
}