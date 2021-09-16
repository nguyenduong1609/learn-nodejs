document.addEventListener('DOMContentLoaded', function () {
  var idkhoahoc;
  var deleteForm = document.forms['delete-khoahoc-form'];
  var btnDeleteKhoahoc = document.getElementById('btn-delete-khoahoc');
  var exampleModal = document.getElementById('exampleModal');
  var btnCheckbokAll = $('#checkbok-all');
  var CheckbookAllSubmitBtn = $('.checkbox-all-submit-btn');
  var btnCheckbokKhoahoc = $('input[name="khoahocs[]"]');
  exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    idkhoahoc = button.getAttribute('data-bs-id');
  });
  btnDeleteKhoahoc.onclick = function () {
    deleteForm.action = '/khoahoc/' + idkhoahoc + '?_method=DELETE';
    deleteForm.submit();
  };
  btnCheckbokAll.change(function () {
    var valuebtnCheckbokAll = $(this).prop('checked');
    btnCheckbokKhoahoc.prop('checked', valuebtnCheckbokAll);
    activeCheckbookAllSubmitBtn();
  });
  btnCheckbokKhoahoc.change(function () {
    var isCheckedAll =
      btnCheckbokKhoahoc.length ===
      $('input[name="khoahocs[]"]:checked').length;
    btnCheckbokAll.prop('checked', isCheckedAll);
    activeCheckbookAllSubmitBtn();
  });
  function activeCheckbookAllSubmitBtn() {
    var countbtnCheckbokKhoahoc = $('input[name="khoahocs[]"]:checked').length;
    if (countbtnCheckbokKhoahoc) {
      CheckbookAllSubmitBtn.removeClass('disabled');
    } else CheckbookAllSubmitBtn.addClass('disabled');
  }
});
