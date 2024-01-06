let rubrica = {

    contatti: [ {nome: 'Francesco', telefono: '3341231231'},
                {nome: 'Luana', telefono: '3341901231'},
                {nome: 'Michele', telefono: '3343120931'},
                {nome: 'Paola', telefono: '3342347831'},
                {nome: 'Miriam', telefono: '3341231231'},
                {nome: 'Gianluca', telefono: '3361231235'},
                {nome: 'Franco', telefono: '3369120935'},
                {nome: 'Michelangelo', telefono: '3361231235'},
                {nome: 'Laura', telefono: '3309001235'},
                {nome: 'Lara', telefono: '3360931235'},


           ],


    visualizza: function(){
        return this.contatti
    },

    showContacts: function(contacts = this.contatti){

        let wrapper = document.querySelector('#contacts-wrapper') 
        wrapper.innerHTML = ''
        contacts.forEach(contact =>{

            let contactCard = document.createElement('div')
            contactCard.classList.add('col-12','contact-card', 'fw-bold', 'ms-3', 'mb-3')
            contactCard.innerHTML = `    <div class="d-flex justify-content-between">
                                         <i class="far fa-user fw-bold fs-5 mb-2 "></i>
                                         <button class="btn bottoncino-delete" data-delete="${contact.nome}"><i class="fas fa-minus-circle mb-2 fs-5 fw-bold"></i></button>
                                         </div>

                                         <h5>Utente: <span class="fw-bold">${contact.nome}</span></h5>
                                         <h5>Telefono: <span class="fw-bold">${contact.telefono}</span></h5>
                    
                                        
                                     `
            wrapper.appendChild(contactCard)
            


        })

        let deleteButtons = document.querySelectorAll('.bottoncino-delete')
        deleteButtons.forEach(btn =>{
            btn.addEventListener('click', function(){
                let name = btn.getAttribute('data-delete')
                rubrica.deleteContact(name)
            })
        })



        // console.log(result)
    },

    inserimento: function(name, phone){
        let nuovoContatto = {nome: name, telefono: phone}
        this.contatti.push(nuovoContatto)
    
    },

    addContact: function(name,phone){
        let contact = {name: name, phone:phone}
        this.contatti.push(contact)
    },

    editContact: function(name,phone){
        this.contatti.forEach((contact) =>{
            if(contact.nome.toLowerCase() === name.toLowerCase()){
                contact.telefono = phone
            }
        })
    },

    deleteContact: function(name){
        this.contatti.forEach((el, i)=>{
            if(el.nome.toLowerCase() == name.toLowerCase()){
                this.contatti.splice(i, 1)
            }
        })
        this.showContacts()
    },

    searchContact: function(name){
       let filtered = this.contatti.filter(contact => contact.nome.toLowerCase().includes(name.toLowerCase()))
       this.showContacts(filtered)
    }


}    

// console.log(rubrica.visualizza()); 
// rubrica.showContacts() 
// rubrica.inserimento('Mario', '3456531212')
// rubrica.editContact('Mario', '3331112234')
// rubrica.removeContact('Luana');
// rubrica.searchContact('Francesco')





let btnShowContacts = document.querySelector('#btn-show-contacts')
let btnAddContact = document.querySelector('#btn-add-contact')
let btnEditContact = document.querySelector('#btn-edit-contact')
let btnDeleteContact = document.querySelector('#btn-delete-contact')
let btnSearchContact = document.querySelector('#btn-search-contact')


btnShowContacts.addEventListener('click', function(){
    rubrica.showContacts()
})

btnAddContact.addEventListener('click', function(){
    let nameInput = document.querySelector('#add-contact-name')
    let phoneInput = document.querySelector('#add-contact-phone')
    
    rubrica.inserimento(nameInput.value, phoneInput.value)
    nameInput.value = ''
    phoneInput.value=''
    rubrica.showContacts()
    
    
    
})


btnEditContact.addEventListener('click', function(){
    let nameInput = document.querySelector('#edit-contact-name')
    let phoneInput = document.querySelector('#edit-contact-phone')
    
    rubrica.editContact(nameInput.value, phoneInput.value)
    nameInput.value = ''
    phoneInput.value=''
    rubrica.showContacts()
    
    
    
})

btnDeleteContact.addEventListener('click', function(){
    let nameInput = document.querySelector('#delete-contact-name')
    rubrica.deleteContact(nameInput.value)
    nameInput.value = ''
    rubrica.showContacts()
    
    
    
})


let searchInput = document.querySelector('#search-contact-name')


searchInput.addEventListener('input', function(){
    let nameInput = document.querySelector('#search-contact-name')
    rubrica.searchContact(nameInput.value)
   
})

btnSearchContact.addEventListener('click', function(){
    let nameInput = document.querySelector('#search-contact-name')
    rubrica.searchContact(nameInput.value)
    nameInput.value=""
   
})









