import React, { Component } from 'react';

export default class Navbar extends Component {

	state = {
		burgerOpen: false,
	}

	// componentDidMount() {
	// 	// A vanilla JS function to toggle hamburger etc.
	// 	// Get all "navbar-burger" elements
	// 	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// 	// Check if there are any navbar burgers
	// 	if ($navbarBurgers.length > 0) {

	// 		// Add a click event on each of them
	// 		$navbarBurgers.forEach(el => {
	// 			el.addEventListener('click', () => {

	// 				// Get the target from the "data-target" attribute
	// 				const target = el.dataset.target;
	// 				const $target = document.getElementById(target);

	// 				// Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
	// 				el.classNameList.toggle('is-active');
	// 				$target.classNameList.toggle('is-active');

	// 			});
	// 		});
	// 	}
	// }

	render() {
		return (
			// Bulma.io's suggested navbar structure with some inspiration from Daniel Supernault's 'Band' theme and my own edits to make it React-friendly
			<nav className="navbar is-dark" role="navigation" style={{backgroundColor: "#242f3e"}}>
				<div className="navbar-brand">
					<a className="navbar-item is-size-1" href="/">
						The Bars of Magoun Square
					</a>
					{/* Should I add the burger class? What is the burger class doing here? */}
					<div 
						className="navbar-burger" 
						data-target="navbarExampleTransparentExample" 
						role="button" 
						style={{outline: "none"}}
						tabIndex="0"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div id="navbarExampleTransparentExample" className="navbar-menu">
					<div className="navbar-start">
					</div>
					<div className="navbar-end">
						<a className="navbar-item" href="/">Home</a>
						<a className="navbar-item" href="/">About</a>
						<div className="navbar-item">
							<div className="field">
								<div className="control">
									<input className="input" type="text" placeholder="find a bar" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

