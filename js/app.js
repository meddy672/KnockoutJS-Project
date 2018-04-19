'use strict'


$(document).ready(function(){


	var Cat = function(){

		this.clickCount = ko.observable(0)
		this.name = ko.observable('Bernard')
		this.imgSrc = ko.observable('public/assets/images/Bernard.jpg'),
		this.nicknames = ko.observableArray([{ nickname:'Cornel'}, { nickname:'Jeffery'}, { nickname:'Cash'}, {nickname:'Abbey'}]);
		this.imgAttr = ko.observable('Creative Commons')

		this.title = ko.computed(function(){

			var title = "";
			var clicks = this.clickCount();

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

		}, this)
			
	};



	var viewModel = function() {
		
		this.currentCat = ko.observable(new Cat());

		this.incrementCounter = function(){

			this.currentCat().clickCount(this.currentCat().clickCount()+1)
		}

		

	}



	ko.applyBindings(new viewModel);
})