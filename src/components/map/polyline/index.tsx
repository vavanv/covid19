import * as React from 'react';
import { CanvasOverlay } from 'react-map-gl';

interface Props {
  lineSize: number;
  lineColor: string;
  renderWhileDragging: boolean;
  points: number[][];
}
const RouteplotOverlayComponent = (props: Props) => {
  const { lineSize, lineColor, renderWhileDragging, points } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const redraw = ({ width, height, ctx, isDragging, project }: any) => {

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';
    if ((renderWhileDragging || !isDragging) && points) {
      ctx.lineWidth = lineSize;
      ctx.strokeStyle = lineColor;
      ctx.beginPath();
      points.forEach(point => {
        const pixel = project([point[0], point[1]]);
        ctx.lineTo(pixel[0], pixel[1]);
      });
      ctx.stroke();
    }
  };

  return <CanvasOverlay redraw={redraw} />;
};

export const RouteplotOverlay = React.memo(RouteplotOverlayComponent);
