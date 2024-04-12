document.addEventListener("DOMContentLoaded", function() {
    textLength('input-textarea', 'input-textarea', 50);
} )

/**
 * 
 * @param {*} inputId //Id of the input where the characters will be counted
 * @param {*} parentId //Parent to which the counter will be attached (small)
 * @param {*} max //Maximum number of characters
 */
function textLength(inputId, parentId, max){
    let maxLength = max;
    let input = document.getElementById(inputId);
    let parentContainer = document.getElementById(parentId);
    let spanNumberCharacters = document.createElement('span');
    spanNumberCharacters.classList.add('txt-length');
    let spanNumberAllowCharacters = document.createElement('span');
    spanNumberAllowCharacters.classList.add('txt-length-max');
    spanNumberAllowCharacters.textContent = maxLength;

    //Determines if content is already present in the input
    if(input != null && input.value.length > 0){
        spanNumberCharacters.textContent = input.value.length;
    }else{
        spanNumberCharacters.textContent = 0;
    }

    //Updates the number of characters typed
    let updateLength = function(){
        let numberCharacters = input.value.length;
        spanNumberCharacters.textContent = numberCharacters;

        if(maxLength){
            spanNumberAllowCharacters.textContent = maxLength;
            input.setAttribute("maxlength", maxLength);

            if(numberCharacters > maxLength){
                input.value = input.value.slice(0, maxLength);
                spanNumberCharacters.textContent = maxLength;
            }
        }
    }
    
    //Create the small tag
    if(input != null){
        input.addEventListener('input', updateLength);

        //Creating the small element
        const small = document.createElement('small');
        small.classList.add('d-flex', 'info-length', 'float-end');
        small.appendChild(spanNumberCharacters);
        small.appendChild(document.createTextNode('/'));
        small.appendChild(spanNumberAllowCharacters);

        //Allows you to avoid splitting the display of small tags when you open the modal
        if(parentContainer.nextElementSibling != null && !parentContainer.nextElementSibling.classList.contains('info-length')){
            parentContainer.parentNode.insertBefore(small, parentContainer.nextSibling);
        }        
    }
}