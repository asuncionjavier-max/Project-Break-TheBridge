// localStorage.clear()
const linkName = document.getElementById('link-name')
const url = document.getElementById('add-url')
const btnLink = document.getElementById('add-link')

let misLinks = JSON.parse(localStorage.getItem('links')) || []

function saveLink(){
    const link = document.getElementById('url-list')
    link.innerHTML = ''
    misLinks.forEach((item)=> {
    const showLink = document.createElement('li')
    showLink.innerHTML = `<a class="form" href="${item.url}" target"=_blank">${item.name}</a>`

    link.appendChild(showLink)
    
});
}

saveLink()

btnLink.addEventListener('click', (e) => {
    e.preventDefault()
    
    const nameValue = linkName.value
    const urlValue = url.value
    
    if(urlValue === '' || nameValue ===''){
        alert('Rellena los campos');
        return;
    }
    const saveLinks = {name: nameValue, url: urlValue}
    
    misLinks.push(saveLinks)
    
    localStorage.setItem('links', JSON.stringify(misLinks))
    
    saveLink()

})  