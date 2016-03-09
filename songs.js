var songs = [];
var correctSongs = [];
var mainContent = document.getElementById ("yellow");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
//songs[0] = "The Wanderer> by Marc Broussard on the album Carenco" ;
//songs[songs.length] = "Hurt> by Johnny Cash on the album American IV" ;
songs.unshift("The Wanderer> by Marc Broussard on the album Carenco")
songs.push("Hurt> by Johnny Cash on the album American IV")
console.log("songs", songs);

for (var i = 0; i < songs.length; i++) {
	// Loop over the array and remove any words or characters that obviously don't belong
	// find and replace the > character in each item with a - character
	correctSongs.push(songs[i].replace(/[*@(!]/g, '').replace(/>/g, "-"));
	// Must add each string to the DOM in index.html in the main content area.
	mainContent.innerHTML += "<h2>" + correctSongs[i] + "</h2>";
}

console.log("correctSongs", correctSongs);





/************************
Each student must add one song to the beginning and the end of the array.
-adding values to the end
var array = [];
array.unshift("value1");
array.unshift("value2");
array.unshift("value3");






-adding values to the end 
var array = [];
array.push("value1");
array.push("value2");
array.push("value3");



*************************/
/*************************
Loop over the array and remove any words or characters that obviously don't belong.


Students must find and replace the > character in each item with a - character.
var name =name.replace (/[>]/g,"-")

Must add each string to the DOM in index.html in the main content area.
************************/

/*******
songs[songs.length] = "The Wanderer> by Marc Broussard on the album Carenco";

songs[songs.length] = "Aluminum > by The White Stripes on the album White Blood Cells";

songs[songs.length] = "Here I Am > by Al Green on the album Call Me";

songs[songs.length] = "Lifetime> by Maxwell on the album Now";

songs[songs.length] = "Hurt> by Johnny Cash on the album American IV";

**********/