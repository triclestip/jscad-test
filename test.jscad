function main() {
  const MIXBOARD_DIAMETER = 80
  const MIXBOARD_HEIGHT = 20

  const FILTER_DIAMETER = 8
  const FILTER_HEIGHT = 36

  const PAPERS_X = 110
  const PAPERS_Y = 26 // these are slim papers
  const PAPERS_Z = 5

  let all = []

  let mixboard = cube({
    size: [MIXBOARD_DIAMETER+4, MIXBOARD_DIAMETER+4, MIXBOARD_HEIGHT],
    center: [true, true, false]
  })
  all.push(mixboard)

  return all
}
