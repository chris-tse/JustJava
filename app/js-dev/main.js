function init () {
	var startPos = null;
	interact('.draggable').draggable({
		snap: {
			targets: [startPos],
			range: 300,
			relativePoints: [ { x: 0.5, y: 0.5 } ],
			endOnly: true
		},
		inertia: true,
		autoScroll: true,
		onstart: function (event) {
			var rect = interact.getElementRect(event.target);

			startPos = {
				x: rect.left + rect.width  / 2,
			    y: rect.top + rect.height  / 2
			};

			event.interactable.draggable({
				snap: {
					targets: []
				}
			});
		},
		onmove: dragMoveListener,
		restrict: {
			restriction: '.main-content',
			elementRect: 'top: 0, left: 0, bottom: 1, right: 1'
		},
		preventDefault: true
	});

	interact('.testdrag').draggable({
		snap: {
			targets: [startPos],
			range: 300,
			relativePoints: [ { x: 0.5, y: 0.5 } ],
			endOnly: true
		},
		inertia: true,
		autoScroll: true,
		onstart: function (event) {
			var rect = interact.getElementRect(event.target);

			startPos = {
				x: rect.left + rect.width  / 2,
			    y: rect.top + rect.height  / 2
			};

			event.interactable.draggable({
				snap: {
					targets: []
				}
			});
		},
		onmove: dragMoveListener,
		restrict: {
			restriction: 'parent',
			elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		}
	});

	function dragMoveListener (event) {
        var target = event.target,
			x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform =
		target.style.webkitTransform =
		'translate(' + x + 'px, ' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
	}

    interact('#dropzone1').dropzone({
        overlap: 0.5,
        ondropactivate: function (event) {
            event.target.classList.add('can-snap');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement  = event.target,
                dropRect         = interact.getElementRect(dropzoneElement),
                dropCenter       = {
                    x: dropRect.left + dropRect.width  / 2,
                    y: dropRect.top  + dropRect.height / 2
                };

            event.draggable.draggable({
				snap: {
                    targets: [dropCenter]
                }
            });

            event.target.classList.add('elementIn');
            event.relatedTarget.classList.remove('zone2', 'zone3');
            event.relatedTarget.classList.add('zone1');
        },
        ondragleave: function (event) {
            event.target.classList.remove('elementIn', 'snapped');
            var drop = interact.getElementRect(event.target);
            event.relatedTarget.classList.remove('zone1');
        },
        ondrop: function (event) {
            event.target.classList.add('snapped');
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('can-snap', 'elementIn');
        }
    });

    interact('#dropzone2').dropzone({
        overlap: 0.5,
        ondropactivate: function (event) {
            event.target.classList.add('can-snap');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement  = event.target,
                dropRect         = interact.getElementRect(dropzoneElement),
                dropCenter       = {
                    x: dropRect.left + dropRect.width  / 2,
                    y: dropRect.top  + dropRect.height / 2
                };

            event.draggable.draggable({
                snap: {
                    targets: [dropCenter]
                }
            });

            event.target.classList.add('elementIn');
            event.relatedTarget.classList.remove('zone1', 'zone3');
            event.relatedTarget.classList.add('zone2');
        },
        ondragleave: function (event) {
            event.target.classList.remove('elementIn', 'snapped');
            var drop = interact.getElementRect(event.target);
            event.relatedTarget.classList.remove('zone2');
        },
        ondrop: function (event) {
            event.target.classList.add('snapped');
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('can-snap', 'elementIn');
        }
    });
    interact('#dropzone3').dropzone({
        overlap: 0.5,
        ondropactivate: function (event) {
            event.target.classList.add('can-snap');
        },
        ondragenter: function (event) {

                var draggableElement = event.relatedTarget,
                    dropzoneElement  = event.target,
                    dropRect         = interact.getElementRect(dropzoneElement),
                    dropCenter       = {
                        x: dropRect.left + dropRect.width  / 2,
                        y: dropRect.top  + dropRect.height / 2
                    }

                event.draggable.draggable({
                    snap: {
                        targets: [dropCenter]
                    }
                })

            event.target.classList.add('elementIn');
            event.relatedTarget.classList.remove('zone2', 'zone1');
            event.relatedTarget.classList.add('zone3');
        },
        ondragleave: function (event) {
            event.target.classList.remove('elementIn', 'snapped', 'can-snap');
            var drop = interact.getElementRect(event.target);
            event.relatedTarget.classList.remove('zone3');
        },
        ondrop: function (event) {
            event.target.classList.add('snapped');
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('can-snap', 'elementIn');
        }
    });
}

window.onload = function () {
    init();
};
