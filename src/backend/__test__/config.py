from sqlalchemy import create_engine

HOST = '127.0.0.1:5000'
db = create_engine('postgres://tim:doyouopm@localhost:5432/opm',
                   echo=True,
                   executemany_mode='values',
                   executemany_values_page_size=10000,
                   client_encoding='utf8')


