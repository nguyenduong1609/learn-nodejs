document.addEventListener('DOMContentLoaded', function () {
  var idkhoahoc;
  var deleteForm = document.forms['delete-khoahoc-form'];
  var restoreForm = document.forms['restore-khoahoc-form'];
  var btnDeleteKhoahoc = document.getElementById('btn-delete-khoahoc');
  var exampleModal = document.getElementById('exampleModal');
  var restoreBtn = $('.btn-restore');
  exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    idkhoahoc = button.getAttribute('data-bs-id');
  });
  btnDeleteKhoahoc.onclick = function () {
    deleteForm.action = '/khoahoc/' + idkhoahoc + '/norestore?_method=DELETE';
    deleteForm.submit();
  };
  restoreBtn.click(function (e) {
    e.preventDefault();
    var khoahocIDrestore = $(this).data('id');
    restoreForm.action =
      '/khoahoc/' + khoahocIDrestore + '/restore?_method=PATCH';
    restoreForm.submit();
  });
});
