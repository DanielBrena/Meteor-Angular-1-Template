import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import { name as App } from '../imports/ui/components/app/app';

function onReady(){
	angular.bootstrap(document, [
		App
	], {
		strictDi: true
	});
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceReady', onReady);
} else {
	angular.element(document).ready(onReady);
}