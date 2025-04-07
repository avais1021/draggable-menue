document.addEventListener('DOMContentLoaded' , function(){

 // bottom sheet  draggable ---------------------------------------

//  const storeBox = document.querySelector('.find-store .store_box');
 const storeBox = document.querySelector('.find_store .store_box');

 let startY = 0;
 let currentY = 0;
 let translateY = 0; // Tracks the element's position

 const minTranslate = -300; // Set minimum Y position (move up limit)
 const maxTranslate = 0;  // Set maximum Y position (move down limit)

 function onDragStart(e) {
     startY = e.touches[0].pageY; // Store starting position
 }

 function onDragMove(e) {
     e.preventDefault(); // Prevent scrolling issues

     currentY = e.touches[0].pageY;
     let deltaY = currentY - startY; // Calculate movement

     // Calculate new translateY value
     let newTranslateY = translateY + deltaY;

     // Restrict movement within the min/max range
     if (newTranslateY < minTranslate) {
         newTranslateY = minTranslate;
     } else if (newTranslateY > maxTranslate) {
         newTranslateY = maxTranslate;
     }
     
     // Apply the transformation
     e.currentTarget.style.transform = `translateY(${newTranslateY}px)`;
     
     e.currentTarget.classList.add('add_overflow')

     if(newTranslateY < 0) {
         e.currentTarget.classList.add('add_overflow')
     }else{
         e.currentTarget.classList.remove('add_overflow');
     }

     // Update translateY for smooth continuous dragging
     translateY = newTranslateY;
     startY = currentY; // Reset startY for smooth movement
 }

 // Select the element and add touch events

 if (storeBox) {
     storeBox.addEventListener('touchstart', onDragStart);
     storeBox.addEventListener('touchmove', onDragMove);
 }

    
});