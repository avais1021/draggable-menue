document.addEventListener('DOMContentLoaded', function () {

    // bottom sheet  draggable menu ---------------------------------------

    const storeBox = document.querySelector('.find_store .store_box');

    let currentY = 0;
    let storeBoxHeight = 202;


    function onDragMove(e) {
        e.preventDefault(); // Prevent scrolling issues
        currentY = e.touches[0].pageY;

        // console.log(currentY, 'currentY');
        // console.log(e.touches[0].pageY,'page X');

        storeBoxHeight = window.innerHeight - currentY;

        console.log(storeBoxHeight,'storeBoxHeight');


        if (currentY < 465) {
            e.currentTarget.style.transform = `translateY(${currentY}px)`;
            e.currentTarget.style.height = `${storeBoxHeight}px`
            e.currentTarget.classList.add('add_overflow')
        }else{
            e.currentTarget.classList.remove('add_overflow');
        }
        if (currentY < 130) {
            e.currentTarget.style.transform = `translateY(${130}px)`;
            e.currentTarget.style.height = `${537}px`
        }

    }


    if (storeBox) {
        storeBox.addEventListener('touchmove', onDragMove);
    }


});