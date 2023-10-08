'use client'

import Tree from 'react-d3-tree';
import {useState} from "react";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};


export default function Page() {
    const [styles] = useState({
        nodes: {
            node: {
                circle: {
                    fill: '#52e2c5',
                },
                attributes: {
                    stroke: '#000',
                },
            },
            leafNode: {
                circle: {
                    fill: 'transparent',
                },
                attributes: {
                    stroke: '#000',
                },
            },
        },
    });


    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div className="demo-container">
            <div className="tree-container">
                <Tree
                    data={orgChart}
                    orientation='vertical'
                    style={styles}
                    zoom={1}
                    zoomable={true}
                    translate={{ x: 500, y: 150 }}
                />
            </div>
        </div>
    );
}