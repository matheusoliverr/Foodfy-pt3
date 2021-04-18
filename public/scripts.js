const recipeImage = document.querySelectorAll('.recipe-img')


for(let image of recipeImage){
    const imageId = image.getAttribute("id")
    image.addEventListener("click", function(){
        window.location.href = `/recipes/${imageId}`
    })
}

const details = document.querySelectorAll('.detail')

for(let detail of details){
    const detailsTitle = detail.querySelector('.details-title')
    const content = detail.querySelector('.details-content')
    detailsTitle.querySelector('.button').addEventListener("click", function(){
        const hidden = content.classList.contains('hidden')
        if(hidden){
            content.classList.remove('hidden')
            detailsTitle.querySelector('.button').innerHTML = "ESCONDER"
        }
        else{
            content.classList.add('hidden')
            detailsTitle.querySelector('.button').innerHTML = "MOSTRAR"
        }
    }
)}

// ADMIN

const editButton = document.querySelector('.edit-button')
const recipeForm = document.querySelector(".recipe-form")

editButton.addEventListener("click", function(){
    const id = location.pathname.slice(-1)
    
    location.href = `/admin/recipes/${id}/edit`
})

const inputIngredients = recipeForm.querySelector(".input-area.ingredients")
const inputPreparation = recipeForm.querySelector(".input-area.preparation")

inputIngredients.querySelector(".add-ingredients").addEventListener("click", function(){
    const ingredientsArea = recipeForm.querySelector(".ingredients-area");
    const ingredientsInput = recipeForm.querySelectorAll(".ingredients-input");
  
    const newInput = ingredientsInput[ingredientsInput.length - 1].cloneNode(true);
  
    if(newInput.children[0].value == ""){
         return false;
    }
  
    newInput.children[0].value = "";

    ingredientsArea.appendChild(newInput);
})

inputPreparation.querySelector(".add-preparation").addEventListener("click", function(){
    const preparationArea = recipeForm.querySelector(".preparation-area");
    const preparationInput = recipeForm.querySelectorAll(".preparation-input");
  
    const newInput = preparationInput[preparationInput.length - 1].cloneNode(true);
  
    if(newInput.children[0].value == ""){
         return false;
    }
  
    newInput.children[0].value = "";

    preparationArea.appendChild(newInput);
})


inputPreparation.querySelector(".add-preparation").addEventListener("click", addInput(inputPreparation))