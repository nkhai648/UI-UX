// TODO: CLOCK 
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
    
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000)

// TODO: CLOCK & DATE TEXT 
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPm = document.getElementById('text-ampm'),

    dateWeek = document.getElementById('date-day-week'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm = date.getMinutes(),
        day = date.getDate(),
        dayWeek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()

    // ! Thay đổi 24h => 12h / ngày để xác định PM hay AM
    if(hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    }else {
        ampm = 'AM'
    }

    // ! Khi 0h sáng sẽ đổi thành 12h AM
    if(hh == 0) {
        hh = 12
    }

    // ! Show số 0 đằng trước giờ
    if(hh < 10) {
        hh = `0${hh}`
    }

    // ! Show số 0 đằng trước phút
    if(mm < 10) {
        mm = `0${mm}`
    }

    // ! Show time
    textHour.innerHTML = `${hh}:`

    // ! Show minutes
    textMinutes.innerHTML = mm

    // ! Show AM - PM 
    textAmPm.innerHTML = ampm

    //* Tên các tháng trong năm
    let months = ['Tháng 1','Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']

    //* Tên các ngày trong tuần
    let week = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật']

    // ! Show ngày trong tuần
    dateWeek.innerHTML = `${week[dayWeek]},`

    // ! Show ngày
    dateDay.innerHTML = day

    // ! Show tháng
    dateMonth.innerHTML = `${months[month]}`

    // ! Show năm
    dateYear.innerHTML = year
}
setInterval(clockText, 1000)

// TODO : DARK/LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Lưu trữ chủ đề hiện tại (nếu người dùng đã chọn)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Có được chủ đề hiện tại mà giao diện có bằng cách xác thực lớp chủ đề tối
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// Xác nhận nếu người dùng trước đó đã chọn một chủ đề
if (selectedTheme) {
    // Nếu quá trình xác thực được hoàn thành, ta hỏi vấn đề là gì để biết ta đã kích hoạt hay hủy kích hoạt tối
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Kích hoạt/hủy kích hoạt chủ đề theo cách thủ công bằng nút
themeButton.addEventListener('click', () => {
    // Thêm hoặc xóa dark / icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Lưu chủ đề và biểu tượng hiện tại đã chọn
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

