console.log('kong')

const videos = document.querySelectorAll('video')

videos.forEach(video => {
    video.addEventListener('play', function() {
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause()
            }
        })
    } )
})

