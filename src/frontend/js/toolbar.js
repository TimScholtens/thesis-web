import {HOST} from "./config";

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
                    input.checked = 'checked'
                    span.innerText = 'filled in'

                    label.appendChild(input)
                    label.appendChild(span)

                    variables_holder.appendChild(label)

                })
            }
        )

}

function setUIVariables() {

}

getVariables()