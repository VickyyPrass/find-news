const loading = document.querySelector(".loading");

function showLoading() {
    loading.style.display = "inline-block";
}

function hideLoading() {
    let loadingEffect = setInterval(() => {
        if (!loading.style.opacity) {
            loading.style.opacity = 1;
        }
        if (loading.style.opacity > 0) {
            loading.style.opacity -= 0.1;
        } else {
            clearInterval(loadingEffect);
            loading.style.display = "none";
        }
    }, 200);
}

export { showLoading, hideLoading };
