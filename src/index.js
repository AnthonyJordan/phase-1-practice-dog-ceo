console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


fetch(imgUrl).then(response => response.json()).then(json => handleDogImages(json))
fetch(breedUrl).then(response => response.json()).then(json => handleDogBreeds(json))

function handleDogImages(json) {
    for (const url of json.message) {
        let img = document.createElement('img')
        img.setAttribute("src", url)
        document.getElementById('dog-image-container').appendChild(img)

    }

}

function handleDogBreeds(json) {
    for (const key in json.message) {
        let li = document.createElement('li')
        li.innerText = key
        li.addEventListener('click', e => e.target.style.color = 'green')
        document.getElementById('dog-breeds').appendChild(li)
    }
    document.getElementById("breed-dropdown").addEventListener("change", () => filterDropDown(document.getElementById("breed-dropdown").value))
    filterDropDown(document.getElementById("breed-dropdown").value)
}

function filterDropDown(option) {
    const ul = document.getElementById("dog-breeds")
    const items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {

        if (!items[i].innerText.startsWith(option)) {
            items[i].style.display = "none"
        }

        if (items[i].innerText.startsWith(option)) {
            items[i].style.display = "list-item"
        }
    }
}
