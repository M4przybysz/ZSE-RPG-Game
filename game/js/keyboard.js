var active_wsad_key = null

const KEY_MAP = {
    'A' : 'left',
    'D' : 'right',
    'S' : 'down',
    'W' : 'up'
}

function keydownActions(event) {
    let stop = document.getElementById('game_stop')
    let key = event.key.toUpperCase()

    if(key == 'ESCAPE') {           // pressed Escape
        if(stop.style.display == 'none') {
            stop.style.display = 'block'  
        }
        else {
            stop.style.display = 'none'
        }
    }

    if(stop.style.display == 'none') {
        if((key == 'W' || key == 'S' || key == 'A' || key == 'D')) {     // pressed WSAD
            active_wsad_key = key
        }
    }    

    console.log(key)

    event.preventDefault()
}