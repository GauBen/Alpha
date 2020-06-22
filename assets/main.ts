const scrollHandler = (e: Event) => {
  const scroll = document.documentElement.scrollTop;
  const total = document.documentElement.offsetHeight - window.innerHeight;
  const progress = total === 0 ? 0 : Math.min(Math.max(scroll / total, 0), 1);
  document.body.style.setProperty("--scroll", progress.toString());
}

const mouseHandler = (e: Event) => {
  const w = window.innerWidth
  const h = window.innerHeight
  const cursor: { clientX: number, clientY: number } = 'touches' in e ? e.touches[0] : e
  const x = 2 * cursor.clientX / w - 1
  const y = 2 * cursor.clientY / h - 1
  document.body.style.setProperty('--x', x)
  document.body.style.setProperty('--y', y)
}

document.addEventListener('scroll', scrollHandler, { passive: true })
document.addEventListener('resize', scrollHandler, { passive: true })
document.addEventListener('mousemove', mouseHandler, { passive: true })
document.addEventListener('touchmove', mouseHandler, { passive: true })
