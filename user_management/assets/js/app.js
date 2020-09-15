const apiUrl = 'https://reqres.in/api/users'
const proxyUrl = 'https://cors-anywhere.herokuapp.com'
const usersDisplayNode = document.getElementById('users')
const header = document.getElementById('header');



// Start observing the target node for configured mutations
observer.observe(header, {attributes: true, attributeOldValue: true});
observer.observe(usersDisplayNode, config);


const fetchUsers = async (page) => {
  let data = await (await fetch(apiUrl + `?page=${page}&per_page=3`)).json()
  return data
}

const fetchPage = page => {
  fetchUsers(page).then(response => {
    usersDisplayNode.innerHTML = ''
    displayUsers(response)
    dispalyNavigation(response)
  })
}

const dispalyNavigation = response => {
  let { page, total_pages } = response
  let buttonsDisplay = document.createElement('div')
  let prevLink = page > total_pages / total_pages ? `<button onclick="fetchPage(${(page - 1)})"><<</button>` : ''
  let nextLink = page < total_pages ? `<button onclick="fetchPage(${(page + 1)})">>></button>` : ''
  buttonsDisplay.innerHTML = prevLink + nextLink
  usersDisplayNode.appendChild(buttonsDisplay)
}

const displayUsers = (response) => {
  response.data.forEach(user => {
    let userDiv = document.createElement('div')
    userDiv.classList.add('grid-item')
    let html = `<h2>${user.first_name}</h2>`
    html += `<img src="${user.avatar}" />`
    html += `<p><a href="mailto:${user.email}">${user.email}</a></p>`
    userDiv.innerHTML = html
    usersDisplayNode.appendChild(userDiv)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  usersDisplayNode.classList.add('grid-container')
  fetchPage()
})