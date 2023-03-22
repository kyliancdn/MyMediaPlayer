const videoCont = document.createElement('div')
document.body.append(videoCont)
const video = document.createElement('video')
document.querySelector('body > div').append(video)
const source = document.createElement('source')
video.appendChild(source)
source.src = "video/production ID_3987732.mp4"
const barCont = document.createElement('div')
videoCont.append(barCont)
barCont.setAttribute('id', 'barCont')
const bar = document.createElement('div')
bar.setAttribute('id', 'bar')
barCont.append(bar)
const playMid = document.createElement('img')
videoCont.append(playMid)
playMid.src = 'img/play-button-overlay-png-1.png'
playMid.setAttribute('id', 'playMid')
// bar.style.backgroundColor = orange

function togglePlay() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

video.onclick = function() {
    togglePlay()
}

video.addEventListener('timeupdate', function(){
    var vidPos = video.currentTime / video.duration
    bar.style.width = vidPos * 100 + '%'
})

function playIcon() {
    if(video.paused) {
        playMid.style.display = 'inline-block'
    } else { 
        playMid.style.display = 'none'
    }
}

playMid.onclick = function() {
    togglePlay()
    // playIcon()
}

video.onclick = function() {
    togglePlay()
    // playIcon()
}

function videoHover() {
    playMid.style.opacity = '1'
}

function videoNoHover() {
    playMid.style.opacity = '0'
    video.currentTime + 10 
}

videoCont.addEventListener('mouseenter', videoHover)
videoCont.addEventListener('mouseleave', videoNoHover)