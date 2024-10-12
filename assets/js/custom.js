$(document).ready(function () {
  if (!$('body').hasClass('no-buttons')) {
    $('#example').DataTable({
      dom: 'Bfrtip',
      buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5'],
    });
    setInterval(function () {
      const next = document.getElementById('example_next');
      const previous = document.getElementById('example_previous');
      previous.innerHTML = 'السابق';
      next.innerHTML = 'التالي';
    }, 12);
  }else if($('body').hasClass('search-paging')) {
    
    $('#example').DataTable({
      dom: 'Bfrtip',
      buttons: [],
      paging: true,
      searching: true,
    });
  }
  else {
    $('#example').DataTable({
      dom: 'Bfrtip',
      buttons: [],
      paging: false,
      searching: false,
    });

  }
    const returns = document.querySelector('.returns');
    const returnsValue = document.querySelector('.value')
    if(returns){
    returns.addEventListener('click', function () {
      if( this.value === 'لا') {
        this.value = 'نعم';
        returnsValue.style.display = 'block';
      }else {
        this.value = 'لا';
        returnsValue.style.display = 'none';
      }
    });
  }
    const printButton = document.querySelector('.print-button');
    if(printButton) {
      printButton.addEventListener('click', () => {
        window.print();
      })
    }
  // if($('body').hasClass('popup-allow')){
  //   const addShipping = document.querySelector('.add-shipper');
  //   const popup = document.querySelector('.pop-up');

  //   addShipping.onclick = () => {
  //     popup.classList.add('active');
  //   };

  //   popup.querySelector('.fa-times').onclick = () => {
  //     popup.classList.remove('active');
  //   };
  //   const returns = document.querySelector('.returns');
  //   const returnsValue = document.querySelector('.value')
  //   returns.addEventListener('click', function () {
  //     if( this.value === 'لا') {
  //       this.value = 'نعم';
  //       returnsValue.style.display = 'flex';
  //     }else {
  //       this.value = 'لا';
  //       returnsValue.style.display = 'none';
  //     }
  //   });
  //   const closePopup = document.querySelector('.close-popup');
  //   closePopup.onclick = () => {
  //     popup.classList.remove('active');
  //   }
  //   const editButtons = document.querySelectorAll('.edit-allowed');
  //   editButtons.forEach((editButton) => {
  //   editButton.onclick = () => {
  //   const parentRow = editButton.closest('tr');
  //   const allowEditing = parentRow.querySelectorAll('.allow-edit');

  //   if (editButton.innerHTML === 'تعديل') {
  //     editButton.innerHTML = 'حفظ';
  //   } else {
  //     editButton.innerHTML = 'تعديل';
  //     allowEditing.forEach((input) => {
  //       input.setAttribute('readonly', '');
  //     });
  //   }
  // };
  //   });
  // }
});
