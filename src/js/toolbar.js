import {HOST} from "./config";

async function getVariables() {
    let variables = await fetch(`${HOST}/api/variables`)
        .then(resp => resp.json())
        .then(json => {
                return json
            }
        )

    console.log(variables)

}

function setUIVariables() {

}

getVariables()