import pandas as pd
from shapely.geometry import Point
import geopandas as gpd
from math import sin, radians,cos
import matplotlib.pyplot as plt
from shapely.geometry import LineString, Polygon


dist = 5280/2

def create_hex_grid( data , dist ):
    import numpy as np
    from shapely.geometry import Polygon
    from math import sin, radians

    xmin, ymin, xmax, ymax = data.total_bounds

    xcoords = np.arange(xmin, xmax, dist*1.5)
    ycoords = np.arange(ymin, ymax, dist* sin(radians(60)) *0.5)

    def create_grid(xcoords, ycoords, dist):
        points = []
        for count,y in enumerate(ycoords):
            if count % 2 == 0: # even
                for x in xcoords:
                    points.append( (x,y) )
            else:
                for x in xcoords:
                    points.append( (x + (dist*0.75), y) )
        return points

    def hexagon(point, dist):
        # 180 degrees in rad
        from math import pi, sin, cos
        circle = 2*pi
        radius = dist/2

        # get 6 point coordinaties for a hexagon
        x = [ point[0] + radius * cos( i * circle / 6 ) for i in range(6) ]
        y = [ point[1] + radius * sin( i * circle / 6 ) for i in range(6) ]
        x.append( x[0] )
        y.append( y[0] )

        return list(zip(x,y))

    grid_points = create_grid(xcoords, ycoords, dist)
    hex_points = [ hexagon(i, dist) for i in grid_points ]
    hex_polygons = gpd.GeoDataFrame( geometry = [Polygon(i) for i in hex_points], crs=data.crs )
    hex_polygons['id'] = [i for i in range( len( hex_polygons ) ) ]
    return hex_polygons
