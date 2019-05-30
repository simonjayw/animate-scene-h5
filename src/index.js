import './styles'

window.onload = function () {
    var s = skrollr.init({
        smoothScrolling: true,
        // 定义常量
        // constants: {
        //     part1: 100,
        // }
        // render: function (data) {
        //     var curTop = data.curTop
        //     var direction = data.direction
        //     if (curTop === 1000) {
        //         if (direction === 'down') {
        //             var part_1 = document.querySelector('#part_1')
        //             var partEnd = document.querySelector('#part_1 .part-end')

        //             if (!partEnd) {
        //                 partEnd = document.createElement('div')
        //                 partEnd.className = 'part-end partEnd'
        //                 part_1.appendChild(partEnd)
        //             }
        //         }
        //     }
        // }
    });
}

// document.body.addEventListener('touchmove', function (e) {
//     e.preventDefault();
// }, { passive: false });
