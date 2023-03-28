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



const openModal = () => {
  document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
  document.getElementById('modal').classList.remove('active')
}


const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')

  fields.forEach(element => {
    element.value = ''
    return
  })
}

// Validar Campos

function nameValidate(){
  const nome = document.getElementById('nome')
  const nomespan = document.getElementById('nomespan')
  if(nome.value.length > 3){
    nome.style.borderColor = '#4BB543'
    nomespan.style.color = '#4BB543'
    nomespan.style.borderColor = '#4BB543'
  }
  else{
    nome.style.borderColor = '#FF9494'
    nomespan.style.color = '#FF9494'
    nomespan.style.borderColor = '#FF9494'
  }
}

function cpfValidate(){
  const cpf = document.getElementById('cpf')
  const cpfspan = document.getElementById('cpfspan')
  let cpfFormat = cpf.value
  
  if(cpfFormat.includes('.')){
    cpfFormat = cpfFormat.replace('.', '')
    cpfFormat = cpfFormat.replace('-', '')
    cpfFormat = cpfFormat.replace('.', '')
  }   

  function validarCPF(cpf) {	
    cpf = cpf.replace(/[^\d]+/g,'');	
    if(cpf == '') return false;	
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
        return false;		
    // Valida 1o digito	
    add = 0;	
    for (i=0; i < 9; i ++)		
      add += parseInt(cpf.charAt(i)) * (10 - i);	
      rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11)		
        rev = 0;	
      if (rev != parseInt(cpf.charAt(9)))		
        return false;		
    // Valida 2o digito	
    add = 0;	
    for (i = 0; i < 10; i ++)		
      add += parseInt(cpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
      rev = 0;	
    if (rev != parseInt(cpf.charAt(10)))
      return false;		
    return true;   
  }
  

  if(validarCPF(cpfFormat)){ 
    cpf.style.borderColor = '#4BB543'
    cpfspan.style.color = '#4BB543'
    cpfspan.style.borderColor = '#4BB543'
  }
  else{
    cpf.style.borderColor = '#FF9494'
    cpfspan.style.color = '#FF9494'
    cpfspan.style.borderColor = '#FF9494'
  }
}

function emailValidate(){
  const email = document.getElementById('email')
  const emailspan = document.getElementById('emailspan')
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if(emailRegex.test(email.value)){ 
    email.style.borderColor = '#4BB543'
    emailspan.style.color = '#4BB543'
    emailspan.style.borderColor = '#4BB543'
  }
  else{
    email.style.borderColor = '#FF9494'
    emailspan.style.color = '#FF9494'
    emailspan.style.borderColor = '#FF9494'
  }
}


function celularValidate(){
  const celular = document.getElementById('celular')
  const celularspan = document.getElementById('celularspan')

  if(celular.value.length > 14){ 
    celular.style.borderColor = '#4BB543'
    celularspan.style.color = '#4BB543'
    celularspan.style.borderColor = '#4BB543'
  }
  else{
    celular.style.borderColor = '#FF9494'
    celularspan.style.color = '#FF9494'
    celularspan.style.borderColor = '#FF9494'
  }
}

function enderecoValidate(){
  const endereco = document.getElementById('endereco')
  const enderecospan = document.getElementById('enderecospan')

  if(endereco.value.length > 10){ 
    endereco.style.borderColor = '#4BB543'
    enderecospan.style.color = '#4BB543'
    enderecospan.style.borderColor = '#4BB543'
  }
  else{
    endereco.style.borderColor = '#FF9494'
    enderecospan.style.color = '#FF9494'
    enderecospan.style.borderColor = '#FF9494'
  }
}














document.getElementById('closebtn')
        .addEventListener('click', closeModal)

document.getElementById('createbtn')
        .addEventListener('click', openModal)

document.getElementById('cancelbtn')
        .addEventListener('click', clearFields)





//CRUD 




