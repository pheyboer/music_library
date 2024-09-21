const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:
//now refactoring to ensure that functions that operate on the library object are properties of the library object
//turning them into methods on the library object


// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//notes: for...in loop to iterate through each playlist in library.playlists
//get id, name, tracks for each playlist
//for output create a string with playlist ID (ex p01:) and number of tracks
//pluralize

printPlaylists: function() {
  for (const playlistId in library.playlists) {
    const playlist = this.playlists[playlistId];
    const tracks = playlist.tracks.length;
    console.log(`${playlistId}: ${playlist.name} - ${tracks} track${tracks !== 1 ? 's' : ''}`);
  }
};

printPlaylists();





// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
//notes for procedure: used for...in to iterate over tracks in library.track
//get id name artist and album for each track
//output like above with album in brackets

printTracks: function() {
  for (const trackId in this.tracks) {
  const track = this.tracks[trackId];
  console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

printTracks();





// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// print playlist details with its tracks
//notes and procedure: check if playlist exists
//print playlist header
//print each track in the playlist

printPlaylist: function(playlistId) {
  const playlist = this.playlists[playlistId];
  if (!playlist) {
    console.log(`Playlist does not exist. ID: ${playlistId}`);
  return;
  }

  const trackCount = playlist.tracks.length;
  console.log(`${playlistId}: ${playlist.name} - ${trackCount} track${trackCount !== 1 ? 's' : ''}`);

  playlist.tracks.forEach(trackId => {
    const track = this.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  });
};

printPlaylist('p01');
printPlaylist('p02');
//function to to print playlist id
//inside the function use playlistid to access playlist from object
//check if the playlist exists
//check the length of the tracks array
//print playlist info. used trackcount to pluralize
//used forEach to loop through the tracks
//print playlist info
//after refactoring functions are invoked: library.printTracks()





// adds an existing track to an existing playlist
addTrackToPlaylist: function(trackId, playlistId) {
  const playlist = this.playlists[playlistId];
  const track = this.tracks[trackId];

  if (!playlist) {
    console.log(`No such playlist ID: ${playlistId}`);
    return;
  }

  if (!track) {
    console.log(`No such track ID: ${trackId}`);
    return;
  }

  if (playlist.tracks.includes(trackId)) {
    console.log(`Track in Playlist: ${trackId}`);
    return;
  }

  playlist.tracks.push(trackId);
  console.log(`Added track ${track.name} to playlist ${playlist.name}`);
};
//steps: function gets playlists and tracks
//check if playlist exists
//check if track exists
//check if the track is in the playlist already
//add the track to the playlist
// example: addTrackToPlaylist('t02', 'p02');







// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
addTrack: function(name, artist, album) {
  const trackId = this.generateUid();

  const newTrack = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  };

  this.tracks[trackId] = newTrack;

  console.log(`Add Track: ${newTrack.name} by ${newTrack.artist} (Album: ${newTrack.album})`);
};
//using the above generateUid we get a new ID for the track
//create a track object
//add new track to library.tracks with the generateUid as a key
//console log for the track that was added details
// call this with: addTrack("New Track", "New Artist", "New Album");




// adds a playlist to the library
addPlaylist: function(name) {
  const playlistId = this.generateUid();

  const newPlaylist = {
    id: playlistId,
    name: name,
    tracks: []
  };

  this.playlists[playlistId] = newPlaylist;

  console.log(`Added New Playlist: ${newPlaylist.name} (ID: ${playlistId})`);
};
//steps: get ID for new playlist
//create a new playlist object
// add playlist to library
//call: addPlaylist("Metal");
//new call:


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}