import wNumb from 'wnumb'
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


let slider = document.getElementById('year-slider');
noUiSlider.create(slider, {
    start: [2000, 2020],
    connect: true,
    tooltips: true,
    step: 1,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
        'min': 2000,
        'max': 2020
    },
    format: wNumb({
        decimals: 0
    })
});
      