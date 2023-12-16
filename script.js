const previewWindow = document.querySelector('.previewWindow')
const previewButton = document.querySelectorAll('.preview')
const body = document.querySelector('body')

// To close the previews images
function closePreview() {
    previewWindow.style.transform = 'translate(-80%, 0%) scale(.1)';
    previewWindow.style.pointerEvents = 'none'
    previewWindow.style.opacity = '0'
}
document.querySelector('.previewClose').addEventListener('click', () => {
    closePreview()
})

// Previews windows content
const previewsContain = [
    { previews: '1', image: 'assets/preview1.jpg', quote: "It's not who I am underneath, but what I do that defines me"},
    { previews: '2', image: 'assets/preview2.jpg', quote: "You either die a hero, or you live long enough to see yourself become the villain" },
    {previews: '3', image: 'assets/preview3.jpg', quote: "I have one power. I never give up"}
]

// open teaser window
previewButton.forEach(button => {
    button.addEventListener('click', () => {
        closeTeaser()
        closeStoryTab()
        
        // it will set the preview content
        document.querySelector('.previewWindowImg').src = previewsContain[button.id - 1].image
        document.querySelector('.previewTitle').innerHTML = `Preview ${previewsContain[button.id - 1].previews}`
        document.querySelector('.previewQuote').innerHTML = previewsContain[button.id - 1].quote

        // preview animation
        previewWindow.style.pointerEvents = 'all'
        previewWindow.style.transform = 'translate(-50%, -50%) scale(1)';
        previewWindow.style.opacity = '1'
    })
})

// batman teaser
const teaserVideo = document.querySelector('.teaserVideo')

// teser Window Close
function closeTeaser() {
    teaserVideo.style.transform = 'translate(-20%, -10%) scale(.1)';
    teaserVideo.style.pointerEvents = 'none'
    teaserVideo.style.opacity = '0'
    document.querySelector('.youtubeVideo').src = ''
}

// close teaser window
document.querySelector('.teaserClose').addEventListener('click', () => {
    closeTeaser()
})

// Open Teaser Window
document.querySelector('.pageDivider2').addEventListener('click', () => {
    closePreview()
    closeStoryTab()

    document.querySelector('.youtubeVideo').src = 'https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&mute=1'
    
    // Teaser Window animation
    teaserVideo.style.pointerEvents = 'all'
    teaserVideo.style.transform = 'translate(-50%, -50%) scale(1)';
    teaserVideo.style.opacity = '1'
})

// Story tab
const storyTab = document.querySelector('.storyTab')
let storyTabOpen = false

function closeStoryTab() {
    document.querySelector('#story').style.setProperty('--storyAfter', '0')
    storyTab.style.right = '-60vw'
    storyTab.style.opacity = '0'
    storyTabOpen = false
}
document.querySelector('#story').addEventListener('click', () => {
    if (!storyTabOpen) {
        closePreview()
        closeTeaser()
        closeCastTab()

        document.querySelector('#story').style.setProperty('--storyAfter', '100%')
        storyTab.style.right = '0'
        storyTab.style.opacity = '1'
        storyTabOpen = true
    } else {
        closeStoryTab()
    }
})

// Cast tab
const castTab = document.querySelector('.castTab')
let castTabOpen = false

function closeCastTab() {
    document.querySelector('#cast').style.setProperty('--castAfter', '0')
    castTab.style.right = '-70vw'
    castTab.style.opacity = '0'
    castTabOpen = false
}
document.querySelector('#cast').addEventListener('click', () => {
    if (!castTabOpen) {
        closePreview()
        closeTeaser()
        closeStoryTab()

        document.querySelector('#cast').style.setProperty('--storyAfter', '100%')
        castTab.style.right = '0'
        castTab.style.opacity = '1'
        castTabOpen = true
    } else {
        closeCastTab()
    }
})

document.querySelector('#home').addEventListener('click', () => {
    closeCastTab()
    closePreview()
    closeStoryTab()
    closeTeaser()
})