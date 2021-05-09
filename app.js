const card = document.querySelector('.card')

const shoeImg = document.querySelector(".card img")

const h2 = document.createElement('h2')
h2.innerText = "Shoe"

const paragraph = document.createElement("p")
paragraph.innerText = "NIKE: Best in the Market!"

const sizes = document.createElement("div")
sizes.classList.add("sizes")

sizes.innerHTML = "<button class='size-btn'>41</button><button class='size-btn'>42</button><button class='size-btn'>43</button><button class='size-btn'>44</button>"

const purchaseBtn = document.createElement("button")
purchaseBtn.classList.add("purchase")
purchaseBtn.innerText = "PURCHASE"

const cardContainer = document.querySelector(".card-container")




cardContainer.addEventListener("mousemove", (e)=> {
    card.style.transition= "none"
    let x = (window.innerWidth / 2 - e.pageX) / 25
    let y = (window.innerWidth / 2 - e.pageY) / 25
    card.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${x}deg)`

    shoeImg.style.transition = ".5s ease all"
    shoeImg.style.transform = "rotateZ(30deg) translateZ(200px)"
})

cardContainer.addEventListener("mouseleave", (e)=> {
    card.style.transition= ".5s ease all"
    card.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg)`

    shoeImg.style.transform = "rotateZ(0deg) translateZ(0px)"
    shoeImg.style.transform = "rotateZ(0deg) translateZ(0px)"

})

card.addEventListener("click", function(){

        const tween = new TimelineLite({onComplete: showH2})
        tween.to(card, .5, {top: "40%"})
        .to(card, .5, {width: "400px", height: "500px", borderRadius: "30px", padding: "20px"})
        
    
        function showH2(){
            card.appendChild(h2)
            const h2Tween = new TimelineLite({onComplete: showParagraph})
            h2Tween.fromTo(h2, 1, {opacity:0, y: "10px"}, {opacity:1, y: "0px"})
    
            function showParagraph(){
                card.appendChild(paragraph)
                const paraTween = new TimelineLite({onComplete: showSizes})
                paraTween.from(paragraph, 1, {opacity: 0, x: -20})
    
                function showSizes(){
                    card.appendChild(sizes)
                    const sizeBtnTween = new TimelineLite({onComplete: showPurchaseBtn})
                    
                    sizeBtnTween.from(".size-btn", 0.5, {scale: 0.1, stagger: {from: "random"}})
                    
                    function showPurchaseBtn(){
                        card.appendChild(purchaseBtn)
                        const purchaseTween = new TimelineLite({onComplete: animate3D})
                        
                        purchaseTween.from(purchaseBtn, 1, {opacity: 0})
    
                        function animate3D(){
                            cardContainer.addEventListener("mousemove", (e)=> {
                                card.style.transition= "none"
                                let x = (window.innerWidth / 2 - e.pageX) / 25
                                let y = (window.innerWidth / 2 - e.pageY) / 25
                                card.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${x}deg)`
    
                                shoeImg.style.transition = ".5s ease all"
                                h2.style.transition = ".5s ease all"
                                paragraph.style.transition = ".5s ease all"
                                sizes.style.transition = ".5s ease all"
                                purchaseBtn.style.transition = ".5s ease all"
    
    
                                shoeImg.style.transform = "rotateZ(30deg) translateZ(200px)"
                                h2.style.transform = "translateZ(150px)"
                                paragraph.style.transform = "translateZ(100px)"
                                sizes.style.transform = "translateZ(150px)"
                                purchaseBtn.style.transform = "translateZ(100px)"
                                
                            })
                            cardContainer.addEventListener("mouseleave", (e)=> {
                                card.style.transition= ".5s ease all"
                                card.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg)`
    
                                shoeImg.style.transform = "rotateZ(0deg) translateZ(0px)"
                                h2.style.transform = "translateZ(0px)"
                                paragraph.style.transform = "translateZ(0px)"
                                sizes.style.transform = "translateZ(0px)"
                                purchaseBtn.style.transform = "translateZ(0px)"
                                h2.remove()
                                paragraph.remove()
                                sizes.remove()
                                purchaseBtn.remove()
                                const removeTween = new TimelineLite()
                                removeTween.to(card, .5, {top: "50%"})
                                .to(card, .5, {width: "200px", height: "200px", borderRadius: "50%", padding: "0px"})
    
                            })
                        }
                    }
    
                }
            }
        }
    
})



