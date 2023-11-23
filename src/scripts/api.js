(function () {
    if (window.location.pathname !== "/") return

    const categories = [
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sundayreview",
        "technology",
        "theater",
        "t-magazine",
        "travel",
        "upshot",
        "us",
        "world"
    ]

    const CATEGORIES = document.querySelector('.categories')

    categories.forEach(category => {
        const CATEGORY = document.createElement('details')
        CATEGORY.className = 'category'

        CATEGORY.innerHTML = `
    <summary class="category__summary">
    <img class="category__logo" src="./images/LOGO.png">
    <h2>${category}</h2>
    <span class="material-symbols-outlined category__dropdown">chevron_right</span>
    </summary>
    `

        CATEGORY.addEventListener('click', function () {
            if (CATEGORY.querySelector('.category__dropdown').textContent.includes('chevron_right')) {
                CATEGORY.querySelector('.category__dropdown').textContent = 'expand_more'
            } else {
                CATEGORY.querySelector('.category__dropdown').textContent = 'chevron_right'
            }

            if (CATEGORY.querySelector('.category__content')) return

            fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=uZhoGPSEKtSyAp1AGwJYzO8qDAJsjMvc`)
                .then(res => res.json())
                .then(data => {
                    data.results.forEach(element => {
                        CATEGORY.innerHTML += `
                <div class='category__container'>
                <a class='category__container ' href="${element.url}">                
                <img class='category__img' src="${element.multimedia[2].url}" alt="">
                <section class='category__content'>
                <h2 class='category__headline'>${element.title} </h2>
                <p class='category__paragraph'>${element.abstract}</p>
                </section>
                </a>
                </div>
                `
                    })
                })
        })

        CATEGORIES.append(CATEGORY)
    })

})()