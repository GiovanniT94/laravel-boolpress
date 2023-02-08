require('./bootstrap');
require('bootstrap');

const eleOverlay = document.querySelector('.overlay');

if (eleOverlay) {
    const btnsDelete = document.querySelectorAll('.btn_delete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', function () {
            eleOverlay.classList.remove('d-none');
            baseUrl = 'http://localhost:8000/admin/';
            if (eleOverlay.querySelector('form').classList.contains('post')) {
                baseUrl += 'posts/';
            } else if (eleOverlay.querySelector('form').classList.contains('category')) {
                baseUrl += 'categories/';
            } else if (eleOverlay.querySelector('form').classList.contains('tag')) {
                baseUrl += 'tags/';
            }
            eleOverlay.querySelector('form').setAttribute('action', baseUrl + this.dataset.id);
        })
    })

    const eleBtnClose = eleOverlay.querySelector('.btn_close');

    eleBtnClose.addEventListener('click', function() {
        eleOverlay.classList.add('d-none');
    })
}
