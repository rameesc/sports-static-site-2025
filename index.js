
const menuBtn=document.getElementsByClassName("moble-menu-btn")[0]
const closeBtn=document.getElementsByClassName("moble-menu-close-btn")[0]

const menu=document.getElementsByClassName("moble-menu-container")[0]

const ourPlayersimgs=document.getElementsByClassName("our-players-imgs")[0]

const ourActivity=document.getElementsByClassName("our-activity-imgs")[0]

const galleryContainer=document.getElementsByClassName("gallery")[0]
const openInMoble=document.getElementsByClassName("open-in-moble")[0]

const headerItem= document.getElementsByClassName("header-contianer")[0]

const showIcons= document.getElementsByClassName("right-fixed")[0]

const moveToTop=document.getElementsByClassName("top-arrow-btn")[0]




//move to top 
moveToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
        
    })
})

window.addEventListener("scroll",()=>{
    
    if(window.scrollY>500){
        headerItem.style.position='fixed'
        showIcons.style.visibility='visible'
    }else{
        headerItem.style.position='relative'
         showIcons.style.visibility='hidden'
         
    }
    console.log(window.screenY)
})


function openMenu(btn){

    btn.addEventListener("click",()=>{
        // menu.classList.toggle("open-in-moble")
        openInMoble.style.visibility='visible'
    })


}

//close menu
closeBtn.addEventListener("click",()=>{
 openInMoble.style.visibility='hidden'
})

openMenu(menuBtn)


//add play images
const ourPlayersimgValue=[
    {
        id:1,
        name:"Juby Shaly John",
        activity:'Football trainer',
         image:'/assets/images/jubby.jpeg',
         link :'https://www.instagram.com/juubyy__/'

    },
    {
        id:2,
        name:"Mujeeb Rahman",
        activity:'Karate trainer',
         image:'/assets/images/MUJEEB-RAHMAN.jpeg',
          link :'https://www.instagram.com/muji_r_m_/'

    },
    {
        id:3,
        name:"Amjad",
        activity:'Swimming trainer',
          image:'/assets/images/amjath.webp',
           link :'https://www.instagram.com/coach_.amjad/'

    },
    {
        id:4,
        name:"Vishmaya Vinod p.k",
        activity:'Skating Trainer',
         image:'/assets/images/vishmaya.jpeg',
          link :'https://www.instagram.com/vismaya__skater/'

    },
    {
        id:5,
        name:"Anshid Rahman p",
        activity:'Boxing Trainer',
         image:'/assets/images/anshid.jpeg',
          link :'https://www.instagram.com/___anshid_rhn__/'

    },
    {
        id:6,
        name:"Karthik c.k",
        activity:'Gymnasty or parkour Trainer',
         image:'/assets/images/karthik.jpeg',
          link :'https://www.instagram.com/mallu_fliper/'

    },
    {
        id:7,
        name:"Safwan Panali",
        activity:'Football Trainer',
         image:'/assets/images/SAFWAN-PANALI.jpeg',
          link :'https://www.instagram.com/safwan_panali/'

    },
    {
        id:8,
        name:"Sumayya k",
        activity:'Swimming Trainer',
         image:'/assets/images/img-no.png',
          link :'https://www.instagram.com/sumayy_a__k/'

    },
]


const ourActivityData=[
    {
        id:1,
        item:"Boxing",
       
        image:'/assets/images/boxing.jpeg',
        link :'https://www.instagram.com/playsmart_sports_academy'

    },
    {
        id:2,
        item:"Swimming",
       
        image:'/assets/images/gallery7.jpg',
        link :'https://www.instagram.com/playsmart_sports_academy'

    },
    {
        id:3,
        item:"Roller Skating",
       
        image:'/assets/images/roller.jpg',
          link :'https://www.instagram.com/playsmart_sports_academy'

    },
    {
        id:4,
        item:"FootBall",
       
        image:'/assets/images/football.jpeg',
          link :'https://www.instagram.com/playsmart_sports_academy'
    },
    {
        id:5,
        item:"Karate",
       
        image:'/assets/images/karate.jpeg',
          link :'https://www.instagram.com/playsmart_sports_academy'
    },
    {
        id:6,
        item:"Gymnasty",
       
        image:'/assets/images/gymnastic.jpeg',
          link :'https://www.instagram.com/playsmart_sports_academy'
    },
]

const galleryData=[
    {
        id:1,
        image:'/assets/images/gallery1.jpeg'
    },
    {
        id:2,
        image:'/assets/images/gallery2.jpeg'
    },
    {
        id:3,
        image:'/assets/images/gallery3.jpg'
    },
    {
        id:4,
        image:'/assets/images/gallery4.webp'
    },
    {
        id:5,
        image:'/assets/images/gallery5.webp'
    },
    {
        id:6,
        image:'/assets/images/gallery6.jpg'
    },
    {
        id:7,
        image:'/assets/images/gallery7.jpg'
    },
    {
        id:6,
        image:'/assets/images/gallery8.jpeg'
    },
]


const createGallery=()=>{

   

    galleryData.forEach((gallery)=>{
        const createDivElement=document.createElement('div')
        createDivElement.className='galllery-img'
        createDivElement.id=`${gallery.id}`

        const createImgElement=document.createElement('img')
          createImgElement.src=gallery.image
          createImgElement.id=gallery.id
          createImgElement.alt='img'
       

        createDivElement.appendChild(createImgElement)

       

        if(galleryContainer){
            galleryContainer.appendChild(createDivElement)
        }else{
            console.log('gallery noy found')
        }

      
        
     
       
    })
    
}
createGallery()

const galleryImage=document.querySelectorAll('.galllery-img')
const galleryPopap=document.getElementsByClassName("gallery-popap")[0]
const closePopapBtn=document.getElementsByClassName("gallery-close")[0]
// const galleryImg=document.getElementsByClassName("gallery-image")[0]

const galleryImgConatiner=document.getElementsByClassName("gallery-img-item")[0]

const galleryNextBtn=document.getElementById("gallery-next-btn")
const galleryPreBtn=document.getElementById("gallery-pre-btn")

//close popap conatiner

if(closePopapBtn){
    closePopapBtn.addEventListener("click",()=>{
        galleryPopap.style.display='none'
    })
    

}

let currentImg;

const showPopapImage=()=>{

    galleryImage.forEach((img)=>{
       
      img.addEventListener("click",()=>{
       
        currentImg=Number(img.id)
        
        galleryImgConatiner.innerHTML=img.innerHTML
       
         galleryPopap.style.display='block'
      })
      return img
    })


}
showPopapImage()

 if(galleryNextBtn){

    galleryNextBtn.addEventListener("click",()=>{
        currentImg+=1
    
       const galleryImageLength= galleryImage.length+1
       if(currentImg >= galleryImageLength){
        currentImg=1
       }
        
       galleryData.forEach((img)=>{
         if(img.id==currentImg){
    
            const imageItem=document.getElementById(img.id)
            galleryImgConatiner.innerHTML=imageItem.innerHTML
            console.log(imageItem)
         }
      })
       
    })

 } 

 if(galleryPreBtn){

    galleryPreBtn.addEventListener("click",()=>{
        currentImg-=1
    
       
    
       if(currentImg == 1){
        currentImg=6
       }
        
       galleryData.forEach((img)=>{
         if(img.id==currentImg){
    
            const imageItem=document.getElementById(img.id)
            galleryImgConatiner.innerHTML=imageItem.innerHTML
           
         }
      })
       
    })

 }





 const addPlayesImages=(data,value,divElement)=>{
   
    //map images into ourPlayersimgs and wraping
    
    
    data.forEach((play)=>{

        //create a element
         const aElemet=document.createElement("a")
         aElemet.href=play.link
         aElemet.target="_blank"

        //create div
        const createDiv = document.createElement('div')
        createDiv.className='playerDetails'
        createDiv.id=play.id
        aElemet.appendChild(createDiv)

        //create img

         const imgElemet = document.createElement("img")
          imgElemet.src=play?.image

         createDiv.appendChild(imgElemet)

        //create h2
         const h2Element = document.createElement("h2")
           createDiv.appendChild(h2Element)

     
    
         if(divElement){
            divElement.appendChild(aElemet)
         }
    
       
     
     if(value=='player'){
        //create p
       
        const pElement = document.createElement("p")
        createDiv.appendChild(pElement)
        // divElement.appendChild(aElemet)
        pElement.innerText=play?.activity
        createDiv.className='playerDetails'
        createDiv.id=play.id+value
        h2Element.innerText=play?.name
        aElemet.appendChild(createDiv)
       
     }

     if(value=='activity'){
      

        createDiv.className='activityDetails'
        createDiv.id=play.id+value
        h2Element.innerText=play?.item
        aElemet.appendChild(createDiv)
       
     }
    
    
    })

    
}


addPlayesImages(ourPlayersimgValue,'player',ourPlayersimgs)
addPlayesImages(ourActivityData,'activity',ourActivity)


///display gallery functianality





//navigation link

const navigation=document.querySelectorAll('.nav-link')
const curretPage= window.location.pathname



if(navigation){
    navigation.forEach((link)=>{
        console.log(curretPage)

        console.log(link.getAttribute("href"))
        
      
        if(link.getAttribute("href")==curretPage){
            link.classList.add("active")
            if(curretPage=='/') return
            window.scrollBy({
                top:400,
                behavior:"smooth"
              })
            
        }
        
            
        

        
       
    })
}











