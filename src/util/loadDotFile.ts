import drawEllipse from "./drawEllipse"
import drawPath from "./drawPath";
import drawArrowhead from "./drawArrowhead";
import drawLabel from "./drawLabel";


export default function loadDotFile(): void {

    function drawNodes() {
        for (let obj of data.objects) {
            if (obj._draw_) {
                for (let draw of obj._draw_) {
                    if (draw.op === 'e' && draw.rect?.length === 4) {
                        drawEllipse(draw.rect[0], draw.rect[1], draw.rect[2], draw.rect[3])
                    }
                }
            }
        }
    }

    function drawEdges() {
        for (let edge of data.edges) {
            if (edge._draw_) {
                for (let draw of edge._draw_) {
                    if (draw.op === 'b' && draw.points?.length === 4) {
                        drawPath(
                            draw.points[0][0],
                            draw.points[0][1],
                            draw.points[1][0],
                            draw.points[1][1],
                            draw.points[2][0],
                            draw.points[2][1],
                            draw.points[3][0],
                            draw.points[3][1],
                        )
                    }
                }
            }
        }
    }

    function drawEdgeHeads() {
        for (let edge of data.edges) {
            if (edge._hdraw_) {
                for (let draw of edge._hdraw_) {
                    if (draw.op === 'P' && draw.points) {
                        drawArrowhead(draw.points);
                    }
                }
            }
        }
    }

    function drawLabels() {
        for (let obj of data.objects) {
            if (obj._ldraw_) {
                for (let draw of obj._ldraw_) {
                    if (draw.op === 'T' && draw.pt) {
                        drawLabel(draw.text, draw.pt);
                    }
                }
            }
        }
    }



    drawNodes()
    drawEdges()
    drawEdgeHeads()
    drawLabels()
}

const data = {
    "name": "G",
    "directed": true,
    "strict": false,
    "_draw_":
        [
            {
                "op": "c",
                "grad": "none",
                "color": "#fffffe00"
            },
            {
                "op": "C",
                "grad": "none",
                "color": "#ffffff"
            },
            {
                "op": "P",
                "points": [[0.000, 0.000], [0.000, 180.000], [126.000, 180.000], [126.000, 0.000]]
            }
        ],
    "bb": "0,0,126,180",
    "xdotversion": "1.7",
    "_subgraph_cnt": 0,
    "objects": [
        {
            "_gvid": 0,
            "name": "A",
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#ff0000"
                    },
                    {
                        "op": "e",
                        "rect": [63.000, 162.000, 27.000, 18.000]
                    }
                ],
            "_ldraw_":
                [
                    {
                        "op": "F",
                        "size": 14.000,
                        "face": "Times-Roman"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "T",
                        "pt": [63.000, 158.300],
                        "align": "c",
                        "width": 10.000,
                        "text": "A"
                    }
                ],
            "color": "red",
            "height": "0.5",
            "label": "\\N",
            "pos": "63,162",
            "width": "0.75"
        },
        {
            "_gvid": 1,
            "name": "B",
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#00ff00"
                    },
                    {
                        "op": "e",
                        "rect": [27.000, 90.000, 27.000, 18.000]
                    }
                ],
            "_ldraw_":
                [
                    {
                        "op": "F",
                        "size": 14.000,
                        "face": "Times-Roman"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "T",
                        "pt": [27.000, 86.300],
                        "align": "c",
                        "width": 11.000,
                        "text": "B"
                    }
                ],
            "color": "green",
            "height": "0.5",
            "label": "\\N",
            "pos": "27,90",
            "width": "0.75"
        },
        {
            "_gvid": 2,
            "name": "C",
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#0000ff"
                    },
                    {
                        "op": "e",
                        "rect": [99.000, 90.000, 27.000, 18.000]
                    }
                ],
            "_ldraw_":
                [
                    {
                        "op": "F",
                        "size": 14.000,
                        "face": "Times-Roman"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "T",
                        "pt": [99.000, 86.300],
                        "align": "c",
                        "width": 11.000,
                        "text": "C"
                    }
                ],
            "color": "blue",
            "height": "0.5",
            "label": "\\N",
            "pos": "99,90",
            "width": "0.75"
        },
        {
            "_gvid": 3,
            "name": "D",
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "e",
                        "rect": [63.000, 18.000, 27.000, 18.000]
                    }
                ],
            "_ldraw_":
                [
                    {
                        "op": "F",
                        "size": 14.000,
                        "face": "Times-Roman"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "T",
                        "pt": [63.000, 14.300],
                        "align": "c",
                        "width": 12.000,
                        "text": "D"
                    }
                ],
            "height": "0.5",
            "label": "\\N",
            "pos": "63,18",
            "width": "0.75"
        }
    ],
    "edges": [
        {
            "_gvid": 0,
            "tail": 0,
            "head": 1,
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "b",
                        "points": [[54.650, 144.760], [50.290, 136.280], [44.850, 125.710], [39.960, 116.200]]
                    }
                ],
            "_hdraw_":
                [
                    {
                        "op": "S",
                        "style": "solid"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "C",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "P",
                        "points": [[42.990, 114.440], [35.300, 107.150], [36.770, 117.640]]
                    }
                ],
            "pos": "e,35.304,107.15 54.65,144.76 50.288,136.28 44.853,125.71 39.959,116.2"
        },
        {
            "_gvid": 1,
            "tail": 0,
            "head": 2,
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "b",
                        "points": [[71.350, 144.760], [75.710, 136.280], [81.150, 125.710], [86.040, 116.200]]
                    }
                ],
            "_hdraw_":
                [
                    {
                        "op": "S",
                        "style": "solid"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "C",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "P",
                        "points": [[89.230, 117.640], [90.700, 107.150], [83.010, 114.440]]
                    }
                ],
            "pos": "e,90.696,107.15 71.35,144.76 75.712,136.28 81.147,125.71 86.041,116.2"
        },
        {
            "_gvid": 2,
            "tail": 1,
            "head": 3,
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "b",
                        "points": [[35.350, 72.760], [39.710, 64.280], [45.150, 53.710], [50.040, 44.200]]
                    }
                ],
            "_hdraw_":
                [
                    {
                        "op": "S",
                        "style": "solid"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "C",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "P",
                        "points": [[53.230, 45.640], [54.700, 35.150], [47.010, 42.440]]
                    }
                ],
            "pos": "e,54.696,35.147 35.35,72.765 39.712,64.283 45.147,53.714 50.041,44.197"
        },
        {
            "_gvid": 3,
            "tail": 2,
            "head": 3,
            "_draw_":
                [
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "b",
                        "points": [[90.650, 72.760], [86.290, 64.280], [80.850, 53.710], [75.960, 44.200]]
                    }
                ],
            "_hdraw_":
                [
                    {
                        "op": "S",
                        "style": "solid"
                    },
                    {
                        "op": "c",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "C",
                        "grad": "none",
                        "color": "#000000"
                    },
                    {
                        "op": "P",
                        "points": [[78.990, 42.440], [71.300, 35.150], [72.770, 45.640]]
                    }
                ],
            "pos": "e,71.304,35.147 90.65,72.765 86.288,64.283 80.853,53.714 75.959,44.197"
        }
    ]
}


