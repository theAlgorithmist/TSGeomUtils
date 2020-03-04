# Typescript Math Toolkit Geometry Utilities

Over the years, I've worked on a variety of applications that make use of techniques from analytic and computational geometry, in languages ranging from Fortran to Actionscript/Javascript.  In 2015, I made an attempt to collect the most popular of these algorithms (in terms of my actual use in applications) into a single language, Javascript.  This library became sort of a 'holding bin' that I named the Javascript Math Toolkit.

The JSMT is in the process of being transformed into a more robust, commercial-quality library that is written entirely in Typespcript.  This particular repo contains an early release of the Typescript Math Toolkit Geometry Utilities.

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 2.3.2

Version: 1.0


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and running the tests

1. gulp compile

2. gulp test

The test suite is in Mocha/Chai and specs reside in the _test_ folder.


### Overview

The current geometry utility functions are encapsulated in a single class, _TSMT$GeomUtils_ .  Its methods may be applied to the solution of many practical problems ranging from games to EdTech to custom pathfinding to space partitioning (floor planning).

A _compare_ function is also provided in the distribution.


### Public API

The _compare_ function tests for near-equality (to a given tolerance) in a more numerically robust manner than a straight test.  Its API is

```
function compare(a: number, b: number, tol: number): boolean
```


The _TSMT$GeomUtils_ class contains the following public methods.  Note that since this is an alpha release, there is a slight possibility of a future API change.  The most likely change (which will be non-breaking) is cleaning up inconsistent naming conventions; this is an unfortunate side-effect of me rewriting these utilities into a common language from so many other different environments.


```
insideBox(__x1: number, __y1: number, __left: number, __top: number, __right: number, __bottom: number ): boolean
boxesIntersect(__bound1: Object, __bound2: Object): boolean
pointOrientation(__x1: number, __y1: number, __x2: number, __y2: number, __x: number, __y: number): number
intersectBox(__x1: number, __y1: number, __x2: number, __y2: number, __left: number, __top: number, __right: number, __bottom: nu
lineRectIntersection(__x1: number, __y1: number, __x2: number, __y2: number, __left: number, __top: number, __right: number, __bottom: number): Object
pointsEqual(__x1: number, __y1: number, __x2: number, __y2: number): boolean
linesIntersect(__x1: number, __y1: number, __x2: number, __y2: number, __x3: number, __y3: number, __x4: number, __y4: number): boolean
segmentsIntersect(px: number, py: number, p2x: number, p2y: number, qx: number, qy: number, q2x: number, q2y: number): boolean
lineIntersection(px: number, py: number, p2x: number, p2y: number, qx: number, qy: number, q2x: number, q2y: number): Object
interiorAngle(__x1: number, __y1: number, __x2: number, __y2: number, __x3: number, __y3: number, __toDegrees: boolean=false): number
isClockwise(_x0: number, _y0: number, _x1: number, _y1: number, _x2: number, _y2: number): boolean
pointOnLine(rx: number, ry: number, px: number, py: number, qx: number, qy: number): boolean
triangleArea(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): number
circleToCircleIntersection(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Array<Object>
pointToSegmentDistance(p0x: number, p0y: number, p1x: number, p1y: number, px: number, py: number): number
projectToSegment(p0x: number, p0y: number, p1x: number, p1y: number, px: number, py: number): Object
reflect(points: Array<Object>, x0: number, y0: number, x1: number, y1: number): Array<Object>
closestPoints(_xcoord: Array<number>, _ycoord: Array<number>): Array<Object>
```

### Usage

All methods in the _TSMT$GeomUtils_ class take arguments to raw coordinate values.  There is no dependency on any particular point or vector structure.

Refer to the specs in the _test_ folder for specific usage examples.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>

