const scrollHandler = (e: Event) => {

}

const mouseHandler = (e: Event) => {

}

document.addEventListener('scroll', scrollHandler, { passive: true })
document.addEventListener('resize', scrollHandler, { passive: true })
document.addEventListener('mousemove', mouseHandler, { passive: true })
document.addEventListener('touchmove', mouseHandler, { passive: true })
