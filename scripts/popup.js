

function popitup(url, windowName) {
    let searchParams = '?name=' + windowName;
    const newWindow = window.open(`${url}${searchParams}`, windowName, 'height=910,width=910');
    if (window.focus) {
        newWindow.focus();
    }
    return false;
}

const txhes = document.querySelector('.txh');
const url = document.querySelector('.url');
const snapShortButton = document.querySelector('.snapshot-btn');

snapShortButton.addEventListener('click', (e) => {
    if (txhes.value && url.value) {
        txhes.value.split(',').map((txh) => {
            popitup(`${url.value}${txh}`, txh);
        });
    }
});
