const searchMap: Map<String, HTMLElement[]> = new Map()
const $clubs: HTMLElement[] = document.querySelectorAll('.club')
const $datalist = document.querySelector('#datalist')
for (const $club of $clubs) {
  const terms: string[] = ($club.dataset.search as string).split(' ')
  for (const term of terms) {
    if (term.length < 2) {
      continue
    }
    if (!searchMap.has(term)) {
      searchMap.set(term, [])
    }
    searchMap.get(term).push($club)
    // Make terms that appear 2 or more times searchable
    if (searchMap.get(term).length === 2) {
      const $option = document.createElement('option')
      $option.value = term
      $datalist.appendChild($option)
    }
  }
}

const $search: HTMLInputElement = document.querySelector('#search')
$search.addEventListener('input', (e) => {
  location.hash = $search.value
})
$search.form.addEventListener('reset', (e) => { location.hash = '' })

const $counter = document.querySelector('#counter')
const updateList = () => {
  $search.value = decodeURI(location.hash.substring(1))
  if (location.hash.length <= 2) {
    let counter = 0
    for (const $club of $clubs) {
      $club.hidden = false
      counter++
    }
    updateCounter(counter)
    return
  }
  const search = decodeURI(location.hash.substring(1)).trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(' ')
  // Hide all clubs
  for (const $club of $clubs) {
    $club.hidden = true
  }
  let counter = 0
  // Find matching clubs
  searchMap.forEach(($matchingClubs, term) => {
    if (search.some(s => term.includes(s))) {
      // We found clubs matching all the search terms
      for (const $club of $matchingClubs) {
        if ($club.hidden) {
          $club.hidden = false
          counter++
        }
      }
    }
  })
  updateCounter(counter)
}
const updateCounter = (n: Number) => {
  const s = n >= 2 ? 's' : ''
  $counter.innerHTML = `<strong>${n}</strong> club${s} affiché${s}.`
}
updateList()
window.addEventListener('hashchange', (e) => updateList())
