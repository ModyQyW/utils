import gcoord from 'gcoord';
import { GeoJSON, Position } from 'gcoord/dist/types/geojson';

export const convertBD09ToWGS84 = (input: GeoJSON | Position | string) =>
  gcoord.transform(input, gcoord.BD09, gcoord.WGS84);
