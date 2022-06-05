const form =  document.querySelector('#userForm')

const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.weight = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    }catch(e) {
        item.textContent += value
    }
    return item
}



const handleSubmit = function(ev){
    
    ev.preventDefault()
    const f = ev.target
    const user = {
        username: f.userYame.value,
        Age: f.age.value,
        favoritecolor: renderColor(f.favoriteColor.value),
    }

    const list = document.createElement('ul')

    const labels = Object.keys(user)

    labels.forEach(function(label){
        const item = renderListItem(label, user[label])
        list.appendChild(item)
    })

    const users = document.querySelector('#users')
    users.appendChild(list)

    f.reset()
    f.userYame.focus()

}

form.addEventListener('submit',handleSubmit)