from sqlalchemy import Column, Integer, Table
from config import base, db
from marshmallow import Schema, fields


class NeighbourhoodBioclim(base):
    __table__ = Table(
        'neighbourhood_bioclim',
        base.metadata,
        Column("view_id", Integer, primary_key=True),  # Add primary key manually
        autoload=True,
        autoload_with=db
    )


class NeighbourhoodBioclimSchema(Schema):
    name = fields.String()
