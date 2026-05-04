
const linkName = document.getElementById('link-name')
const url = document.getElementById('add-url')
const btnLink = document.getElementById('add-link')

let misLinks = JSON.parse(localStorage.getItem('links')) || []

btnLink.addEventListener('click', (e) => {
e.preventDefault()

const nameValue = linkName.value
const urlValue = url.value

if(urlValue === '' || nameValue ===''){
    alert('Rellena los campos')
}
const saveLinks = {name: nameValue, url: urlValue}

misLinks.push(saveLinks)

localStorage.setItem('links', JSON.stringify(misLinks))

})  