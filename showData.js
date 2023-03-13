function showDataHeadlineNews(dataHeadline) {
    return `
        <div class="card-news d-flex position-relative">
            <div class="p-3">
                <p class="mt-0 title-news fw-bold">
                    ${dataHeadline.title.substr(0, 75)}...
                </p>
                <p class="card-text">
                    <small class="text-muted">
                        Last updated ${dataHeadline.publishedAt.substr(0, 10)}
                    </small>
                </p>
                <a
                    href="${dataHeadline.url}"
                    target="_blank"
                    class="stretched-link"
                >
                </a>
            </div>
        </div>
        `;
}

function showDataSearchNews(dataNews) {
    return `
        <div class="card-news d-flex position-relative">
            <img
                src="${dataNews.urlToImage}"
                class="flex-shrink-0 me-3"
                alt="${dataNews.author}"
                style="max-width: 150px"
            />
            <div class="p-3">
                <h5 class="mt-0 title-news">
                    ${dataNews.title.substr(0, 75)}...
                </h5>
                <p>
                    ${dataNews.description.substr(0, 120)}...
                </p>
                <p class="card-text">
                    <small class="text-muted"
                        >Last updated ${dataNews.publishedAt.substr(
                            0,
                            10
                        )}</small
                    >
                </p>
                <a
                    href="${dataNews.url}"
                    target="_blank"
                    class="stretched-link btn btn-primary"
                    >Read more
                </a>
            </div>
        </div>
        `;
}

export { showDataHeadlineNews, showDataSearchNews };
