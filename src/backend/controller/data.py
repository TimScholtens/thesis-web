from config import Session
from models.neighbourhood import NeighbourhoodBioclim, NeighbourhoodBioclimSchema
from flask import jsonify


def get_variables():
    return NeighbourhoodBioclim.__table__.columns

    #
    #
    # return [
    #     'BIO 1 - Annual Mean Temperature',
    #     'BIO 2 - Mean of monthly',
    #     'BIO 3 - Isothermality',
    #     'BIO 4 - Temperature Seasonality',
    #     'BIO 5 - Max. Temperature of Warmest Month',
    #     'BIO 6 - Min. Temperature of Coldest Month',
    #     'BIO 7 - Temperature Annual Range',
    #     'BIO 8 - Mean Temperature of Wettest Quarter',
    #     'BIO 9 - Mean Temperature of Driest Quarter',
    #     'BIO 10 - Mean Temperature of Warmest Quarter',
    #     'BIO 11 - Mean Temperature of Coldest Quarter',
    #     'BIO 12 - Annual Precipitation',
    #     'BIO 13 - Precipitation of Wettest Month',
    #     'BIO 14 - Precipitation of Driest Month',
    #     'BIO 15 - Precipitation Seasonality',
    #     'BIO 16 - Precipitation of Wettest Quarter',
    #     'BIO 17 - Precipitation of Driest Quarter',
    #     'BIO 18 - Precipitation of Warmest Quarter',
    #     'BIO 19 - Precipitation of Coldest Quarter'
    # ]


def get_neighbourhoods_data(neighbourhoods, years, bioclims):

    # print(NeighbourhoodBioclim.__table__.columns) # show column names

    mapped_columns = [getattr(NeighbourhoodBioclim, bioclim) for bioclim in bioclims]

    # Query database
    # query_results = Session().query(*mapped_columns).all()
    query_results = Session().query(*mapped_columns).filter(NeighbourhoodBioclim.year.in_(years)).all()

    # .filter(NeighbourhoodBioclim.year.in_(years))

    query_result_dict = [result._asdict() for result in query_results]
    return query_result_dict
