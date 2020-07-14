const scrollHandler = () => {
  requestAnimationFrame(() =>
    document.body.style.setProperty(
      '--parallax',
      (window.scrollY / window.innerHeight).toString()
    ), 0
  )
}
scrollHandler()

const computeOffsetTop = () => {
  for (const $el of document.querySelectorAll('._parallax')) {
    let offset = $el.offsetTop - window.innerHeight / 2 + $el.offsetHeight / 2
    let $parent = $el.offsetParent
    while ($parent && 'offsetParent' in $parent) {
      offset += $parent.offsetTop
      $parent = $parent.offsetParent
    }
    $el.style.setProperty(
      '--offset',
      (offset / window.innerHeight).toString()
    )
  }
}
computeOffsetTop()

window.addEventListener('scroll', e => scrollHandler(), { passive: true })
window.addEventListener('resize', e => { computeOffsetTop(); scrollHandler() }, { passive: true })
new ResizeObserver(computeOffsetTop).observe(document.body)

const mouseHandler = (e: MouseEvent | TouchEvent) => {
  const w = window.innerWidth
  const h = window.innerHeight
  const cursor = 'touches' in e ? e.touches[0] : e
  const x = 2 * cursor.clientX / w - 1
  const y = 2 * cursor.clientY / h - 1
  document.body.style.setProperty('--x', x)
  document.body.style.setProperty('--y', y)
}

document.addEventListener('mousemove', mouseHandler, { passive: true })
document.addEventListener('touchmove', mouseHandler, { passive: true })
