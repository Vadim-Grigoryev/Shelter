import data from './data.js'

const petName1= document.querySelector('.petname1')

const petName2= document.querySelector('.petname2')

const petName3= document.querySelector('.petname3')

const petName4= document.querySelector('.petname4')

const namesArr=['Katrine','Jennifer','Woody','Charly','Freddie','Scarlett','Sophia','Timmy']
const prev= document.querySelector('.sliderbtn1')
const next= document.querySelector('.sliderbtn2')
const prev1= document.getElementById('btn1320')
const next1= document.getElementById('btn2320')

let nameIn1=0
let nameIn2=1
let nameIn3=2
let nameIn4=0

const changeNamePrev=()=>{
  changeName1Prev();
  changeName2Prev();
  changeName3Prev();
  changeImg1Prev();
  changeImg2Prev();
  changeImg3Prev();
}

const changeName1Prev=()=>{
  if ((nameIn1>=1)&&(nameIn1<namesArr.length)) {
    nameIn1=nameIn1-1
  }
  else
  {
    nameIn1= (namesArr.length-1)
  }
  petName1.textContent=namesArr[nameIn1]
}

const changeName2Prev=()=>{
  if ((nameIn2>=1)&&(nameIn2<namesArr.length)) {
    nameIn2=nameIn2-1
  }
  else
  {
    nameIn2=(namesArr.length-1)
  }
  petName2.textContent=namesArr[nameIn2]
}

const changeName3Prev=()=>{
  if ((nameIn3>=1)&&(nameIn3<namesArr.length)) {
    nameIn3=nameIn3-1
  }
  else
  {
    nameIn3=(namesArr.length-1)
  }
  petName3.textContent=namesArr[nameIn3]
}

const changeName4Prev=()=>{
  if ((nameIn4>=1)&&(nameIn1<namesArr.length)) {
    nameIn4=nameIn4-1
  }
  else
  {
    nameIn4= (namesArr.length-1)
  }
  petName4.textContent=namesArr[nameIn4]
}

const changeName1Next= ()=> {
  if ((nameIn1>=0)&&(nameIn1<namesArr.length-1)) {
    nameIn1=nameIn1+1
  }
  else
  {
    nameIn1=0
  }
  petName1.textContent=namesArr[nameIn1]
}

const changeName2Next= ()=> {
  if ((nameIn2>=0)&&(nameIn2<namesArr.length-1)) {
    nameIn2=nameIn2+1
  }
  else
  {
    nameIn2=0
  }
  petName2.textContent=namesArr[nameIn2]
}
const changeName3Next= ()=> {
  if ((nameIn3>=0)&&(nameIn3<namesArr.length-1)) {
    nameIn3=nameIn3+1
  }
  else
  {
    nameIn3=0
  }
  petName3.textContent=namesArr[nameIn3]
}

const changeName4Next= ()=> {
  if ((nameIn4>=0)&&(nameIn4<namesArr.length-1)) {
    nameIn4=nameIn4+1
  }
  else
  {
    nameIn4=0
  }
  petName4.textContent=namesArr[nameIn4]
}


const petPic1Img= document.querySelector('.petpic1img')
const petPic2Img= document.querySelector('.petpic2img')
const petPic3Img= document.querySelector('.petpic3img')
const petPic4Img= document.querySelector('.petpic4img')

const imgArr=['katrine.png','jennifer.png','woody.png','charly.png','freddie.png','scarlett.png','sophia.png','timmy.png']

let img1Num=0
let img2Num=1
let img3Num=2
let img4Num=0

petPic1Img.src=`pets/${imgArr[img1Num]}`
petPic2Img.src=`pets/${imgArr[img2Num]}`
petPic3Img.src=`pets/${imgArr[img3Num]}`
petPic4Img.src=`pets/${imgArr[img1Num]}`

const changeImg1Prev=()=>{
  if ((img1Num>=1)&&(img1Num<imgArr.length)) {
    img1Num=img1Num-1
  }
  else
  {
    img1Num=(imgArr.length-1)
  }
  petPic1Img.src=`pets/${imgArr[img1Num]}`
}

const changeImg2Prev=()=>{
  if ((img2Num>=1)&&(img2Num<imgArr.length)) {
    img2Num=img2Num-1
  }
  else
  {
    img2Num=(imgArr.length-1)
  }
  petPic2Img.src=`pets/${imgArr[img2Num]}`
}

const changeImg3Prev=()=>{
  if ((img3Num>=1)&&(img3Num<imgArr.length)) {
    img3Num=img3Num-1
  }
  else
  {
    img3Num=(imgArr.length-1)
  }
  petPic3Img.src=`pets/${imgArr[img3Num]}`
}

const changeImg4Prev=()=>{
  if ((img4Num>=1)&&(img4Num<imgArr.length)) {
    img4Num=img4Num-1
  }
  else
  {
    img4Num=(imgArr.length-1)
  }
  petPic4Img.src=`pets/${imgArr[img4Num]}`
}

const change320Prev=()=> {
  changeImg4Prev();
  changeName4Prev();
}

const changeImg1Next= ()=> {
  if ((img1Num>=0)&&(img1Num<imgArr.length-1)) {
    img1Num=img1Num+1
  }
  else
  {
    img1Num=0
  }
  petPic1Img.src=`pets/${imgArr[img1Num]}`
}

const changeImg2Next= ()=> {
  if ((img2Num>=0)&&(img2Num<imgArr.length-1)) {
    img2Num=img2Num+1
  }
  else
  {
    img2Num=0
  }
  petPic2Img.src=`pets/${imgArr[img2Num]}`
}
const changeImg3Next= ()=> {
  if ((img3Num>=0)&&(img3Num<imgArr.length-1)) {
    img3Num=img3Num+1
  }
  else
  {
    img3Num=0
  }
  petPic3Img.src=`pets/${imgArr[img3Num]}`
}
const changeImg4Next= ()=> {
  if ((img4Num>=0)&&(img4Num<imgArr.length-1)) {
    img4Num=img4Num+1
  }
  else
  {
    img4Num=0
  }
  petPic4Img.src=`pets/${imgArr[img4Num]}`
}
const changeNameNext=()=>{
  changeName1Next();
  changeName2Next();
  changeName3Next();
  changeImg1Next();
  changeImg2Next();
  changeImg3Next();
}

const change320Next=()=> {
  changeImg4Next();
  changeName4Next();
}

prev.addEventListener('click', changeNameNext)
next.addEventListener('click', changeNamePrev)
prev1.addEventListener('click', change320Prev)
next1.addEventListener('click', change320Next)

const firstPet= document.getElementById('firstpet')
const secondPet= document.getElementById('secondpet')
const thirdPet= document.getElementById('thirdpet')
const forthPet= document.getElementById('forthpet')

const addYellowFirst=()=>{
  petName1.classList.add('yellow')
}

const removeYellowFirst=()=>{
  petName1.classList.remove('yellow')
}

const addYellowSecond=()=>{
  petName2.classList.add('yellow')
}

const removeYellowSecond=()=>{
  petName2.classList.remove('yellow')
}

const addYellowThird=()=>{
  petName3.classList.add('yellow')
}

const removeYellowThird=()=>{
  petName3.classList.remove('yellow')
}

const addYellowForth=()=>{
  petName4.classList.add('yellow')
}

const removeYellowForth=()=>{
  petName4.classList.remove('yellow')
}

firstPet.addEventListener('mouseover', addYellowFirst)
firstPet.addEventListener('mouseout', removeYellowFirst)


secondPet.addEventListener('mouseover', addYellowSecond)
secondPet.addEventListener('mouseout', removeYellowSecond)

thirdPet.addEventListener('mouseover', addYellowThird)
thirdPet.addEventListener('mouseout', removeYellowThird)

forthPet.addEventListener('mouseover', addYellowForth)
forthPet.addEventListener('mouseout', removeYellowForth)

const popUp= document.querySelector('.pop_up_sign')
const curtain= document.querySelector('.curtain')
const logo=document.querySelector('.logo')
const story=document.querySelector('.story')
const only=document.querySelector('.not_only')
const picstart=document.querySelector('.picstart')

const rotate=()=> {
  popUp.classList.toggle('poprotate')
}
const showCurtain=()=> {
  curtain.classList.toggle('popshow1')
}
const addDark=()=>{
  logo.classList.toggle('dark');
  story.classList.toggle('dark');
  picstart.classList.toggle('dark');
  if(only.classList.contains('not_only')) {
    only.classList.remove('not_only');
    only.classList.add('not_only1')
  }
  else {
    only.classList.add('not_only');
    only.classList.remove('not_only1')
  }
}
const activatePop=()=> {
  rotate();
  showCurtain();
  addDark();
  document.body.classList.toggle('noscroll')
}
const removeCurtain=()=>{
  curtain.classList.add('popshow1')
  popUp.classList.remove('poprotate')
  document.body.classList.remove('noscroll')
  addDark()
}

popUp.addEventListener('click', activatePop)
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

const doNothing=(event)=>{
  event.stopPropagation()
}

const closeModalWindow=()=>{
  modalWindow.classList.add('showmodal')
  document.body.classList.remove('noscroll')
}
petModal.addEventListener('click', closeModalWindow)

const showPet1=()=>{
  let numberpet= namesArr.indexOf(petName1.textContent)
  if (numberpet==-1){
    numberpet=0
  }
  modalPetPic.src=`pets/${imgArr[numberpet]}`
  h3AboutPet.textContent=`${data[numberpet].name}`
  typePet.textContent=`${data[numberpet].type}`
  breedPet.textContent=`${data[numberpet].breed}`
  modalAboutPetNote.textContent=`${data[numberpet].description}`
  age.textContent=`${data[numberpet].age}`
  inoculations.textContent=`${data[numberpet].inoculations}`
  diseases.textContent=`${data[numberpet].diseases}`
  parasites.textContent=`${data[numberpet].parasites}`
}
const showPet2=()=>{
  let numberpet= namesArr.indexOf(petName2.textContent)
  if (numberpet==-1){
    numberpet=1
  }
  modalPetPic.src=`pets/${imgArr[numberpet]}`
  h3AboutPet.textContent=`${data[numberpet].name}`
  typePet.textContent=`${data[numberpet].type}`
  breedPet.textContent=`${data[numberpet].breed}`
  modalAboutPetNote.textContent=`${data[numberpet].description}`
  age.textContent=`${data[numberpet].age}`
  inoculations.textContent=`${data[numberpet].inoculations}`
  diseases.textContent=`${data[numberpet].diseases}`
  parasites.textContent=`${data[numberpet].parasites}`
}
const showPet3=()=>{
  let numberpet= namesArr.indexOf(petName3.textContent)
  if (numberpet==-1){
    numberpet=2
  }
  modalPetPic.src=`pets/${imgArr[numberpet]}`
  h3AboutPet.textContent=`${data[numberpet].name}`
  typePet.textContent=`${data[numberpet].type}`
  breedPet.textContent=`${data[numberpet].breed}`
  modalAboutPetNote.textContent=`${data[numberpet].description}`
  age.textContent=`${data[numberpet].age}`
  inoculations.textContent=`${data[numberpet].inoculations}`
  diseases.textContent=`${data[numberpet].diseases}`
  parasites.textContent=`${data[numberpet].parasites}`
}
const showPet4=()=>{
  let numberpet= namesArr.indexOf(petName4.textContent)
  if (numberpet==-1){
    numberpet=0
  }
  modalPetPic.src=`pets/${imgArr[numberpet]}`
  h3AboutPet.textContent=`${data[numberpet].name}`
  typePet.textContent=`${data[numberpet].type}`
  breedPet.textContent=`${data[numberpet].breed}`
  modalAboutPetNote.textContent=`${data[numberpet].description}`
  age.textContent=`${data[numberpet].age}`
  inoculations.textContent=`${data[numberpet].inoculations}`
  diseases.textContent=`${data[numberpet].diseases}`
  parasites.textContent=`${data[numberpet].parasites}`
}

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
petModalDes.addEventListener('click', doNothing)
firstPet.addEventListener('click', toggleModal1)
secondPet.addEventListener('click', toggleModal2)
thirdPet.addEventListener('click', toggleModal3)
forthPet.addEventListener('click', toggleModal4)



