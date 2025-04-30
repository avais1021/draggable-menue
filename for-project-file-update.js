document.addEventListener('DOMContentLoaded', function () {
    
    // bottom sheet  draggable menu ---------------------------------------

    const storeBox = document.querySelector('.find_store .store_box');
    const dragHandle = document.querySelector('.find_store .drag-handle');

    const scrollableDiv = document.querySelector(".scroll_wrapper");

    // let scrollWrapperScrollPosition = 0;

    let currentY = 0;
    let storeBoxHeight = 202;

    function onDragMove(e) {
        e.preventDefault(); // Prevent scrolling issues
        currentY = e.touches[0].pageY;
        // console.log(Math.random(),'Math.random()');
        // console.log(currentY, 'currentY');

        storeBoxHeight = window.innerHeight - currentY;

        // console.log(storeBoxHeight,'storeBoxHeight');


        if (storeBoxHeight > 202) {
            e.currentTarget.closest('.store_box').style.height = `${storeBoxHeight}px`
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').classList.remove('add_overflow')
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').style.height = storeBoxHeight - 31 + "px";
        }else{
            // e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').classList.remove('add_overflow');
        }
        if(storeBoxHeight > 576){
            e.currentTarget.closest('.store_box').style.height = `${576}px`;
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').style.height = 545 + "px";
        }
        if (storeBoxHeight < 202) {
            e.currentTarget.closest('.store_box').style.height = `${202}px`;
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').style.height = 171 + "px";
        }

    }

    function onDragEnd (e) {
        console.log("touch end")

        e.preventDefault();

        console.log(storeBoxHeight,'storeBoxHeight');

        if (storeBoxHeight > 202) {
            // e.currentTarget.closest('.store_box').style.height = `${storeBoxHeight}px`
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').classList.add('add_overflow')
            // e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').style.height = storeBoxHeight - 31 + "px";
        }else{
            e.currentTarget.closest('.store_box').querySelector('.scroll_wrapper').classList.remove('add_overflow');
        }
    }


    if (storeBox) {
        dragHandle.addEventListener('touchmove', onDragMove);
        dragHandle.addEventListener('touchend', onDragEnd);
        
    }

        // scroll position ----

    // scrollableDiv.addEventListener("scroll", () => {
    //     console.log("Vertical Scroll:", scrollableDiv.scrollTop);
    //     scrollWrapperScrollPosition = scrollableDiv.scrollTop;
    // });
    
    // scrollButton.addEventListener("click", () => {
    //     // scrollableDiv.scrollTop = 500; // Scrolls 500px from the top
    //     console.log(scrollWrapperScrollPosition,'scrollWrapperScrollPosition');
    //   });


});