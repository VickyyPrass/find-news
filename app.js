import { loadDataHeadline, renderDataSearchNews } from "./getNews.js";
import { showLoading } from "./loading.js";

loadDataHeadline();
const btnSearch = document.querySelector(".search-news-button");
const inputKeyword = document.querySelector(".input-keyword");

// cari berita ketika klik button search
btnSearch.addEventListener("click", async function () {
    try {
        showLoading();
        await renderDataSearchNews();
        inputKeyword.value = "";
    } catch (error) {
        alert(error);
    }
});
