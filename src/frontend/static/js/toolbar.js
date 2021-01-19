import {HOST} from "./config";


function init() {
    getVariables()
}


function getVariables() {
    fetch(`${HOST}/api/variables`)
        .then(resp => resp.json())
        .then(data => {
                let variables_holder = document.getElementById('variables')

                // console.log(data)
                data['variables'].forEach(val => {

                    let label = document.createElement('label')
                    let input = document.createElement('input')
                    let span = document.createElement('span')

                    input.type = 'checkbox'
                    input.classList.add('filled-in')
                    input.checked = false
                    span.innerText = val

                    label.appendChild(input)
                    label.appendChild(span)

                    variables_holder.appendChild(label)

                })
            }
        )

}

function setSelectedProvinces(selectedProvincesVal){

    let selectedProvincesInput = document.getElementById('selected-provinces-input')
    selectedProvincesInput.value = [...selectedProvincesVal].join(', ')
    // selectedProvincesInput.value = 'boi'
}


init()

export {setSelectedProvinces}