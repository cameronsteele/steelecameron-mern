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


			<img src="/images/projects/applygem/applicants.png" />

			<div className="technical">
				<h4>Technical</h4>

				<p>
					I used <code>PHP</code>, <code>Javascript</code>, and <code>HTML</code>. ApplyGem runs on a cloud server using the <code>Google App Engine</code>. There is also a plugin for <code>WordPress</code> coming soon.
				</p>
			</div>
		</section>
	</Card>
);
}