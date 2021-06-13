import gcoord from 'gcoord';
import { GeoJSON, Position } from 'gcoord/dist/types/geojson';

export const convertBD09ToGCJ02 = (input: GeoJSON | Position | string) =>
  gcoord.transform(input, gcoord.BD09, gcoord.GCJ02);
