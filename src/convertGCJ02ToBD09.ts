import gcoord from 'gcoord';
import { GeoJSON, Position } from 'gcoord/dist/types/geojson';

export const convertGCJ02ToBD09 = (input: GeoJSON | Position | string) =>
  gcoord.transform(input, gcoord.GCJ02, gcoord.BD09);
