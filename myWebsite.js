const projectsFirst = document.querySelector( '#projects-first' );
const projectsSecond = document.querySelector( '#projects-second' );
const projectsThird = document.querySelector( '#projects-third' );
const projectsDisplay = document.querySelector( '#projects-display' );

const firstProjectText = 'Developed a dynamic, RESTful web application for users to review campsites with <em>user authentication</em> / <em>authorization</em> and <em>comment features</em> using <strong>Bootstrap</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB + Atlas</strong>, <strong>Git</strong>, a <strong>cloud-based IDE</strong> called Goorm, and <strong>Heroku</strong> for deployment';
const secondProjectText = 'Developed a meeting minutes taker that listens to and summarizes a meeting using a <strong>Google Home Mini</strong>, <strong>VoiceFlow API</strong> for speech-to-text, <strong>Python</strong> for summarizing, <strong>Firebase API</strong> for backend, and <strong>React</strong> for UI on a four-person team';
const thirdProjectText = 'Developed a Lego Mindstorms EV3 robot that interprets music on paper for the hearing impaired using RobotC, <strong>C++</strong>, and <strong>robotics hardware</strong>';

const firstProjectHTML = `
	<div>
		<h1 class="shadow">YelpCamp</h1>
		<div style="height:8%;">
			<div class="separator collapse"></div>
		</div>
		<p style="height:30%;">${firstProjectText}</p>
		<div style="height:50%;text-align:center;overflow:hidden;">
			<a href="https://still-citadel-75028.herokuapp.com/" target="_blank" title="View application!"><img src="assets/imgs/YelpCamp_Webpage.png" style="height:100%;"></a>
		</div>
	</div>
`;

const secondProjectHTML = `
	<div>
		<h1 class="shadow">Meeting Minutes <span style="opacity:0.8;">| Hack the North <span class="collapse">2019</span></span></h1>
		<div style="height:8%;">
			<div class="separator collapse"></div>
		</div>
		<p style="height:30%;">${secondProjectText}</p>
		<div class="flex-center" style="height:50%;">
			<img class="circle" src="assets/imgs/Google_Home_Mini.jpg">
		</div>
	</div>
`;

const thirdProjectHTML = `
	<div>
		<h1 class="shadow">DeafSTAR: Music-Visualizing Robot</h1>
		<div style="height:8%;">
			<div class="separator collapse"></div>
		</div>
		<p style="height:30%;">${thirdProjectText}</p>
		<div class="flex-center" style="height:50%;">
			<img class="circle" src="assets/imgs/Robot_Project.jpg">
		</div>
	</div>
`;

projectsFirst.addEventListener( 'click', () => {
	projectsDisplay.classList.add( 'red-gradient' );
	projectsDisplay.classList.remove( 'dark-blue-gradient' );
	projectsDisplay.classList.remove( 'blue-gradient' );
	projectsDisplay.innerHTML = firstProjectHTML;
} );

projectsSecond.addEventListener( 'click', () => {
	projectsDisplay.classList.remove( 'red-gradient' );
	projectsDisplay.classList.add( 'dark-blue-gradient' );
	projectsDisplay.classList.remove( 'blue-gradient' );
	projectsDisplay.innerHTML = secondProjectHTML;
} );

projectsThird.addEventListener( 'click', () => {
	projectsDisplay.classList.remove( 'red-gradient' );
	projectsDisplay.classList.remove( 'dark-blue-gradient' );
	projectsDisplay.classList.add( 'blue-gradient' );
	projectsDisplay.innerHTML = thirdProjectHTML;
} );

/*******************************************************************/

let i = 0;
let images = [];
const time = 3000;

images[0] = 'assets/imgs/A_Cappella_1.jpg';
images[1] = 'assets/imgs/A_Cappella_2.jpg';
images[2] = 'assets/imgs/A_Cappella_3.jpg';

changeImg = () => {
	document.slide.src = images[i];
	if( i < images.length - 1 ) {
		++i;
	} else {
		i = 0;
	}
	setTimeout( "changeImg()", time );
};

window.onload = changeImg;

/*******************************************************************/

const bubble = document.querySelector( '#resume-container>.flex-center' );
const bubblesSmall = document.querySelectorAll( '.bubble-s' );
const bubblesMedium = document.querySelectorAll( '.bubble-m' );

bubble.addEventListener( 'mouseover', () => {
	for( let i = 0; i < bubblesSmall.length; ++i ) {
		bubblesSmall[i].style.backgroundColor = '#A8D0E6';
		bubblesMedium[i].style.backgroundColor = '#A8D0E6';
	}
} );

bubble.addEventListener( 'mouseout', () => {
	for( let i = 0; i < bubblesSmall.length; ++i ) {
		bubblesSmall[i].style.backgroundColor = 'rgba(36,48,94,0.6)';
		bubblesMedium[i].style.backgroundColor = 'rgba(36,48,94,0.8)';
	}
} );
