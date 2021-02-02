import {HOST} from "./config";
import {selectedFeatureSet} from "./map";

function init() {
    getVariables()

    //    Add eventlisteners
    let download_button = document.getElementById('download-button')
    download_button.addEventListener("click", downloadSelectedVariables)
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


function getSelectedVariables() {

    let checkboxes = [...document.querySelectorAll('input[type=checkbox]')]
    let checked_checkboxes = checkboxes.filter(c => c.checked === true)
    let checked_labels = checked_checkboxes.map(c => c.parentNode)
    let checked_labels_text = checked_labels.map(c => c.querySelector('span').innerText)

    // console.log(checked_labels_text)
    // console.log(typeof (checked_labels_text))

    console.log(Object.values(checked_labels_text))
    // Transform object to array
    return Object.values(checked_labels_text)
}

function setSelectedProvinces(selectedProvincesVal) {

    let selectedProvincesInput = document.getElementById('selected-provinces-input')
    selectedProvincesInput.value = [...selectedProvincesVal].join(', ')
}


function getSelectedNeighbourhoods() {
    return selectedFeatureSet
}

function getSelectedYears() {
    /*
        Returns array of values between start year and end year
    */
    let year_slider = document.getElementById('year-slider')
    let selected_min_max_year = year_slider.noUiSlider.get()

    let range_min_max_year = []
    for (let i = selected_min_max_year[0]; i <= selected_min_max_year[1]; i++) {
        range_min_max_year.push(parseInt(i, 10));
    }
    console.log(range_min_max_year)

    return range_min_max_year
}

function downloadSelectedVariables() {

    // Retrieve user settings
    let selectedNeighbourhoods = getSelectedNeighbourhoods()
    let selectedVariables = getSelectedVariables()
    let selectedYears = getSelectedYears()

    // Set form data
    let formData = new FormData()
    formData.append('years', selectedYears)
    formData.append('bioclims', selectedVariables)
    formData.append('neighbourhoods_code', selectedNeighbourhoods)

    // Send HTTP post request to server
    // let headers =
    // https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/
    fetch(`${HOST}/api/variables/neighbourhood`,
        {
            method: 'POST',
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body:

            '' +
                ''                'years=[2018]'
            """
        }).catch(err => console.log(err))

    // Flask send_file
    // https://stackoverflow.com/questions/24577349/flask-download-a-file

    // fetch()
}


init()

export {setSelectedProvinces}