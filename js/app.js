'use strict'


$(document).ready(function(){


	var cats = [

			{

				clickCount: 0,
				name: 'Bernard',
				nicknames: [{nickname:'Cornel'}, {nickname:'Jeffery'}, {nickname:'Cash'}],
				imgSrc: 'public/assets/images/Bernard.jpg',
				imgAttr: 'Creative Commons',
				
			},
			{

				clickCount: 0,
				name: 'Melson',
				nicknames: [{nickname:'Burno'}],
				imgSrc: 'public/assets/images/Melson.jpg',
				imgAttr: 'Creative Commons',
			},
			{

				clickCount: 0,
				name: 'SnowFlake',
				nicknames: [{nickname:'Cannon'}],
				imgSrc: 'public/assets/images/SnowFlake.jpg',
				imgAttr: 'Creative Commons',
			},
			{

				clickCount: 0,
				name: 'Willow',
				nicknames: [{nickname:'Zzzzz'}],
				imgSrc: 'public/assets/images/Willow.jpg',
				imgAttr: 'Creative Commons'
			},
			{

				clickCount: 0,
				name: 'Wilson',
				nicknames: [{nickname:'Richard'}],
				imgSrc: 'public/assets/images/Wilson.jpg',
				imgAttr: 'Creative Commons',
			}

		];

	var Cat = function(cats){

		this.clickCount = ko.observable(cats.clickCount)
		this.name = ko.observable(cats.name)
		this.imgSrc = ko.observable(cats.imgSrc),
		this.nicknames = ko.observableArray(cats.nicknames);
		this.imgAttr = ko.observable('Creative Commons')

		var viewModel = this;
		this.title = ko.computed(function(){

			var title = "";
			var clicks = viewModel.clickCount();

			if(clicks < 10){
				title = 'Newborn';
			}
			else if(clicks < 50){

				title = 'Infant';
			}
			else if(clicks < 100){

				title = 'Child';
			}
			else if(clicks < 200){

				title = 'Teen';
			}
			else if(clicks < 500){

				title = 'Adult';
			}
			else{

				title = 'Ninja';
			}

			return title;

		})
			
	};



	var viewModel = function() {

		var self = this;
		
		this.catList = ko.observableArray([]);

		cats.forEach(function(cats){

			
			self.catList.push( new Cat(cats) );
		})
		console.log(cats[0])
		this.currentCat = ko.observable( this.catList()[0] );

		this.incrementCounter = function(){

			self.currentCat().clickCount(self.currentCat().clickCount()+1);
		};

		this.updateMainImg = function(data){

			self.currentCat(data);
		}

		

	}



	ko.applyBindings(new viewModel);
})