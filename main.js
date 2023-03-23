const sidenavBox = document.getElementById('sidenav')
const sidenavButton = document.getElementById('sidenavbtn')
const iconBox = document.getElementById('iconbox')
const iconSingle = document.querySelectorAll('#icon-single')
const iconSingleText = document.querySelectorAll('#icon-single-text')
const socialButtons = document.getElementById('socialbtns')


const abrirMenu = () => {
  sidenavBox.classList.add('openbox')

  sidenavButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  sidenavButton.style.color = '#EC3652'
  sidenavButton.dataset.status = 'open'

  socialButtons.style.display = 'flex'

  iconBox.style.display = 'flex'

  iconSingle.forEach(element => {
    element.style.padding = '10px 0 10px 10px'
    element.style.margin = '7px 0'
  })

  iconSingleText.forEach(element => {
    element.style.display='block'
  })

  return
  
}


const abrirMenuMbl = () => {
  sidenavBox.classList.add('openboxmbl')

  sidenavButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  sidenavButton.style.color = '#EC3652'
  sidenavButton.dataset.status = 'open'

  iconBox.style.display = 'flex'

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

  socialButtons.style.display = 'none'

  sidenavButton.dataset.status = 'close'

  sidenavButton.innerHTML = '<i  class="fa-solid fa-bars-staggered"></i>'

  sidenavButton.style.color = 'var(--gray)'

  sidenavBox.classList.remove('openbox')

  return
  
}


const fecharMenuMbl = () => {

  socialButtons.style.display = 'none'
  
  iconBox.style.display = 'none'
  
  sidenavButton.dataset.status = 'close'

  sidenavButton.innerHTML = '<i  class="fa-solid fa-bars-staggered"></i>'

  sidenavButton.style.color = 'var(--gray)'

  sidenavBox.classList.remove('openboxmbl')

  return
  
}



sidenavButton.addEventListener('click', () => {
  var pageWidth = window.innerWidth

  if (sidenavButton.dataset.status === 'close'){
    if(pageWidth > 1060){
      abrirMenu()
    }
    else{
      abrirMenuMbl()
    }
    
  } 
  else {
    if(pageWidth > 1060){
      fecharMenu()
    }
    else{
      fecharMenuMbl()
    }
    
  }
})







