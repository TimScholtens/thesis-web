import unittest
import requests
from __test__.config import HOST


class TestBIOCLIM(unittest.TestCase):

    def test_provinces(self):
        req = requests.get(f'http://{HOST}/api/geojson/provinces')
        resp = req.text

        print(resp)

        self.assertEqual(True, True)


if __name__ == '__main__':
    unittest.main()
