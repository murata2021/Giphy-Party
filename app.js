console.log("Let's get this party started!");

const form=document.querySelector("#gifForm")
const input=document.querySelector("#search")
const gifDiv=document.querySelector("#gifs")
const removeButton=document.querySelector("#removeButton")

const container=document.querySelector(".container")

form.addEventListener("submit",function(e){
    e.preventDefault()
    makeGif(input.value)
    input.value=''
    
})

container.addEventListener("click",function(event){

    if (event.target.tagName==="IMG"){
        event.target.parentElement.remove()
    }
})

removeButton.addEventListener("click",function(e){
    gifDiv.innerHTML=''
})

async function makeGif(q){

    const response=await axios("http://api.giphy.com/v1/gifs/search",{params:{q,api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    // console.log(response.data.data)
    // console.log(response.data.data.length)
    const gif=response.data.data[Math.floor(Math.random()*50)]
    console.log(gif.images.original.url)   //random gif picked from the database based on the user search e.g hilarious

    const div=document.createElement("div")
    div.classList.add("col")

    const image=document.createElement("img")
    image.src=gif.images.original.url

    div.appendChild(image)

    gifDiv.appendChild(div)
    
}

