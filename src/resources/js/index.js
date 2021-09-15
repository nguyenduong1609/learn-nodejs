document.addEventListener('DOMContentLoaded', function () {
  var idkhoahoc;
  var deleteForm = document.forms['delete-khoahoc-form'];
  var btnDeleteKhoahoc = document.getElementById('btn-delete-khoahoc');
  var exampleModal = document.getElementById('exampleModal');
  //   var restoreBtn = $('.btn-restore');
  exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    idkhoahoc = button.getAttribute('data-bs-id');
  });
  btnDeleteKhoahoc.onclick = function () {
    deleteForm.action = '/khoahoc/' + idkhoahoc + '?_method=DELETE';
    deleteForm.submit();
  };
  console.log('restoreBtn');
});
