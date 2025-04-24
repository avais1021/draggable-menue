document.addEventListener('DOMContentLoaded', function () {

    // bottom sheet  draggable menu ---------------------------------------

    const storeBox = document.querySelector('.find_store .store_box');

    let currentY = 0;
    let storeBoxHeight = 202;


    function onDragMove(e) {
        e.preventDefault(); // Prevent scrolling issues
        currentY = e.touches[0].pageY;

        console.log(currentY, 'currentY');

        storeBoxHeight = window.innerHeight - currentY;

        console.log(storeBoxHeight,'storeBoxHeight');


        if (storeBoxHeight > 202) {
            e.currentTarget.closest('.store_box').style.height = `${storeBoxHeight}px`
            e.currentTarget.closest('.store_box').classList.add('add_overflow')
        }else{
            e.currentTarget.closest('.store_box').classList.remove('add_overflow');
        }
        if(storeBoxHeight > 576){
            e.currentTarget.closest('.store_box').style.height = `${576}px`;
        }
        if (storeBoxHeight < 202) {
            e.currentTarget.closest('.store_box').style.height = `${202}px`;
        }

    }


    if (storeBox) {
        dragHandle.addEventListener('touchmove', onDragMove);
    }


});