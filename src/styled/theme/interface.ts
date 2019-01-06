import {
  Colors,
  Sizes,
  ZIndex,
  Shorthands,
  EditorColors,
  Shape,
} from './index';
import Typography from 'typography';
export interface ThemeInterface {
  mode: 'light' | 'dark';
  colors: Colors;
  sizes: Sizes;
  shape: Shape;
  shadows: any;
  zIndex: ZIndex;
  shorthands: Shorthands;

  typography: Typography;
  editorColors: EditorColors;
}
