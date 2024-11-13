

const apikey = "24c0bae759564f05bd0d66628ce97407";

const listContainer = document.querySelector(".grid");



async function fectchRandomNews()
{
    try {

        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&apikey=${apikey}`;


        const respone = await fetch(apiUrl);
        const data = await respone.json();
        
        return data.articles;

    }catch(error)
    {
        console.error("Error fetching random news", error);
        return;
    }
}


(
    async () => {
        try {
            const articles = await fectchRandomNews();
    
            displayBlogs(articles);
        }catch(err)
        {
            console.error("Error fetching random news.", err)
        }
    }
    
)();


// [
//     {},
//     {},
//     {},
// ]


function displayBlogs(articles)
{
    listContainer.innerHTML = "";

    articles.forEach((article) => {

        const card = document.createElement("div");
        const img = document.createElement("img");

        card.classList.add("card");
        img.src = article.urlToImage;
        img.title = article.title;

        const title = document.createElement("h2");
        title.textContent = (article.title.length > 20)? (article.title.substring(0, 20) + "...") : article.title;

        const description = document.createElement("p");
        description.textContent = article.description;


        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);

        listContainer.appendChild(card)






    })
}

