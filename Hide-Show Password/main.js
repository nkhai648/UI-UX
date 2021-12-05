const overlay = document.getElementById('input-overlay'),
    iconEye = document.getElementById('input-icon'),
    input = document.getElementById('input-password')

    iconEye.onclick = () => {
        if(input.type === 'password') {
            input.type = 'text'

            iconEye.classList.add('bx-show')
        }else {
            input.type = 'password'

            iconEye.classList.remove('bx-show')
        }

        overlay.classList.toggle('active')
    }