import data from './data.js'

const pet1= document.getElementById('pet1')
const pet2= document.getElementById('pet2')
const pet3= document.getElementById('pet3')
const pet4= document.getElementById('pet4')
const pet5= document.getElementById('pet5')
const pet6= document.getElementById('pet6')
const pet7= document.getElementById('pet7')
const pet8= document.getElementById('pet8')

const friend1= document.querySelector('.friend1')
const friend2= document.querySelector('.friend2')
const friend3= document.querySelector('.friend3')
const friend4= document.querySelector('.friend4')
const friend5= document.querySelector('.friend5')
const friend6= document.querySelector('.friend6')
const friend7= document.querySelector('.friend7')
const friend8= document.querySelector('.friend8')

const addYellowOne=()=>{
    friend1.classList.add('yellow')
}

  const removeYellowOne=()=>{
    friend1.classList.remove('yellow')
}

const addYellowTwo=()=>{
  friend2.classList.add('yellow')
}

const removeYellowTwo=()=>{
  friend2.classList.remove('yellow')
}

const addYellowThree=()=>{
  friend3.classList.add('yellow')
}

const removeYellowThree=()=>{
  friend3.classList.remove('yellow')
}

const addYellowFour=()=>{
  friend4.classList.add('yellow')
}

const removeYellowFour=()=>{
  friend4.classList.remove('yellow')
}

const addYellowFive=()=>{
  friend5.classList.add('yellow')
}

const removeYellowFive=()=>{
  friend5.classList.remove('yellow')
}

const addYellowSix=()=>{
  friend6.classList.add('yellow')
}

const removeYellowSix=()=>{
  friend6.classList.remove('yellow')
}

const addYellowSeven=()=>{
  friend7.classList.add('yellow')
}

const removeYellowSeven=()=>{
  friend7.classList.remove('yellow')
}

const addYellowEight=()=>{
  friend8.classList.add('yellow')
}

const removeYellowEight=()=>{
  friend8.classList.remove('yellow')
}

  pet1.addEventListener('mouseover', addYellowOne)
  pet1.addEventListener('mouseout', removeYellowOne)

  pet2.addEventListener('mouseover', addYellowTwo)
  pet2.addEventListener('mouseout', removeYellowTwo)

  pet3.addEventListener('mouseover', addYellowThree)
  pet3.addEventListener('mouseout', removeYellowThree)

  pet4.addEventListener('mouseover', addYellowFour)
  pet4.addEventListener('mouseout', removeYellowFour)

  pet5.addEventListener('mouseover', addYellowFive)
  pet5.addEventListener('mouseout', removeYellowFive)

  pet6.addEventListener('mouseover', addYellowSix)
  pet6.addEventListener('mouseout', removeYellowSix)

  pet7.addEventListener('mouseover', addYellowSeven)
  pet7.addEventListener('mouseout', removeYellowSeven)

  pet8.addEventListener('mouseover', addYellowEight)
  pet8.addEventListener('mouseout', removeYellowEight)

  const popUp= document.querySelector('.pop_up_sign')
  const curtain= document.querySelector('.curtain')
  const line=document.querySelectorAll('.line')
  const lineArr=Array.from(line)
  const ourPets=document.querySelector('.our_friends_pets')
  const logo=document.querySelector('.logo')
  const petsCont=document.querySelector('.petscont')


  const rotate=()=> {
    popUp.classList.toggle('poprotate')
  }
  const showCurtain=()=> {
    curtain.classList.toggle('popshow1')
  }
   const darkenPets=()=>{
    ourPets.classList.toggle('dark')
    petsCont.classList.toggle('not_only1')
  }
  const lightenPop=()=> {
    lineArr.forEach((current)=>{
      current.classList.toggle('colorpop')
    })
  }
  const activatePop1=()=>{
    rotate();
    showCurtain();
    darkenPets();
    lightenPop();
    document.body.classList.toggle('noscroll')
  }
  const removeCurtain=()=>{
    curtain.classList.add('popshow1')
    popUp.classList.remove('poprotate')
    document.body.classList.remove('noscroll')
    ourPets.classList.remove('dark')
    petsCont.classList.remove('not_only1')
    lightenPop()
  }
  popUp.addEventListener('click',activatePop1)
  curtain.addEventListener('click', removeCurtain)

  const modalWindow= document.querySelector('.modalwindow')
  const petModal=document.querySelector('.petmodal')
  const petModalDes= document.querySelector('.petmodaldes')
  const modalPetPic=document.querySelector('.modalpetpic')
  const h3AboutPet=document.querySelector('.h3aboutpet')
  const typePet=document.querySelector('.typepet')
  const breedPet=document.querySelector('.breedpet')
  const modalAboutPetNote=document.querySelector('.modalaboutpetnote')
  const age=document.querySelector('.age')
  const inoculations=document.querySelector('.inoculations')
  const diseases=document.querySelector('.diseases')
  const parasites=document.querySelector('.parasites')

  const imgArr=['katrine.png','jennifer.png','woody.png','charly.png','freddie.png','scarlett.png','sophia.png','timmy.png']

  const doNothing=(event)=>{
    event.stopPropagation()
  }

  const closeModalWindow=()=>{
    modalWindow.classList.add('showmodal')
    document.body.classList.remove('noscroll')
  }
  petModal.addEventListener('click', closeModalWindow)

  const toggleModal1=()=> {
      showPet1()
    modalWindow.classList.toggle('showmodal')
    document.body.classList.toggle('noscroll')
  }
  const toggleModal2=()=> {
    showPet2()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal3=()=> {
    showPet3()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal4=()=> {
    showPet4()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal5=()=> {
    showPet5()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal6=()=> {
    showPet6()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal7=()=> {
    showPet7()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }
  const toggleModal8=()=> {
    showPet8()
  modalWindow.classList.toggle('showmodal')
  document.body.classList.toggle('noscroll')
  }

  const showPet1=()=>{
    modalPetPic.src=`${data[0].img}`
    h3AboutPet.textContent=`${data[0].name}`
    typePet.textContent=`${data[0].type}`
    breedPet.textContent=`${data[0].breed}`
    modalAboutPetNote.textContent=`${data[0].description}`
    age.textContent=`${data[0].age}`
    inoculations.textContent=`${data[0].inoculations}`
    diseases.textContent=`${data[0].diseases}`
    parasites.textContent=`${data[0].parasites}`
  }
  const showPet2=()=>{
    modalPetPic.src=`${data[1].img}`
    h3AboutPet.textContent=`${data[1].name}`
    typePet.textContent=`${data[1].type}`
    breedPet.textContent=`${data[1].breed}`
    modalAboutPetNote.textContent=`${data[1].description}`
    age.textContent=`${data[1].age}`
    inoculations.textContent=`${data[1].inoculations}`
    diseases.textContent=`${data[1].diseases}`
    parasites.textContent=`${data[1].parasites}`
  }
  const showPet3=()=>{
    modalPetPic.src=`${data[2].img}`
    h3AboutPet.textContent=`${data[2].name}`
    typePet.textContent=`${data[2].type}`
    breedPet.textContent=`${data[2].breed}`
    modalAboutPetNote.textContent=`${data[2].description}`
    age.textContent=`${data[2].age}`
    inoculations.textContent=`${data[2].inoculations}`
    diseases.textContent=`${data[2].diseases}`
    parasites.textContent=`${data[2].parasites}`
  }
  const showPet4=()=>{
    modalPetPic.src=`${data[3].img}`
    h3AboutPet.textContent=`${data[3].name}`
    typePet.textContent=`${data[3].type}`
    breedPet.textContent=`${data[3].breed}`
    modalAboutPetNote.textContent=`${data[3].description}`
    age.textContent=`${data[3].age}`
    inoculations.textContent=`${data[3].inoculations}`
    diseases.textContent=`${data[3].diseases}`
    parasites.textContent=`${data[3].parasites}`
  }
  const showPet5=()=>{
    modalPetPic.src=`${data[4].img}`
    h3AboutPet.textContent=`${data[4].name}`
    typePet.textContent=`${data[4].type}`
    breedPet.textContent=`${data[4].breed}`
    modalAboutPetNote.textContent=`${data[4].description}`
    age.textContent=`${data[4].age}`
    inoculations.textContent=`${data[4].inoculations}`
    diseases.textContent=`${data[4].diseases}`
    parasites.textContent=`${data[4].parasites}`
  }
  const showPet6=()=>{
    modalPetPic.src=`${data[5].img}`
    h3AboutPet.textContent=`${data[5].name}`
    typePet.textContent=`${data[5].type}`
    breedPet.textContent=`${data[5].breed}`
    modalAboutPetNote.textContent=`${data[5].description}`
    age.textContent=`${data[5].age}`
    inoculations.textContent=`${data[5].inoculations}`
    diseases.textContent=`${data[5].diseases}`
    parasites.textContent=`${data[5].parasites}`
  }
  const showPet7=()=>{
    modalPetPic.src=`${data[6].img}`
    h3AboutPet.textContent=`${data[6].name}`
    typePet.textContent=`${data[6].type}`
    breedPet.textContent=`${data[6].breed}`
    modalAboutPetNote.textContent=`${data[6].description}`
    age.textContent=`${data[6].age}`
    inoculations.textContent=`${data[6].inoculations}`
    diseases.textContent=`${data[6].diseases}`
    parasites.textContent=`${data[6].parasites}`
  }
  const showPet8=()=>{
    modalPetPic.src=`${data[7].img}`
    h3AboutPet.textContent=`${data[7].name}`
    typePet.textContent=`${data[7].type}`
    breedPet.textContent=`${data[7].breed}`
    modalAboutPetNote.textContent=`${data[7].description}`
    age.textContent=`${data[7].age}`
    inoculations.textContent=`${data[7].inoculations}`
    diseases.textContent=`${data[7].diseases}`
    parasites.textContent=`${data[7].parasites}`
  }

  pet1.addEventListener('click', toggleModal1)
  pet2.addEventListener('click', toggleModal2)
  pet3.addEventListener('click', toggleModal3)
  pet4.addEventListener('click', toggleModal7)
  pet5.addEventListener('click', toggleModal8)
  pet6.addEventListener('click', toggleModal4)
  pet7.addEventListener('click', toggleModal6)
  pet8.addEventListener('click', toggleModal5)
  petModalDes.addEventListener('click', doNothing)
