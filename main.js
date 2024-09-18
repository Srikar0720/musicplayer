const audio = document.getElementById('audio');
const title = document.getElementById('title');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackList = document.getElementById('track-list');
const tracks = Array.from(trackList.getElementsByTagName('li'));

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.getAttribute('data-src');
    title.textContent = track.textContent;
}

function playTrack() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseTrack() {
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

tracks.forEach((track, index) => {
    track.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playTrack();
    });
});

// Load the first track initially
loadTrack(currentTrackIndex);
