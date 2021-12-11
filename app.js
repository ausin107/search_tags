const input = document.querySelector('input')
const removeAll = document.querySelector('.btn-removeAll')
const searchBox = document.querySelector('.content ul')

let tags = ['nodejs','reacjs']
loadTag()

function loadTag() {
    var html = '';
    searchBox.querySelectorAll('li').forEach((item) => item.remove())
    tags.forEach((tag,index) => {
        html += `
        <li>${tag}
        <i class="uit uit-multiply" onclick="removeTag(${index})"></i>
        </li>
        `
    })
    searchBox.insertAdjacentHTML('afterbegin', html)
    input.focus();
}
input.onkeydown = function (e) {
    var input = e.target.value.trim();
    if (e.key == 'Enter') {
        if (input != '' && !tags.includes(e.target.value)) { 
            tags.push(input)
            loadTag()
            e.target.value = '';
        }
    }
}
function removeTag(index) {
    tags.splice(index,1);
    loadTag()
}
removeAll.onclick = function () {
     tags = []
     loadTag();
     input.focus();
}