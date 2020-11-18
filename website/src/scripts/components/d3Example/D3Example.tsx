import React, { useEffect, useRef } from 'react';
import {
  D3ExampleChart,
  D3ExampleTitle,
  D3ExampleWrapper,
} from '../../styles/D3Example/StyledD3Example';
import * as d3 from 'd3';

interface D3ExampleProps {
  title: string;
}

const D3Example = ({ title }: D3ExampleProps) => {
  const chartRef = useRef(null);
  const dataset = [10, 20, 30, 40, 50, 30, 12];

  useEffect(() => {
    let size = 100;
    let svg = d3.select(chartRef.current).append('svg').attr('width', size).attr('height', size);
    let rect_width = 5;
    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i * (rect_width + 5))
      .attr('y', (d) => size - d)
      .attr('width', rect_width)
      .attr('height', (d) => d)
      .attr('fill', 'teal');
  });

  return (
    <D3ExampleWrapper>
      <D3ExampleTitle>{title}</D3ExampleTitle>
      <D3ExampleChart ref={chartRef} />
    </D3ExampleWrapper>
  );
};

export default D3Example;
