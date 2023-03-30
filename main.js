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



const openModal = (topValue) => {
  document.getElementById('modal').style.top = topValue
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

function nomeValidate(){
  const nome = document.getElementById('nome')
  const nomespan = document.getElementById('nomespan')
  if(nome.value.length > 3){
    nome.style.borderColor = '#4BB543'
    nomespan.style.color = '#4BB543'
    nomespan.style.borderColor = '#4BB543'
    return true
  }
  else{
    nome.style.borderColor = '#FF9494'
    nomespan.style.color = '#FF9494'
    nomespan.style.borderColor = '#FF9494'
    return false
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
    return true
  }
  else{
    cpf.style.borderColor = '#FF9494'
    cpfspan.style.color = '#FF9494'
    cpfspan.style.borderColor = '#FF9494'
    return false
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
    return true
  }
  else{
    email.style.borderColor = '#FF9494'
    emailspan.style.color = '#FF9494'
    emailspan.style.borderColor = '#FF9494'
    return false
  }
}


function telefoneValidate(){
  const telefone = document.getElementById('telefone')
  const telefonespan = document.getElementById('telefonespan')

  if(telefone.value.length > 14){ 
    telefone.style.borderColor = '#4BB543'
    telefonespan.style.color = '#4BB543'
    telefonespan.style.borderColor = '#4BB543'
    return true
  }
  else{
    telefone.style.borderColor = '#FF9494'
    telefonespan.style.color = '#FF9494'
    telefonespan.style.borderColor = '#FF9494'
    return false
  }
}

function enderecoValidate(){
  const endereco = document.getElementById('endereco')
  const enderecospan = document.getElementById('enderecospan')

  if(endereco.value.length > 10){ 
    endereco.style.borderColor = '#4BB543'
    enderecospan.style.color = '#4BB543'
    enderecospan.style.borderColor = '#4BB543'
    return true
  }
  else{
    endereco.style.borderColor = '#FF9494'
    enderecospan.style.color = '#FF9494'
    enderecospan.style.borderColor = '#FF9494'
    return false
  }
}


// Change Language

/* 

var dataEnglish = {

  "configSectionTitle" : "Settings",
  "IconSingleText0" : "Database"

}

var dataPortugues = {

  "configSectionTitle" : "Configurações"

}

function changeLanguage(){
  const pEng = document.getElementById('p-eng')
  const pPtbr = document.getElementById('p-ptbr')
  const inputSwitchLanguage = document.getElementById('switch-language')

  const configSectionTitle = document.getElementById('configSectionTitle')
  
  const IconSingleText = document.querySelectorAll('icon-single-text')

  if(inputSwitchLanguage.checked){
    pPtbr.style.color = 'var(--permanent-light)'
    pEng.style.color = 'var(--primary)'

    configSectionTitle.textContent = dataEnglish.configSectionTitle

    IconSingleText[0].textContent = dataEnglish.IconSingleText0


  }
  else{
    pPtbr.style.color = 'var(--primary)'
    pEng.style.color = 'var(--permanent-light)'

    configSectionTitle.textContent = dataPortugues.configSectionTitle
  }
  
}

*/

//CRUD 

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbclient) => localStorage.setItem('db_client', JSON.stringify(dbclient))


// Create

const createRow = (client, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td data-label="Nome:">${client.nome}</td>
    <td data-label="Cpf:">${client.cpf}</td>
    <td data-label="E-mail:">${client.email}</td>
    <td data-label="Telefone:">${client.telefone}</td>
    <td data-label="Endereço:">${client.endereco}</td>
    <td data-label="Ação:"><button type="button" class="edit database-btn" id="edit-${index}">Editar</button>
      <button type="button" class="delete database-btn" id="delete-${index}">Excluir</button></td>
  `
  document.querySelector('#database>tbody').appendChild(newRow)
}

const clearTable = () => {
  const rows = document.querySelectorAll('#database>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push(client)
  setLocalStorage(dbClient)
}


const saveClient = () => {

  if(nomeValidate() && cpfValidate() && emailValidate() && telefoneValidate() && enderecoValidate()){
    const client = {
      nome: document.getElementById('nome').value,
      cpf: document.getElementById('cpf').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      endereco: document.getElementById('endereco').value,
    }

    const dataIndex = document.getElementById('cpf').dataset.index

    if(getLocalStorage().some(cl => cl.cpf === client.cpf && dataIndex == 'new')){
      showMessage('CPF já cadastrado', 'error')
      clearFields()
      return
    }

    if(getLocalStorage().some((cl, index) => cl.cpf === client.cpf && dataIndex != index) && dataIndex !== 'new'){
      showMessage('CPF já cadastrado', 'error')
      return
    }

    if(dataIndex === 'new'){
      createClient(client)
      showMessage('Cliente cadastrado com Sucesso', 'success')
      clearFields()
      updateTable()
    }
    else{
      updateClient(dataIndex, client)
      updateTable()
      closeModal()
      showMessage('Cliente Editado com Sucesso', 'success')
    }


  }


}





// Read

const updateTable = () => {
  const dbClient = getLocalStorage()
  clearTable()
  dbClient.forEach(createRow)
}


updateTable()








// Update

const updateClient = (index, client) => {
  const dbClient = getLocalStorage()
  dbClient[index] = client

  setLocalStorage(dbClient)
}

const fillFields = (client, indexInArray) => {
  document.getElementById('nome').value = client.nome
  document.getElementById('cpf').value = client.cpf
  document.getElementById('email').value = client.email
  document.getElementById('telefone').value = client.telefone
  document.getElementById('endereco').value = client.endereco
  document.getElementById('cpf').dataset.index = indexInArray
}

const editClient = (index) => {
  const client = getLocalStorage()[index]
  const indexInArray = index
  fillFields(client, indexInArray)
  var topValue
  document.getElementById('modal-type-title').textContent = 'Editar um Cliente'

  if(window.innerWidth < 1110){
    if(index == 0){
      topValue = 25
    }
    else{
      topValue = index * 36
    }
    openModal(`${topValue}%`)
  }
  else{
    openModal(``)
  }
  
}

const editDelete = (event) => {
  if(event.target.type == 'button'){
    
  
    const [action, index] = event.target.id.split('-')

    if (action == 'edit'){
      editClient(index)
    }
    else {
      const client = getLocalStorage()[index]
      const response = confirm(`Deseja Realmente excluir o cliente ${client.nome}`)
      if (response){
        deleteClient(index)
        updateTable()
        return
      }
      
    }
  }
  
}


// Delete

const deleteClient = (index) => {
  const dbClient = getLocalStorage()
  dbClient.splice(index,1)

  setLocalStorage(dbClient)

}


// Message Function

const showMessage = (message, typeofmessage) => {
  const notification = document.querySelector('.notification')

  if (typeofmessage == 'success'){
    notification.style.backgroundColor = '#58b3525b'
    notification.style.color = '#4e934a'
    notification.classList.add('show')

    notification.querySelector('p').textContent = message

    setTimeout(() => {
      notification.classList.remove('show')
    }, 6000)

    return
  }

  if (typeofmessage == 'error'){
    notification.style.backgroundColor = '#ff33338e'
    notification.style.color = '#831919'
    notification.style.borderLeft = '5px solid #831919'
    notification.classList.add('show')

    notification.querySelector('i').classList.remove('fa-circle-check')
    notification.querySelector('i').classList.add('fa-circle-exclamation')

    notification.querySelector('p').textContent = message

    setTimeout(() => {
      notification.classList.remove('show')
    }, 6000)
    return
  }
}



// Eventos

document.getElementById('closebtn')
        .addEventListener('click', closeModal)

document.getElementById('createbtn').addEventListener('click', () => {
  document.getElementById('modal-type-title').textContent = 'Cadastar um Cliente'
  clearFields()
  openModal('25%')
})

document.getElementById('cancelbtn')
        .addEventListener('click', clearFields)

document.getElementById('submitbtn')
        .addEventListener('click', saveClient)

document.querySelector('#database>tbody')
        .addEventListener('click', editDelete)




