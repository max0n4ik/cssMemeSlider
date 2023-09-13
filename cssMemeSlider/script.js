const dots = document.querySelectorAll('.dots'),
	sliderLine = document.querySelector('.about__gallery_slayder')
let pos = 0,
	dotIndex = 0;


const nextSlide = () => {
	if (screen.width >= 1440) {
		if (pos < (dots.length - 1) * 476) {
			pos += 476
		} else {
			pos = -930
		}
	} else {
		if (pos >= -919) {
			pos -= 450
			dotIndex++
		} else {
			pos = -922
		}
	}
	sliderLine.style.left = pos + 'px'
	thisSlide(dotIndex)
}
const prevSlide = () => {
	if (screen.width >= 1440) {
		if (pos < 0) {
			pos -= 476
		} else {
			pos = 930
		}
	} else {
		if (pos != 880) {
			pos += 450
			dotIndex--
		} else {
			pos = 880
		}
	}
	sliderLine.style.left = pos + 'px'
	thisSlide(dotIndex)
}
const thisSlide = (index) => {
	for (let dot of dots) {
		dot.classList.remove('dots_active')
	}
	dots[index].classList.add('dots_active')
}

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		pos = 560 * index
		sliderLine.style.left = -pos + 'px'
		dotIndex = index
		thisSlide(dotIndex)
	})
})