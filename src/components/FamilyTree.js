import React from 'react';
import Tree from 'react-d3-tree';

const FamilyTree = ({ data }) => {
  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 30,
      height: 30,
      x: -15,
      y: -15,
    },
  };

  return (
    <div className="FamilyTree">
      <Tree
        data={data}
        nodeSvgShape={svgSquare}
        orientation="vertical"
        translate={{ x: 300, y: 50 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
      />
    </div>
  );
};

export default FamilyTree;
