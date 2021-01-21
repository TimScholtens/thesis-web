import unittest
import requests
from __test__.config import HOST
import json


class TestBIOCLIM(unittest.TestCase):

    def test_province_names(self):
        """
            Check whether the API returns all 12 provice names
        """
        req = requests.get(f'http://{HOST}/api/geojson/provinces')
        resp = json.loads(req.json())

        province_names = [feature['properties']['name'] for feature in resp['features']]

        self.assertEqual(12, len(province_names))

    def test_province_post(self):
        """
            Check API returns data for 1 province
        """
        req = requests.post(f'http://{HOST}/api/geojson/provinces')
        

if __name__ == '__main__':
    unittest.main()
