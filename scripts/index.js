let searchParams = new URLSearchParams(window.location.search);

if (searchParams.get('name') === window.name) {
    console.log('Dat da o day');
    let interval = setInterval(() => {
        if (document.body.textContent.includes(window.name)) {

            html2canvas(document.body).then(function (canvas) {
                const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                let link = document.createElement('a');
                link.setAttribute('href', image);
                link.setAttribute('download', `${window.name}.jpg`);
                link.click();
    
                setTimeout(() => {
                    window.close();
                }, 100);
            });

            clearInterval(interval);
        }
    }, 1000);
}