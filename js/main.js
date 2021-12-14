var input = document.getElementById('email');
input.addEventListener('change', function(e) {
    var input2 = document.getElementById('email');
    const regex = /[a-z0-9]{5,20}[@]{1}[a-z]{3,15}[.]{1}[a-z]{2,5}/;
    if (!regex.test(input2.value)) {
        var message = document.getElementById('error-message');
        var icon = document.getElementById('error-icon');
        message.style.display = 'block';
        icon.style.display = 'block';
        message.classList.add('error-efect');
        icon.classList.add('error-efect');
        setTimeout(function() {
            var message = document.getElementById('error-message');
            var icon = document.getElementById('error-icon');
            message.classList.remove('error-efect');
            icon.classList.remove('error-efect');
        },500)
    } else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('error-icon').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }
});
document.getElementById('send').addEventListener('click', function(e) {
    e.preventDefault();
})