document.addEventListener('DOMContentLoaded', function() {
    if (document.location.pathname === "/login/index.php") {
        let box_login = document.querySelector('.login-box-block').querySelector('.row'),
            new_col = document.createElement('div');

        new_col.setAttribute('class', 'col-12 text-center');
        new_col.innerHTML =  '<a href="/blocks/online_edu/list_open_courses.php">Массовые открытые онлайн курсы</a>';
        box_login.append(new_col);
    }
})