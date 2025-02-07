import {HOST} from "./config";
import {selectedFeatureSet} from "./map";
import {saveAs} from 'file-saver';

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



    // Add default variables
    let checked_labels_text_and_default = ['code','name','township','year', ...checked_labels_text]

    // Transform object to array
    return checked_labels_text_and_default

}

function setSelectedNeighbourhoods(selectedNeighbourhoodsVal) {

    let selectedNeighbourhoodsName = [...selectedNeighbourhoodsVal].map(neighbourhood => neighbourhood.name)
    let selectedNeighbourhoodsInput = document.getElementById('selected-neighbourhoods-input')
    selectedNeighbourhoodsInput.value = [...selectedNeighbourhoodsName].join(', ')
}


function getSelectedNeighbourhoodsCode() {
    return [...selectedFeatureSet].map(neighbourhood => neighbourhood.code)
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

    return range_min_max_year
}

function downloadSelectedVariables() {

    // Retrieve user settings
    let selectedNeighbourhoodsCode = getSelectedNeighbourhoodsCode()
    let selectedVariables = getSelectedVariables()
    let selectedYears = getSelectedYears()


    // Send HTTP post request to server
    // https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/
    fetch(`${HOST}/api/variables/neighbourhood`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            // body: '{"neighbourhoods_code": ["WK000300"], "years": [2016], "bioclims": ["code", "name", "township", "year", "bio1_temperature_avg_year", "bio2_temperature_range_avg_year", "bio3_isothermality", "bio4_temperature_std_year", "bio5_temperature_max_year", "bio6_temperature_min_year", "bio7_temperature_range_max_year", "bio8_temperature_avg_wettest_quarter", "bio9_temperature_avg_driest_quarter", "bio10_temperature_avg_warmest_quarter", "bio11_temperature_avg_coldest_quarter", "bio12_rain_sum_year", "bio13_rain_sum_wettest_month", "bio14_rain_sum_driest_month", "bio15_rain_std", "bio16_rain_sum_wettest_quarter", "bio17_rain_sum_driest_quarter", "bio18_rain_sum_warmest_quarter", "bio19_rain_sum_coldest_quarter"]}'
            body:JSON.stringify({
                years:selectedYears,
                bioclims:selectedVariables,
                neighbourhoods_code:selectedNeighbourhoodsCode
            })
        }
    )
        .then(resp => resp.blob())
        .then(blob => {
            saveAs(blob, 'data.json')
        })
        .catch(err => console.log(err))
}


init()

export {setSelectedNeighbourhoods}