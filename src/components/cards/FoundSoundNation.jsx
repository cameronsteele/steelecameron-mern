import React from 'react';
import Card from '../Card.jsx';

export default function() {
return(
	<Card nature="project" title="Found Sound Nation">
		<section>
			<p>
				Renowned non-profit Found Sound Nation works all over the world to connect people through music. Their programs have ranged from music production classes for underprivileged youth to hosting international arts exchange programs in collaboration with the U.S. Dept. of State.
			</p>

			<img src="/images/projects/foundsoundnation/logo.png" />

			<p>
				I was contracted to build numerous websites showcasing their organization and its many projects, festivals, and residencies. For their central website (seen in images), we tried to design something that feels large and alive.
			</p>

			<img src="/images/projects/foundsoundnation/grid.png" />
		</section>

		<section>
			<header>
				<h3>OneBeat</h3>
				<a href="http://1beat.org" target="_blank">http://1beat.org</a>
			</header>

			<p>
				Found Sound Nation was tasked by the <strong>U.S. Dept. of State</strong> to design an art residency and performance festival for musicians from around the world called OneBeat. I built both the public-facing website that showcased the artists as well as an application form and applicant review system that allowed them to browse through the thousands of applicants.
			</p>

			<img src="/images/projects/foundsoundnation/article.png" />
			<p>The review system is still in use by Found Sound Nation / U.S. Dept. of State, and other government programs have adopted it.</p>


			<div className="technical">
				<h4>Technical</h4>
				<p>
					I served as sole developer using <code>Javascript</code>, <code>PHP</code>, and <code>HTML</code>. Their public websites are in <code>WordPress</code>, for which I developed a number of custom functionalities. The review system was built from scratch and runs on <code>PHP</code> and <code>MySQL</code>.
				</p>
			</div>
		</section>
	</Card>
);
}