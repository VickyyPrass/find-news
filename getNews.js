import { showDataHeadlineNews, showDataSearchNews } from "./showData.js";
import { hideLoading } from "./loading.js";

const newsUrl =
    "https://newsapi.org/v2/everything?sortBy=relevancy&sortBy=publishedAt&apikey=999dc387a7244a4eb28079302f245880&q=";

const topHeadlinesUrl =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=999dc387a7244a4eb28079302f245880";
const inputKeyword = document.querySelector(".input-keyword");
const boxPage = document.querySelector(".pagination-box");
let pageSizeNews = 10;
let pageSizeHeadline = 5;
let currentPage = 1;

const renderDataSearchNews = async () => {
    try {
        const dataResponse = await fetch(newsUrl + inputKeyword.value);
        const response = await dataResponse.json();

        if (response.error) {
            showResponseMessage(responJSON.message);
        } else {
            const totalNews = response.totalResults;
            const news = response.articles;
            let card = "";
            const cardContainerNews = document.querySelector(".container-news");
            const textError = document.querySelector(".text-error-news");
            const prevButton = document.querySelector("#prevButton");
            const nextButton = document.querySelector("#nextButton");

            if (totalNews == 0) {
                hideLoading();
                textError.style.display = "block";
                textError.innerHTML =
                    "Sorry the data you are looking for does not exist, try another keyword";
                cardContainerNews.innerHTML = "";
                boxPage.style.display = "none";
            } else {
                // hilangkan loading
                hideLoading();
                textError.style.display = "none";

                // filter dan tampilkan data berdasarkan jumlah data
                news.filter((row, index) => {
                    let start = (currentPage - 1) * pageSizeNews;
                    let end = currentPage * pageSizeNews;

                    if (index >= start && index < end) return true;
                }).forEach((dataNews) => {
                    card += showDataSearchNews(dataNews);
                });

                // isi dan tampilkan data yang telah di dapat
                cardContainerNews.innerHTML = card;

                // munculkan pagenation
                boxPage.style.display = "block";
                prevButton.addEventListener(
                    "click",
                    function () {
                        if (currentPage > 1) {
                            currentPage--;
                            renderDataSearchNews();
                        }
                    },
                    false
                );

                nextButton.addEventListener(
                    "click",
                    function () {
                        if (currentPage * pageSizeNews < news.length) {
                            currentPage++;
                            renderDataSearchNews();
                        }
                    },
                    false
                );
            }
        }
    } catch (error) {
        showResponseMessage();
    }
};

const loadDataHeadline = async () => {
    try {
        const dataResponse = await fetch(topHeadlinesUrl);
        const response = await dataResponse.json();

        if (response.error) {
            showResponseMessage(responJSON.message);
        } else {
            const headline = response.articles;
            let cardHeadline = "";
            const cardContainerHeadlineNews = document.querySelector(
                ".container-top-headline-news"
            );

            headline
                .filter((row, index) => {
                    let start = (currentPage - 1) * pageSizeHeadline;
                    let end = currentPage * pageSizeHeadline;

                    if (index >= start && index < end) return true;
                })
                .forEach((dataHeadline) => {
                    cardHeadline += showDataHeadlineNews(dataHeadline);
                });

            cardContainerHeadlineNews.innerHTML = cardHeadline;
        }
    } catch (error) {
        showResponseMessage();
    }
};

const showResponseMessage = (
    message = "Something wrong, check your connection and try again!"
) => {
    const textError = document.querySelector(".text-error-news");
    textError.style.display = "block";
    textError.innerHTML = message;
};

export { loadDataHeadline, renderDataSearchNews };
