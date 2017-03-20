function reset() {
    var blocks = document.getElementsByClassName("draggable");

    for(var i = 0; i < blocks.length; i++) {
        blocks[i].setAttribute('data-x', 0);
        blocks[i].setAttribute('data-y', 0);
        blocks[i].style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)';
        blocks[i].style.webkitTransform = 'translate(' + 0 + 'px, ' + 0 + 'px)';
    }
}
