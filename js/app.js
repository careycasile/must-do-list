//Global map variable is defined
var map;

//Initial Data is placed inside objects inside an array
var information = [{
		name: 'Kennywood Park',
		address: '4800 Kennywood Blvd, West Mifflin, PA 15122',
		lat: 40.3878578,
		lng: -79.8664746,
		website: 'www.kennywood.com',
		description: "Amusement park has 30+ rides from wooden & modern roller coasters to water slides & kids' carousel.", 
		icon: 'att',
		direction: 56.03
	}, {
		name: 'Heinz Field',
		address: '100 Art Rooney Ave, Pittsburgh, PA 15212',
		lat: 40.4450268,
		lng: -80.0147185,
		website: 'www.steelers.com',
		description: "Riverside, steel stadium is home of the Steelers & University of Pittsburgh Panthers football teams.", 
		icon: 'ent',
		direction: 348.16
	}, {
		name: 'PNC Park',
		address: '115 Federal St, Pittsburgh, PA 15212',
		lat: 40.4466038,
		lng: -80.0037089,
		website: 'www.pittsburgh.pirates.mlb.com',
		description: 'Riverside baseball stadium with classic architecture hosts Pirates games, restaurants & retail.', 
		icon: 'ent',
		direction: 288.73
	}, {
		name: 'Burgatory',
		address: 'Waterworks Mall, 932 Freeport Rd, Pittsburgh, PA 15238',
		lat: 40.4890197,
		lng: -79.8929552,
		website: 'www.burgatorybar.com',
		description: 'Irreverent local chain serving gourmet burgers, hand-spun shakes & cocktails in a hip setting.', 
		icon: 'food',
		direction: 9.85
	}, {
		name: 'Heinz Hall',
		address: '600 Penn Ave, Pittsburgh, PA 15222',
		lat: 40.4427075,
		lng: -80.0021267,
		website: 'www.theheinzhall.com',
		description: 'Circa-1927 home of the Pittsburgh Symphony Orchestra is a grand space for concerts & musicals.', 
		icon: 'ent',
		direction: 106.16
	}, {
		name: 'Sandcastle',
		address: '1000 Sandcastle Drive, Pittsburgh, PA 15120',
		lat: 40.3984575,
		lng: -79.9290318,
		website: 'www.sandcastlewaterpark.com',
		description: 'Water park has tube slides, a lazy river & a jumbo wave pool, plus kiddie rides, go-karts & buffets. ', 
		icon: 'att',
		direction: 238.39
	}, {
		name: 'Benedum Hall',
		address: '237 7th St, Pittsburgh, PA 15222',
		lat: 40.4431114,
		lng: -80.0002219,
		website: 'www.trustarts.org',
		description: '2,800-seat venue hosting local ballet, theater & opera companies, plus touring shows & musicians.', 
		icon: 'ent',
		direction: 94.19
	}, {
		name: 'Pittsburgh Zoo and Aquarium',
		address: '7340 Butler St, Pittsburgh, PA 15206',
		lat: 40.4845337,
		lng: -79.9224315,
		website: 'www.pittsburghzoo.com',
		description: 'Animal center features an African Savanna, Asian Forest, Bear park, PPG Aquarium & Kids Kingdom. ', 
		icon: 'att',
		direction: 136.04
	}, {
		name: 'Nola On The Square',
		address: '24 Market Square, Pittsburgh, PA 15222',
		lat: 40.441092,
		lng: -80.0027532,
		website: 'www.nolaonthesquare.com',
		description: 'New Orleans-themed eatery is a colorful space with Creole fare, live jazz & sidewalk seats.', 
		icon: 'food',
		direction: 301.79
	}, {
		name: 'The Grand Concourse',
		address: '100 W Station Square Dr, Pittsburgh, PA 15219',
		lat: 40.4330079,
		lng: -80.0036566,
		website: 'www.grandconcourserestaurant.com',
		description: 'Train station turned upscale restaurant with seafood & steaks plus a more casual attached saloon.', 
		icon: 'food',
		direction: 2.87
	}, {
		name: 'Hofbräuhaus Pittsburgh',
		address: 'SouthSide Works Cinema, 2705 S Water St, Pittsburgh, PA 15203',
		lat: 40.4287488,
		lng: -79.9650287,
		website: 'www.hofbrauhauspittsburgh.com',
		description: 'German brewery modeled like the Munich original has seasonal beer, Bavarian fare & costumed servers.', 
		icon: 'food',
		direction: 77.62
	}, {
		name: 'Primanti Brothers',
		address: '46 18th St, Pittsburgh, PA 15222',
		lat: 40.4508194,
		lng: -79.9854957,
		website: 'www.primantibros.com',
		description: 'Long-running Pittsburgh-born chain known for its sandwiches piled high with coleslaw & french fries.', 
		icon: 'food',
		direction: 209.56
	}, {
		name: "Pamela's Diner",
		address: '3703 Forbes Ave, Pittsburgh, PA 15213',
		lat: 40.4411653,
		lng: -79.9575128,
		website: 'www.pamelasdiner.com',
		description: 'Charming, retro breakfast & lunch spot for specialty crepe-hotcakes, omelets & burgers. Cash only.', 
		icon: 'food',
		direction: 333.67
	}, {
		name: 'Andy Warhol Museum',
		address: "117 Sandusky St, Pittsburgh, PA 15212",
		lat: 40.4485951,
		lng: -80.0023082,
		website: 'www.warhol.org',
		description: "Museum where Warhol's art is the star & the inspiration for new works, performances & lectures. ", 
		icon: 'att',
		direction: 212.85
	}, {
		name: 'Phipps Conservatory',
		address: '1 Schenley Drive, Pittsburgh, PA 15213',
		lat: 40.4392995,
		lng: -79.9472416,
		website: 'www.phipps.conservatory.org',
		description: "Schenley Park's horticulture hub features botanical gardens & a steel-&-glass Victorian greenhouse.", 
		icon: 'att',
		direction: 236.01
	}];

//InitMap function is called from the index.html file towards the bottom inside the googleapis.com... src script tag
var InitMap = function() {
	'use strict'
	var self = this;
	//The map is drawn on the page here
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.440187, lng: -79.9778809},
		zoom: 12,
		styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#71c8d4"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#a0d3d3"}]},{"featureType":"poi.park","stylers":[{"color":"#91b65d"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"}]		
	});

	//The function in the MapKeeper class, allPins, is called to draw the initial markers on the map
	mk.allPins();

	//The vm.filterList function is called to let the knockout ViewModel know to start tracking the filter
	//field
	vm.filterList();
};	

//The MapKeeper class keeps track of the map elements and works directly with the ViewModel to update as needed
var MapKeeper = function () {
	'use strict'
	var self = this;
	var markerArray = [];

	//All pins is called once and prepares each item to be placed on the map. This function does not actually 
	//place the items as that is taken care of in the modifyPins... functions.
	this.allPins = function() {
		'use strict'
		for (var x = 0; x < vm.fullArray.length; x++) {
			var fullItem = vm.fullArray[x];
			var latitude = vm.fullArray[x].lat;
			var longitude = vm.fullArray[x].lng;
			var marker = new google.maps.Marker({
			  	position: {lat: latitude , lng: longitude},
			});
			marker.addListener('click', function(){
				mk.pinItem(fullItem);
			});
			markerArray.push(marker);
		}
	};

	//Recenters the map when one of the knockout computables are changed
	this.recenter = function() {
		'use strict'
		map.panTo({lat: 40.440187, lng: -79.9778809});
		map.setZoom(12);
	};

	//Removes all current pins from the map
	this.removePins = function() {
		'use strict'
		for (var x = 0; x < markerArray.length; x++){
				markerArray[x].setMap(null);
		}
	};

	//Modifies a pin to show and bounce when selected
	this.modifyPinsSelect = function(num) {
		'use strict'
		markerArray[num].setMap(map);
		markerArray[num].setAnimation(google.maps.Animation.BOUNCE);
	};

	//Adds a pin to the map
	this.modifyPinsPlus = function(num) {
		'use strict'
		markerArray[num].setMap(map);
		markerArray[num].setAnimation(google.maps.Animation.DROP);
	};

	//removes a pin from the map
	this.modifyPinsMinus = function(num) {
		'use strict'
		markerArray[num].setMap(null);
	};

	//event listener listens if the marker is clicked, removes all other pins and then calls pinItem function
	this.markerClick = function(data) {
		'use strict'
		pinItem(data);
	};

	//function is called when an item is clicked from the <li> or a pin is clicked and passed through markerClick
	//function
	this.pinItem = function(data){
		'use strict'
		self.removePins();
		self.modifyPinsSelect(data.id);
		map.panTo({lat: (data.lat + 0.035), lng: data.lng});
		map.setZoom(12);
	};
};

//MODEL
//Class creator to make instances of each data element
var InfoItem = function(data) {
	'use strict'
	var self = this;
	this.name = data.name;
	this.address = data.address;
	this.lat = data.lat;
	this.lng = data.lng;
	this.website = data.website;
	this.description = data.description;
	this.icon = data.icon;
	this.direction = data.direction;
	this.visible = ko.observable(true);
	this.id = null;
	//If loop matches a font awesome icon to the item's icon type
	if (this.icon === 'att') {
		self.display = '<i class="fa fa-camera" aria-hidden="true"></i>';
		self.descriptionIcon = ' attraction ' + self.description.toLowerCase() + ' ' + self.name.toLowerCase();
	} else if (this.icon === 'food') {
		self.display = '<i class="fa fa-cutlery" aria-hidden="true"></i>';
		self.descriptionIcon = ' food restaurant ' + self.description.toLowerCase() + ' ' + self.name.toLowerCase();			
	} else if ( this.icon === 'ent') {
		self.descriptionIcon = ' entertainment fun ' + self.description.toLowerCase() + ' ' + self.name.toLowerCase();
		self.display = '<i class="fa fa-users" aria-hidden="true"></i>';
	} 
};



//VIEWMODEL

var ViewModel = function(){
	'use strict'
	var self = this;

	//All Data items
	this.fullArray = [];
	for (var x = 0; x < information.length; x++) {
		var tempItem = new InfoItem(information[x])
		tempItem.id = x;
		this.fullArray.push(tempItem);
	}

	//TODO item is clicked, google map populates info
	this.itemClick = function() {
		'use strict'
		mk.removePins();
		mk.modifyPinsSelect(this.id);
		mk.pinItem(this);
	};

	this.userSubmission = ko.observable('');

   	this.filterList = function(){
   		'use strict'
   		ko.computed(function() {
	   		for (var x = 0; x < self.fullArray.length; x++) {
	   			var submission = self.userSubmission();
	   			var arrayItem = self.fullArray[x].descriptionIcon.indexOf(submission.toLowerCase());
	   			if (arrayItem !== -1){
	   				self.fullArray[x].visible(true);
	   				mk.modifyPinsPlus(x);
	   				mk.recenter();
	   			} else {
	   				self.fullArray[x].visible(false);
	   				mk.modifyPinsMinus(x);
	   				mk.recenter();
				}
	   		}
	    });
   	};
};



var mk = new MapKeeper();
var vm = new ViewModel();
ko.applyBindings(vm);
