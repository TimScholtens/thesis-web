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
        data = dict(neighbourhoods=['boi'], years=[1], bioclims=['bio1_temperature_avg_year'])
        req = requests.post(uri, data)

        print(req.text)


if __name__ == '__main__':
    unittest.main()
