document.addEventListener( "DOMContentLoaded", function() {
    textLength( 'input-textarea', 'input-textarea', 50 );
} )

function textLength( inputId, parentId, max ){
    let maxLength = max;
    let input = document.getElementById( inputId );
    let parentContainer = document.getElementById( parentId );
    let spanNumberCharacters = document.createElement( 'span' );
    spanNumberCharacters.classList.add( 'txt-length' );
    let spanNumberAllowCharacters = document.createElement( 'span' );
    spanNumberAllowCharacters.classList.add( 'txt-length-max' );
    spanNumberAllowCharacters.textContent = maxLength;

    //Determines if content is already present in the input
    if( input != null && input.value.length > 0 ){
        spanNumberCharacters.textContent = input.value.length;
    }else{
        spanNumberCharacters.textContent = 0;
    }

    //Updates the number of characters typed
    let updateLength = function(){
        let numberCharacters = input.value.length;
        spanNumberCharacters.textContent = numberCharacters;

        if( maxLength ){
            spanNumberAllowCharacters.textContent = maxLength;
            input.setAttribute( "maxlength", maxLength );

            if( numberCharacters > maxLength ){
                input.value = input.value.slice( 0, maxLength );
                spanNumberCharacters.textContent = maxLength;
            }
        }
    }
}