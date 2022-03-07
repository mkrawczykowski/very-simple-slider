$( document ).ready(function() {
	let x = 0;
	const ileSlajdow = 5;
	const slajdyLI = $('.slajder ul li');
	
	slajdyLI.first().toggleClass('prawaSrodek');
	
	
	$('.doprzodu').on('click', function(){
		console.log('x: ' + x);
		console.log('ileSlajdow: ' + ileSlajdow);		
		
		if (x < ileSlajdow-1){
			
			x++;
			
			slajdyLI.each(function(indexLi, li) {
				
				if ($(li).hasClass('lewaSrodek')){
					$(this).toggleClass('lewaSrodek');
					$(this).addClass('srodekLewa');
				}

				if ($(li).hasClass('prawaSrodek')){
					$(this).toggleClass('prawaSrodek');
					$(this).addClass('srodekLewa');
				}			

				if (indexLi == x){
					$(this).removeClass('srodekPrawa');
					$(this).removeClass('srodekLewa');
					$(this).toggleClass('prawaSrodek');
				}
					
			});			
		}
		

		


	});
	
	
	$('.dotylu').on('click', function(){
		console.log('x: ' + x);
		console.log('ileSlajdow: ' + ileSlajdow);
		
		if (x >= 1){
			
			x--;
			
			slajdyLI.each(function(indexLi, li) {
				
				if ($(li).hasClass('prawaSrodek')){
					$(this).toggleClass('prawaSrodek');
					$(this).addClass('srodekPrawa');
				}

				if ($(li).hasClass('lewaSrodek')){
					$(this).toggleClass('lewaSrodek');
					$(this).addClass('srodekPrawa');
				}			

				if (indexLi == x){
					$(this).removeClass('srodekPrawa');
					$(this).removeClass('srodekLewa');
					$(this).toggleClass('lewaSrodek');
				}
				
			});			
		}
		


	});

});