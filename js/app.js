// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


var data = {
	'iOS': {
		'The Scout App': {
			image: 'http://graphics8.nytimes.com/images/2010/07/31/us/31boyscouts1_span/boyscouts-1-articleLarge.jpg',
			heading: 'The Scout App',
			link: 'https://itunes.apple.com/us/app/the-scout-app/id733163415?ls=1&mt=8',
			description: "An app designed for the iPhone to help boys keep track of their Scouting progress. My dad is a huge scouter and I wanted to make this app because there wasn't really a good option, especially for Troops or families with multiple boys",
			gallery: [
				{ href:'images/iOS/thescoutapp_5.png' },
				{ href:'images/iOS/thescoutapp_4.png' },
				{ href:'images/iOS/thescoutapp_3.png' },
				{ href:'images/iOS/thescoutapp_2.png' },
				{ href:'images/iOS/thescoutapp_1.png' }
			]
		},
		'DNA is in Me': {
			image: 'http://rack.2.mshcdn.com/media/ZgkyMDEzLzA2LzEzLzU0L2RuYS40NjE1MC5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/3b6190d2/275/dna.jpg',
			heading: 'DNA is in Me',
			link: 'https://itunes.apple.com/us/app/dna-is-in-me/id700513081?ls=1&mt=8',
			description: 'The first app I developed completely on my own from start to finish.  It is a glorified catalog used by Corning sales reps. Thanks to Tope and his team at <a href="http://appdesignvault.com">App Design Vault</a> for providing most of the design. It saved me probably 30+ hours and made it look nicer than I ever could have done on my own.',
			gallery: [
				{ href:'images/iOS/dna_1.png' },
				{ href:'images/iOS/dna_2.png' },
				{ href:'images/iOS/dna_3.png' },
				{ href:'images/iOS/dna_4.png' },
				{ href:'images/iOS/dna_5.png' }
			]
		},
		'Lucidchart': {
			image: 'http://reworkengine.com/wp-content/uploads/2012/08/Lucid-Chart.jpg',
			heading: 'Lucidchart',
			link: 'https://itunes.apple.com/us/app/lucidchart-diagrams-done-right/id611543423?ls=1&mt=8',
			description: "Technically this app was made in Titanium (which I wouldn't even recommend to my enemy...) but it is published in the App Store.  My contribution to this app is probably only 10-15% but it was the first app I ever worked on.",
			gallery: [
				{ href:'images/iOS/lucidchart_1.jpg' },
				{ href:'images/iOS/lucidchart_2.jpg' },
				{ href:'images/iOS/lucidchart_3.jpg' },
				{ href:'images/iOS/lucidchart_4.jpg' }
			]
		}
	},
	'Javascript': {
		'Family Feud': {
			image: 'images/Javascript/Family_Feud.png',
			heading: 'Family Feud',
			link: 'https://github.com/keslert/FamilyFeud',
			description: 'Jane and I were recently called to serve with the young single adults in our ward boundaries. We decided to have a game night and in preparation, I created this Family Feud game. It is based off of the working prototype at the <a href="http://sheprograms.blogspot.com/2013/02/responsive-family-feud-game-board-with.html">She Programs blog</a>.  Feel free to use/modify it. Preview answers by using the admin page and indicate correct responses by using the keys 1-9 and incorrect by the x key.'
		},
	},
	'Research': {
		'Right time, right place': {
			image: 'http://blog.commarts.wisc.edu/wp-content/uploads/2010/02/twitter-map-location.jpg',
			heading: '"Right time, right place" health communication on Twitter: value and accuracy of location information',
			link: 'http://scholar.google.com/citations?view_op=view_citation&hl=en&user=6i0ZcX0AAAAJ&citation_for_view=6i0ZcX0AAAAJ:u-x6o8ySG0sC',
			description: "Background Twitter provides various types of location data, including exact Global Positioning System (GPS) coordinates, which could be used for infoveillance and infodemiology (ie, the study and monitoring of online health information), health communication, and interventions. Despite its potential, Twitter location information is not well understood or well documented, limiting its public health utility."
		},
		'Leveraging social networks': {
			image: 'images/dentist.jpg',
			heading: 'Leveraging social networks for anytime-anyplace health information',
			link: 'http://scholar.google.com/citations?view_op=view_citation&hl=en&user=6i0ZcX0AAAAJ&citation_for_view=6i0ZcX0AAAAJ:u5HHmVD_uO8C',
			description: 'The health landscape is shifting to one in which common individuals are no longer merely consumers, but also producers, of health information. We demonstrate that social media platforms provide the means to seek and receive personalized, credible health advice from peers at any place and time, by tracking dental health advice sought and received in Twitter. We show that for genuine dental advice-seeking questions, answers are received 32 % of the time, with the first reply coming less than 6 min after the question is posed, in the median.'
		},
		'Lucidchart': {
			image: 'images/equation.jpg',
			heading: 'Behavior-based clustering and analysis of interestingness measures for association rule mining',
			link: 'http://scholar.google.com/citations?view_op=view_citation&hl=en&user=6i0ZcX0AAAAJ&citation_for_view=6i0ZcX0AAAAJ:d1gkVwhDpl0C',
			description: "A number of studies, theoretical, empirical, or both, have been conducted to provide insight into the properties and behavior of interestingness measures for association rule mining. While each has value in its own right, most are either limited in scope or, more importantly, ignore the purpose for which interestingness measures are intended, namely the ultimate ranking of discovered association rules. This paper, therefore, focuses on an analysis of the rule-ranking behavior of 61 well-known interestingness measures tested on the rules generated from 110 different datasets. By clustering based on ranking behavior, we highlight, and formally prove, previously unreported equivalences among interestingness measures. We also show that there appear to be distinct clusters of interestingness measures, but that there remain differences among clusters, confirming that domain knowledge is essential to the selection of an appropriate interestingness measure for a particular task and business objective."
		}
	},
	'Games': {
		'The Sneeks': {
			image: 'games/the_sneeks.png',
			overlay: 'The Sneeks',
			swf: 'games/the_sneeks.swf',
			height:450,
			width:800
		}, 
		'Spitball Warrior': {
			image: 'games/spitball_warrior.png',
			overlay: 'Spitball Warrior',
			swf: 'games/spitball_warrior.swf',
			width:800
		},
		'Gravity Battle': {
			image: 'games/gravity_battle.png',
			overlay: 'Gravity Battle',
			swf: 'games/gravity_battle.swf',
			width:750
		},
		'Fishy Escape': {
			image: 'games/fishy_escape.png',
			overlay: 'Fishy Escape',
			swf: 'games/fishy_escape.swf',
			width:750,
			height:450
		},
		'Wiggi Who': {
			image: 'games/wiggi_who.png',
			overlay: 'Wiggi Who',
			swf: 'games/wiggi_who.swf',
			width:750,
			height:450
		},
		'The Tower': {
			image: 'games/the_tower.png',
			overlay: 'The Tower',
			swf: 'games/the_tower.swf',
			width:750,
			height:450
		},
		'Turret Pong': {
			image: 'games/turret_pong.png',
			overlay: 'Turret Pong',
			swf: 'games/turret_pong.swf',
			width:750,
			height:450
		}
	}
}


var sections = {};

$(function() {
	function createSection(section) {
		var elements = [];
		_.each(data[section], function(v) {
			var card = createCard(v);
			card.addClass(section);
			elements.push(card);
		})

		sections[section] = {
			index: 0,
			count: elements.length,
			elements: elements
		}
	}

	function createCard(params) {
		var card = $('<div class="card">');
		var overlay = $('<div class="overlay">');
		if(params.overlay)
			overlay.html(params.overlay);
		card.append(overlay);

		var image = $('<div class="image" style="background:url('+params.image+'); background-size:cover;">');
		if(params.gallery) {
			image.click(function() {
				openFancybox(params.gallery);
			}).addClass('gallery');
			overlay.addClass('gallery');
		}
		card.append(image);

		if(params.description) {
			var description = $('<div class="description">');
			description.append($('<h3><a href="'+params.link+'">'+params.heading+'</a></h3>'));
			description.append($('<p>'+params.description+'</p>'));
			card.append(description);
		}

		if(params.swf) {
			card.click(function(e) {
				e.preventDefault();
				openSWF(params.swf, params.width, params.height);
			})
		}

		return card;
	}

	function displaySection(section, animated) {
		var data = sections[section];
		var $dom = $('#'+section);

		var max = (section == 'Games' ? 9 : 3);
		for(var i = 0; i < max; i++) {
			var col = $('<div class="small-8 small-centered medium-uncentered medium-4 medium-offset-1 large-4 columns">');
			col.append(data.elements[i + data.index]);
			$dom.append(col);
		}
	}

	function openFancybox(images, params) {
		params = params || {};
		$.fancybox.open(images, {
	        padding    : params.padding || 5,
	        maxHeight  : params.maxHeight || 500
	    });
	}

	function openSWF(link, width, height) {
		$.fancybox.open([{href:link}], {
			padding	: 0,
			width	: width,
			height 	: height
		})
	}

	_.each(data, function(v, key) {
		if(key != 'Games') {
			createSection(key);
			displaySection(key);
		}
	})

	$(".fancybox").fancybox();

	$('a.swf').click(function(e) {
		e.preventDefault();
		openSWF('games/aircraft_shooter.swf');
		return false;
	});

	var konami = new Konami(function() { 
		createSection('Games');
		displaySection('Games');
		$('section.hidden').fadeIn("slow");
		konami.destroy();
		$('#konami').text('{ Consider yourself a hero }');
		setTimeout(function() {
			$('#konami').fadeOut("slow");
		}, 2000)
	});
})