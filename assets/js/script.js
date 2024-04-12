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
}