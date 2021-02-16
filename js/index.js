function blockChange(block) {
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = block.style.backgroundColor
    var divs = document.getElementsByClassName('item')
    for (i = 0; i < divs.length; i++) {
        divs[i].lastElementChild.style.display = 'none'
    }
    block.nextElementSibling.style.display = 'block'
}