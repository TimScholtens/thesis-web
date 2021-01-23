import {HOST} from "./config";
import {selectedFeatureSet} from "./map";

function init() {
    getVariables()

    //    Add eventlisteners
    let download_button = document.getElementById('download-button')
    download_button.addEventListener("click", getSelectedNeighbourhoods )
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
                    input.checked = true
                    span.innerText = val

                    label.appendChild(input)
                    label.appendChild(span)

                    variables_holder.appendChild(label)

                })
            }
        )

}


function getSelectedVariables(){
   let variables_holder = document.getElementById('variables')

    let labels = variables_holder.getElementsByTagName('label')
    let selected_labels = labels.getElementsByTagName('label')

    console.log(selected_labels)

    // Works
    // $0.checked = false
    // false
    // $$('input').forEach(i => i.checked=false)
    // undefined

    let inputs = document.querySelectorAll('input')
    inputs.filter(input => input.checked=true)

    console.log(inputs)

}

function setSelectedProvinces(selectedProvincesVal){

    let selectedProvincesInput = document.getElementById('selected-provinces-input')
    selectedProvincesInput.value = [...selectedProvincesVal].join(', ')
}



function getSelectedNeighbourhoods(){
    console.log(selectedFeatureSet)
}

function downloadSelectedVariables(){
    let selectedNeighbourhoods = getSelectedNeighbourhoods()
    let selectedVariables = null
    let selectedYears = null



}


init()

export {setSelectedProvinces}