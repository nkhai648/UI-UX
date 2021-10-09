const wrapper = document.querySelector(".wrapper")
const defaultBtn = document.querySelector("#default-btn")
const fileName = document.querySelector(".file-name")
const img = document.getElementById("imgHere")
const cancelBtn = document.querySelector("#cancel-btn i")
const customBtn = document.querySelector("#custom-btn")
let regExp =/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        }
        cancelBtn .addEventListener("click",()=> {
            img.src="";
            wrapper.classList.remove("active")
        })
        reader.readAsDataURL(file)
    }
    if(this.value) {
        let valueStore = this.value.match(regExp)
        fileName.textContent = valueStore
    }
})