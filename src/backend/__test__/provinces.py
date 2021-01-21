import unittest
import requests
from __test__.config import HOST
import json


class TestBIOCLIM(unittest.TestCase):

    def test_province_names(self):
        """
            Check whether the API returns all 12 provice names
        """
        uri = f'http://{HOST}/api/geojson/provinces'
        req = requests.get(uri)
        resp = json.loads(req.json())

        province_names = [feature['properties']['name'] for feature in resp['features']]

        self.assertEqual(12, len(province_names))

    def test_province_post(self):
        """
            Check API returns data for 1 province
        """
        uri = f'http://{HOST}/api/geojson/provinces'
        data = dict(provinces='boi', years=1, bioclims=1)
        req = requests.post(uri, data)
        

if __name__ == '__main__':
    unittest.main()
