

   document.getElementById('children_yes').addEventListener('click', show);
   document.getElementById('children_no').addEventListener('click', hide);
 
    let height = 0;
    let cuestioner = document.getElementById('hidden');
   
   function show() {
           if (cuestioner.clientHeight == '0') {
           height = 150;
      }
       cuestioner.style.height = height + 'px';
   };

   function hide() {
       if (cuestioner.clientHeight == '150') {
           height = 0; 
       }
       cuestioner.style.height = height + 'px';
  };

