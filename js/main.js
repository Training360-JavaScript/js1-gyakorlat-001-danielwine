
const handleClick = () => {
    let buttons = document.querySelectorAll("button")
    for (let i = 0; i < 3; i++) {
        buttons[i].addEventListener('click', function() {
            console.log(this.innerHTML);
        })
    }
}
