const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    //console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displaySongs(data.data))
}
// this the ul and li site is hear

// const displaySongs = songs =>{
//     const songsContainer = document.getElementById('songs-container');
//     songs.forEach(song => {
//         const li = document.createElement('li');
//         li.innerText = song.title;
//         songsContainer.appendChild(li)
//     });
// }

//this is the create a div is the js api:

const displaySongs = songs => {
    const songsContainer = document.getElementById('songs-container');
    songsContainer.innerHTML = "";
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
        </div>
            <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songsContainer.appendChild(songDiv);
    });
}
const getLyric = (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyric(data.lyrics))
}
const displayLyric = lyrics => {
    const lyricDiv = document.getElementById('song-lyrics');
    lyricDiv.innerText = lyrics;
}

// const getLyric = (artist, title) =>{
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLyric(data.lyrics))
// }
// const displayLyric = lyrics =>{
//     const lyricDiv = document.getElementById('song-lyrics');
//     lyricDiv.innerText = lyrics;
// }