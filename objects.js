var playlist = {
  RHCP:  'Californication'
}
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
