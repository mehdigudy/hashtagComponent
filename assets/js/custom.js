
let tags = [];
tagContainer = document.querySelector('.tag_container');
console.log(tagContainer);





/*
    @function: createTag
    @param {string} label
    @description: takes a string for span innerhtml
    , make span ,closeBtn set their attributes 
    and append them to div 
 
*/
createTag = (label) => {

    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute("data-item", label);
    closeBtn.setAttribute('class', 'material-icons');
    closeBtn.innerHTML = 'close';

    div.appendChild(span);
    div.appendChild(closeBtn);

    return div;

}





const rest = () => {

    document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    }
    );


}



/**
 * 
 *  @function: addTag
 *  @param {arry.<string>} tags
 *  @description:for every string
 *  append it to the tag container  
 */


const addTags = () => {
    rest();
    tags.slice().reverse().forEach(tag => {
        console.log(tag)
        tagContainer.prepend(createTag(tag));
    }
    );

}






/**
 * main starts here 
 */
const input = document.getElementById('input');
console.log(input);

input.addEventListener('keyup', (e) => {

    if (e.keyCode === 13 & input.value !== '') {



        tags.push(e.target.value);
        console.log(tags);
        addTags();
        input.value = '';
    }

}
);


document.addEventListener('click', (e) => {

    if (e.target.tagName === 'I') {
        const value = e.target.getAttribute('data-item');
        const index = tags.indexOf(value);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        addTags();
    }
}
);
