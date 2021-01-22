import unittest
import requests
from __test__.config import HOST
import json


class TestNeighbourhood(unittest.TestCase):

    def test_neighbourhood_post(self):
        """
            Check API returns data for 1 neighbourhood
        """
        uri = f'http://{HOST}/api/variables/neighbourhood'
        data = dict(neighbourhoods_code=['WK000300'], years=[2016], bioclims=[
            'code', 'name', 'township', 'year', 'bio1_temperature_avg_year', 'bio2_temperature_range_avg_year', 'bio3_isothermality',
            'bio4_temperature_std_year', 'bio5_temperature_max_year', 'bio6_temperature_min_year', 'bio7_temperature_range_max_year',
            'bio8_temperature_avg_wettest_quarter', 'bio9_temperature_avg_driest_quarter', 'bio10_temperature_avg_warmest_quarter',
            'bio11_temperature_avg_coldest_quarter', 'bio12_rain_sum_year', 'bio13_rain_sum_wettest_month', 'bio14_rain_sum_driest_month',
            'bio15_rain_std', 'bio16_rain_sum_wettest_quarter', 'bio17_rain_sum_driest_quarter', 'bio18_rain_sum_warmest_quarter',
            'bio19_rain_sum_coldest_quarter'
        ])
        req = requests.post(uri, data)

        print(req.json())


if __name__ == '__main__':
    unittest.main()
