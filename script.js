const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData () {
    header.innerHTML = '<img src="images/HaPpYcow.jpeg"alt="HalloweenHaPpY"></img>'
    title.innerHTML = 'Here is the one & only- HaPpY Cow!'
    excerpt.innerHTML = 'This is a picture of cuteness on Halloween Day.'
    profile_img.innerHTML = '<img src="images/HaPpY.jpeg" alt="HaPpY">'
    name.innerHTML = 'Holi-date'
    date.innerHTML = 'Oct 31, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}