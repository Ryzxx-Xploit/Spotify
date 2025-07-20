async function search() {
  const query = document.getElementById("searchInput").value; // Ambil nilai dari input
  const token = await getAccessToken();
  const response = await fetch("https://api.spotify.com/v1/search?q=" + query + "&type=track", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    document.getElementById("result").innerHTML = "<p>❌ Failed to fetch data<p>";
    return;
  }
  
  const data = await response.json();

  if (!data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
    document.getElementById("result").innerHTML = "<p>❌ Song not found</p>";
    return;
  }

  const track = data.tracks.items[0];
  document.getElementById("result").innerHTML = `
    <h2>${track.name} - ${track.artists[0].name}</h2>
    <img src="${track.album.images[0].url}" alt="Album Art"><br><br>
    <a href="${track.external_urls.spotify}" target="_blank">
      🎵 Listen on Spotify</a>
  `;
}
