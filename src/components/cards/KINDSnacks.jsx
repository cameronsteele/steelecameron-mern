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
				<strong>KIND Snacks</strong> is a popular brand of snack bars. I was hired to develop a set of sales pages for their (at the time) new line of bars.
			</p>

			<p>
				My work involved slicing Photoshop designs into a functional website with a high-resolution animated slideshow of the new flavors. I built out a variety of versions with different colors and catchphrases; for which the marketing team ran tests to determine which were most effective.
			</p>
		{/*</section>

		<section>*/}
			<p>
				Designs were provided by the agency that hired me, <a href="https://www.madwell.com/" className="external" target="_blank">Madwell NYC</a>.
			</p>

			<img src="/images/projects/kindsnacks/redbar.png" />

			<div className="technical">
				<h4>Technical</h4>

				<p>It's primarily a static website written in <code>HTML</code> and <code>Javascript</code>. <code>jQuery</code> was used.</p>
			</div>

			{/*<!-- <img src="/images/projects/kindsnacks/redblue.png" /> -->*/}
			{/*<!-- built in conjunction with Madwell NYC design agency -->*/}
		</section>
	</Card>
);
}