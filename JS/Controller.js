app.controller('Controller',['$scope',function($scope){
	
	$scope.title ='ANAKBAYAN SEATTLE';
	$scope.description = 'ANAKBAYAN IS THE COMPREHENSIVE NATIONAL DEMOCRATIC MASS ORGANIZATION OF FILIPINO YOUTH AND STUDENTS IN THE UNITED STATES.';


	$scope.campaigns=[
	{
		classTab: 'in active',
		cTab: 'tabOne',
		campaignImg: 'Images/download2.jpg',
		campaignName: 'Campaign 1',
		campaignDescription: 'Louvar, bobtail snipe eel sand stargazer trout-perch Japanese eel, regal whiptail catfish yellowtail amberjack; tuna demoiselle ladyfish. Steve fish threadfin flashlight fish loweye catfish Black scabbardfish javelin? Swordfish redmouth whalefish Atlantic herring longfin dragonfish earthworm eel mora Old World rivuline.'
	},
	{
		cTab: 'tabTwo',
		campaignImg: 'Images/download2.jpg',
		campaignName: 'Campaign 2',
		campaignDescription:'Louvar, bobtail snipe eel sand stargazer trout-perch Japanese eel, regal whiptail catfish yellowtail amberjack; tuna demoiselle ladyfish. Steve fish threadfin flashlight fish loweye catfish Black scabbardfish javelin? Swordfish redmouth whalefish Atlantic herring longfin dragonfish earthworm eel mora Old World rivuline.'
	},
	{
		cTab: 'tabThree',
		campaignImg: 'Images/download2.jpg',
		campaignName: 'Campaign 3',
		campaignDescription: 'Louvar, bobtail snipe eel sand stargazer trout-perch Japanese eel, regal whiptail catfish yellowtail amberjack; tuna demoiselle ladyfish. Steve fish threadfin flashlight fish loweye catfish Black scabbardfish javelin? Swordfish redmouth whalefish Atlantic herring longfin dragonfish earthworm eel mora Old World rivuline.'
	}];

	$scope.pictureSlides =[
	{
		picActive: 'active',
		picLocation: 'Images/series5.jpg',
		picTitle: 'AB so COOL',
		picDescrip: 'Enjoying member time'
	},
	{
		picLocation: 'Images/series4.jpg',
		picTitle: 'AB so COOL',
		picDescrip: 'Enjoying member time'
	},
	{
		picLocation: 'Images/series3.jpg',
		picTitle: 'AB so COOL',
		picDescrip: 'Enjoying member time'
	},
	{
		picLocation: 'Images/series2.jpg',
		picTitle: 'AB so COOL',
		picDescrip: 'Enjoying member time'
	},
	{
		picLocation: 'Images/series1.jpg',
		picTitle: 'AB so COOL',
		picDescrip: 'Enjoying member time'
	}
	];

	$scope.events=[
		{
			eventImg: 'Images/download.jpg',
			eventName: 'Isang Bagsak',
			eventDescription: 'Kitty scratches couch bad kitty. Always hungry. Spit up on light gray carpet instead of adjacent linoleum sit and stare throwup on your pillow, or has closed eyes but still sees you, yet cough furball and curl up and sleep on the freshly laundered towels jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. ',
			eventDate: new Date('2017', '05', '01'),
			eventLocation: 'TBD',
			eventID: 'event1'
		},
		{
			eventImg: 'Images/download2.jpg',
			eventName: 'Just Peace PH Tour',
			eventDescription: 'Kitty scratches couch bad kitty. Always hungry. Spit up on light gray carpet instead of adjacent linoleum sit and stare throwup on your pillow, or has closed eyes but still sees you, yet cough furball and curl up and sleep on the freshly laundered towels jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. ',
			eventDate: new Date('2017', '05', '20'),
			eventLocation: 'TBD',
			eventID: 'event2'
		},
		{
			eventImg: 'Images/download3.jpg',
			eventName: 'General Meeting',
			eventDescription:'Kitty scratches couch bad kitty. Always hungry. Spit up on light gray carpet instead of adjacent linoleum sit and stare throwup on your pillow, or has closed eyes but still sees you, yet cough furball and curl up and sleep on the freshly laundered towels jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. ',			
			eventDate: new Date('2017', '05', '21'),
			eventLocation: 'TBD',
			eventID: 'event3'
		},
		{
			eventImg: 'Images/download.jpg',
			eventName: 'Banner Making Party',
			eventDescription: 'Kitty scratches couch bad kitty. Always hungry. Spit up on light gray carpet instead of adjacent linoleum sit and stare throwup on your pillow, or has closed eyes but still sees you, yet cough furball and curl up and sleep on the freshly laundered towels jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. ',
			eventDate: new Date('2017', '06', '02'),
			eventLocation: 'TBD',
			eventID: 'event4'
		},
		{
			eventImg: 'Images/download2.jpg',
			eventName: 'Karoake Night',
			eventDescription:'Kitty scratches couch bad kitty. Always hungry. Spit up on light gray carpet instead of adjacent linoleum sit and stare throwup on your pillow, or has closed eyes but still sees you, yet cough furball and curl up and sleep on the freshly laundered towels jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. ',			
			eventDate: new Date('2017', '06', '06'),
			eventLocation: 'TBD',
			eventID: 'event5'
		}
	];

}]);
