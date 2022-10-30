
window.onmousemove = function () {
    if (document.querySelector('.OurSkills')) {
        if (window.scrollY >= document.querySelector('.OurSkills').offsetTop - 350) {
            document.querySelectorAll(".bar__progress-value").forEach((s) => {
                s.style.width = s.dataset.width;
            })
        }
    };
    if (document.querySelector('.Status')) {
        if (window.scrollY >= document.querySelector('.Status').offsetTop - 350) {
            if (document.getElementById('StatsCard04').textContent === '0') {
                document.querySelectorAll(".status__number").forEach((num) => startCount(num));
            }
        }
    };

}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}
