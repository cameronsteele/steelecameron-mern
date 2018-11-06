import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="ApplyGem"
		projectLink="https://applygem.com"
	>
		<section>
			<p>
				ApplyGem is an organization and a business tool for creating application forms and reviewing applicants that I designed, built, and own independently.
			</p>

			<img src="/images/projects/applygem/home.png" />

			<p>
				My intent was to build something elegant, unpretentious, and highly-functional. I tried to design an interface that felt simple but somehow overtly pleasant.
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