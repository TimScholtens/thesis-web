from config import Session
from models.neighbourhood import NeighbourhoodBioclim, NeighbourhoodBioclimSchema
from flask import jsonify


def get_variables():
    column_names = [col.name for col in NeighbourhoodBioclim.__table__.columns if str(col.name).startswith('bio')]
    return column_names


def get_neighbourhoods_data(neighbourhoods_code, years, bioclims):
    # print(NeighbourhoodBioclim.__table__.columns) # show column names

    mapped_columns = [getattr(NeighbourhoodBioclim, bioclim) for bioclim in bioclims]

    # Query database
    query_results = Session().query(*mapped_columns) \
        .filter(
        NeighbourhoodBioclim.year.in_(years),
        NeighbourhoodBioclim.code.in_(neighbourhoods_code)) \
        .all()

    query_result_dict = [result._asdict() for result in query_results]
    return query_result_dict
