const sidenavBox = document.getElementById('sidenav')
const sidenavButton = document.getElementById('sidenavbtn')
const iconBox = document.getElementById('iconbox')
const iconSingle = document.querySelectorAll('#icon-single')
const iconSingleText = document.querySelectorAll('#icon-single-text')
const socialButtons = document.getElementById('socialbtns')
const switchButton = document.getElementById('switch-theme')
const darkmodeBox = document.getElementById('darkmode-box')
const html = document.querySelector('html')

const darkLight = () => {
  html.classList.toggle('dark-mode')
}


const abrirMenu = () => {
  sidenavBox.classList.add('openbox')

  sidenavButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  sidenavButton.style.color = 'var(--red)'
  sidenavButton.dataset.status = 'open'

  iconBox.style.display = 'flex'

  iconSingle.forEach(element => {
    element.style.padding = '10px 0 10px 10px'
    element.style.margin = '7px 0'
  })

  iconSingleText.forEach(element => {
    element.style.display='block'
  })

  socialButtons.style.display = 'flex'

  darkmodeBox.style.display='flex'

  return
  
}


const abrirMenuMbl = () => {
  sidenavBox.classList.add('openboxmbl')

  sidenavButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  sidenavButton.style.color = 'var(--red)'
  sidenavButton.dataset.status = 'open'

  

  socialButtons.style.display = 'flex'
  socialButtons.style.position = 'static'

  iconSingle.forEach(element => {
    element.style.display = 'flex'
    element.style.padding = '10px 0 10px 10px'
    element.style.margin = '7px 15px'
  })

  iconSingleText.forEach(element => {
    element.style.display='block'
  })

  darkmodeBox.style.display='flex'
  
  iconBox.style.display = 'flex'

  return
  
}


const fecharMenu = () => {
  iconSingle.forEach(element => {
    element.style.padding = ''
    element.style.margin = '15px 0'
  })

  iconSingleText.forEach(element => {
    element.style.display='none'
  })

  sidenavButton.dataset.status = 'close'

  sidenavButton.innerHTML = '<i  class="fa-solid fa-bars-staggered"></i>'

  sidenavButton.style.color = 'var(--gray)'

  darkmodeBox.style.display='none'

  socialButtons.style.position = 'absolute'
  socialButtons.style.display = 'none'

  sidenavBox.classList.remove('openbox')

  return
  
}


const fecharMenuMbl = () => {

  socialButtons.style.display = 'none'
  
  sidenavButton.dataset.status = 'close'

  sidenavButton.innerHTML = '<i  class="fa-solid fa-bars-staggered"></i>'

  sidenavButton.style.color = 'var(--gray)'

  sidenavBox.classList.remove('openboxmbl')

  darkmodeBox.style.display='none'

  iconBox.style.display = 'none'

  return
  
}



sidenavButton.addEventListener('click', () => {
  var pageWidth = window.innerWidth

  if (sidenavButton.dataset.status === 'close'){
    if(pageWidth > 1100){
      abrirMenu()
    }
    else{
      abrirMenuMbl()
    }
    
  } 
  else {
    if(pageWidth > 1100){
      fecharMenu()
    }
    else{
      fecharMenuMbl()
    }
    
  }
})


//CRUD 

const openModal = () => {
  document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
  document.getElementById('modal').classList.remove('active')
}


const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')

  console.log(fields.innerHTML)

  fields.forEach(element => {
    element.value = ''
    return
  })
}





document.getElementById('closebtn')
        .addEventListener('click', closeModal)

document.getElementById('createbtn')
        .addEventListener('click', openModal)

document.getElementById('cancelbtn')
        .addEventListener('click', clearFields)