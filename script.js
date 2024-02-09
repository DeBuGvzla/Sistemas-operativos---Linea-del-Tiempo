const years = document.querySelectorAll('.year');
const infos = document.querySelectorAll('.info');
years.forEach((year, i) => {
    year.addEventListener('click', () => {
        years.forEach((year) => year.classList.remove('active'));
        year.classList.add('active');
        infos.forEach((info) => info.classList.remove('active'));
        infos[i].classList.add('active');
    });
});
