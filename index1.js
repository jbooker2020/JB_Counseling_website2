const form = document.querySelector('#userForm')

const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}


const renderListItem = function(label, value) {
    const item = document.createElement('li')
    const term = document.createElement('dt')
    item.textContent = label

    const description = document.createElement('dd')
    
    try {
        description.appendChild(value)
    }catch(e) {
        description.textContent += value
    }
    item.appendChild(term)
    item.appendChild(description)
    return item
}

const renderList = function(data) {
    const list = document.createElement('dl')
    const labels = Object.keys(data)
    labels.forEach(function(label){
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    
    const f = ev.target

    const user = {
        username: f.userYame.value,
        age: f.age.value,
        favoritecolor: renderColor(f.favoriteColor.value),
    }

    const users = document.querySelector('#users')
    users.appendChild(renderList(user))

    f.reset()
    f.userYame.focus()


    



}

form.addEventListener('submit', handleSubmit)

