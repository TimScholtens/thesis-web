import unittest
from config import db


class TestDatabase(unittest.TestCase):
    def test_neighbourhood_table(self):

        print(db.has_table('neighbourhood_bioclim'))

        print(db.table_names())
        self.assertEqual(True, False)


if __name__ == '__main__':
    unittest.main()
