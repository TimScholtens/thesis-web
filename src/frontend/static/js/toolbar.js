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
    // https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/
    fetch(`${HOST}/api/variables/neighbourhood`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"neighbourhoods_code": ["WK000300"], "years": [2016], "bioclims": ["code", "name", "township", "year", "bio1_temperature_avg_year", "bio2_temperature_range_avg_year", "bio3_isothermality", "bio4_temperature_std_year", "bio5_temperature_max_year", "bio6_temperature_min_year", "bio7_temperature_range_max_year", "bio8_temperature_avg_wettest_quarter", "bio9_temperature_avg_driest_quarter", "bio10_temperature_avg_warmest_quarter", "bio11_temperature_avg_coldest_quarter", "bio12_rain_sum_year", "bio13_rain_sum_wettest_month", "bio14_rain_sum_driest_month", "bio15_rain_std", "bio16_rain_sum_wettest_quarter", "bio17_rain_sum_driest_quarter", "bio18_rain_sum_warmest_quarter", "bio19_rain_sum_coldest_quarter"]}'
        }
    )
        .then(x => console.log(x))
        .catch(err => console.log(err))

// Flask send_file
// https://stackoverflow.com/questions/24577349/flask-download-a-file

// fetch()
}


init()

export {setSelectedProvinces}