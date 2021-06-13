import gcoord from 'gcoord';
import { GeoJSON, Position } from 'gcoord/dist/types/geojson';

export const convertWGS84ToBD09 = (input: GeoJSON | Position | string) =>
  gcoord.transform(input, gcoord.WGS84, gcoord.BD09);
