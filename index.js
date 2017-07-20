function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var children = document.querySelectorAll('#grand-node div')
  return children[children.length - 1]
}

function increaseRankBy(n) {
  document.querySelectorAll('.ranked-list li').forEach(li => {
    li.innerHTML = parseInt(li.innerHTML, 10) + n
  });
}
