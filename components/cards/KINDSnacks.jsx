import React from 'react';
import Card from '../Card.jsx';

export default function() {
 return(
	<Card
		nature="project"
		title="KIND Snacks"
		projectLink="/clients/kindsnacks/barslide"
	>
		<section>
			<img src="/images/projects/kindsnacks/bluebar.png" />

			<p>
				On a contract for <strong>KIND Snacks</strong>, I built a set of sales pages according to design specifications for their bars immediately before they were sold literally everywhere.
			</p>

			<img src="/images/projects/kindsnacks/redbar.png" />

			{/*<!-- <img src="/images/projects/kindsnacks/redblue.png" /> -->*/}
			{/*<!-- built in conjunction with Madwell NYC design agency -->*/}
		</section>
	</Card>
);
}