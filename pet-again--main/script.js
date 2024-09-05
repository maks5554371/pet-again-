document.addEventListener('DOMContentLoaded', function () {
    let contactsButton = document.getElementById('contactsButton');
    contactsButton.addEventListener('click', function (e) {
        e.preventDefault(); // говорим ссылке что бы шла куда подальше и не перекидывала
        let contactsModal = new bootstrap.Modal(document.getElementById('contactsModal'));
        contactsModal.show();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let instaButton = document.getElementById('instaButton');
    instaButton.addEventListener('click', function (e) {
        e.preventDefault(); // говорим ссылке что бы шла куда подальше и не перекидывала
        let instaModal = new bootstrap.Modal(document.getElementById('instaModal'));
        instaModal.show();
    });
});