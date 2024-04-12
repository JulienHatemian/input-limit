# input-limit
Small JS project giving the possibility of limiting the number of inputs in a textarea in a personalized way.


## Utility:
By using it, you won't have to worry about the number of inputs you have to type.

## How to use:
1. Include the script in your HTML file.
2. Create a textarea with an id.
3. In script.js, add in "DOMContentLoaded" the function "textLength(inputId, parentId, max)".
4. In the function, add the id of the textarea, the id of the parent element and the number of inputs you want to type.

## Example:
```
<script>
    document.addEventListener("DOMContentLoaded", function() {
        textLength("textarea", "parent", 10);

    });
</script>
```

## Update:
### 1.0.0
- Initial release

## Note:
- The project is still in development.