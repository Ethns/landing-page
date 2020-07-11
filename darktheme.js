change_themme_counter = 0
document.getElementById("change-theme").addEventListener(
    'click', () => {
        if (change_themme_counter%2 == 0) {
            document.documentElement.style.setProperty('--body-background-color', 'white')
            document.documentElement.style.setProperty('--text-color', 'black')
        } else {
            document.documentElement.style.setProperty('--body-background-color', 'black')
            document.documentElement.style.setProperty('--text-color', 'white')
        }
        change_themme_counter++
    }
)