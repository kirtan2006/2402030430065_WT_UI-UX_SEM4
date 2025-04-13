
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchList = document.getElementById("searchList");
    let searches = ["chapter 1", "quantum physics"]; // Initial searches

    function updateSearchList() {
        searchList.innerHTML = "";
        searches.forEach((search, index) => {
            const div = document.createElement("div");
            div.classList.add("search-item");
            div.innerHTML = `
                <div class='d-flex align-items-center gap-3'>
                    <i class="fas fa-clock"></i>
                    <span class="search-text">${search}</span>
                </div>
                <i class="fas fa-times" onclick="removeSearch(${index})"></i>
            `;
            searchList.appendChild(div);
        });
    }

    window.removeSearch = function (index) {
        const items = document.querySelectorAll(".search-item");
        items[index].style.opacity = "0";
        items[index].style.transform = "translateX(-20px)";
        setTimeout(() => {
            searches.splice(index, 1);
            updateSearchList();
        }, 300);
    };

    searchInput?.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && searchInput.value.trim() !== "") {
            searches.unshift(searchInput.value.trim());
            searchInput.value = "";
            updateSearchList();
        }
    });

    updateSearchList();
});
