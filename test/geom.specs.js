/** Copyright 2016 Jim Armstrong (www.algorithmist.net)
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
"use strict";
// Specs for Geom Utils
var GeomUtils_1 = require('../src/GeomUtils');
var GeomUtils_2 = require('../src/GeomUtils');
var Chai = require('chai');
var expect = Chai.expect;
// Test Suites
describe('GeomUtils', function () {
    var __geomUtils = new GeomUtils_1.TSMT$GeomUtils();
    // y-down bounding box
    var left = 150;
    var right = 350;
    var top = 120;
    var bottom = 350;
    // point inside bounding box
    it('returns point outside box (y-down) #1', function () {
        expect(__geomUtils.insideBox(100.0, 100.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point outside box (y-down) #2', function () {
        expect(__geomUtils.insideBox(375.0, 120.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point outside box (y-down) #3', function () {
        expect(__geomUtils.insideBox(175.0, 370.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point outside box (y-down) #4', function () {
        expect(__geomUtils.insideBox(150.0, 251.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point inside box (y-down)', function () {
        expect(__geomUtils.insideBox(200.0, 200.0, left, top, right, bottom)).to.be.true;
    });
    it('returns point on boundary as outside (y-down)', function () {
        expect(__geomUtils.insideBox(150.0, 250.0, left, top, right, bottom)).to.be.false;
    });
    // change to y-up
    left = 150;
    right = 350;
    top = 250;
    bottom = 120;
    it('returns point outside box (y-up) #1', function () {
        expect(__geomUtils.insideBox(100.0, 100.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point outside box (y-down) #2', function () {
        expect(__geomUtils.insideBox(375.0, 120.0, left, top, right, bottom)).to.be.false;
    });
    it('returns point inside box (y-down)', function () {
        expect(__geomUtils.insideBox(200.0, 200.0, left, top, right, bottom)).to.be.true;
    });
    it('returns point on boundary as outside (y-up)', function () {
        expect(__geomUtils.insideBox(150.0, 250.0, left, top, right, bottom)).to.be.false;
    });
    // bounding-box intersection
    var box1 = { left: 50, top: 200, right: 150, bottom: 100 };
    var box2 = { left: 175, top: 90, right: 375, bottom: 10 };
    it('returns no bounding-box intersection (y-up) #1', function () {
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns no bounding-box intersection (y-up) #2', function () {
        box2 = { left: -20, top: 95, right: 20, bottom: 10 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns pno bounding-box intersection (y-up) #3', function () {
        box2 = { left: 75, top: 325, right: 200, bottom: 201 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns bounding-box intersection (y-up)', function () {
        box2 = { left: 110, top: 120, right: 200, bottom: 30 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.true;
    });
    it('returns no bounding-box intersection (y-dn) #1', function () {
        box1 = { left: 10, top: 10, right: 150, bottom: 100 };
        box2 = { left: 100, top: 150, right: 300, bottom: 250 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns no bounding-box intersection (y-dn) #2', function () {
        box1 = { left: 10, top: 10, right: 150, bottom: 100 };
        box2 = { left: -20, top: -95, right: 20, bottom: 0 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns pno bounding-box intersection (y-dn) #3', function () {
        box1 = { left: 10, top: 10, right: 150, bottom: 100 };
        box2 = { left: 175, top: 325, right: 200, bottom: 210 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.false;
    });
    it('returns bounding-box intersection (y-dn)', function () {
        box1 = { left: 10, top: 10, right: 150, bottom: 100 };
        box2 = { left: 110, top: 30, right: 200, bottom: 120 };
        expect(__geomUtils.boxesIntersect(box1, box2)).to.be.true;
    });
    // point-line orientation
    it('returns (5,1) to right of line', function () {
        expect(__geomUtils.pointOrientation(1, 1, 7, 3, 5, 1)).to.equal(GeomUtils_2.DirEnum.RIGHT);
    });
    it('returns (-1,-7) to right of line', function () {
        expect(__geomUtils.pointOrientation(1, 1, 7, 3, -1, -7)).to.equal(GeomUtils_2.DirEnum.RIGHT);
    });
    it('returns (4,2) on the line', function () {
        expect(__geomUtils.pointOrientation(1, 1, 7, 3, 4, 2)).to.equal(GeomUtils_2.DirEnum.ON);
    });
    it('returns (2,5) to left of line', function () {
        expect(__geomUtils.pointOrientation(1, 1, 7, 3, 2, 5)).to.equal(GeomUtils_2.DirEnum.LEFT);
    });
    it('returns (-2,2) to left of line', function () {
        expect(__geomUtils.pointOrientation(1, 1, 7, 3, -2, 2)).to.equal(GeomUtils_2.DirEnum.LEFT);
    });
    // line segment intersects bounding-box
    it('(25,325) to (300,310) does not intersect bounding box', function () {
        expect(__geomUtils.intersectBox(25, 325, 300, 310, 50, 50, 150, 300)).to.be.false;
    });
    it('(140,25) to (200,75) does not intersect bounding box', function () {
        expect(__geomUtils.intersectBox(25, 325, 300, 310, 50, 50, 150, 300)).to.be.false;
    });
    it('(-10,40) to (100,40) does not intersect bounding box', function () {
        expect(__geomUtils.intersectBox(25, 325, 300, 310, 50, 50, 150, 300)).to.be.false;
    });
    it('(25,100) to (100,75) intersects bounding box', function () {
        expect(__geomUtils.intersectBox(25, 325, 300, 310, 50, 50, 150, 300)).to.be.false;
    });
    // test screen coordinates for approximate equality
    it('(-10.2472,40.0) and (-10.2471,40.0) are approximately equal', function () {
        expect(__geomUtils.pointsEqual(-10.2472, 40.0, -10.2471, 40.0)).to.be.true;
    });
    it('(-10.2472,40.0) and (-10.2471,40.1) are not approximately equa', function () {
        expect(__geomUtils.pointsEqual(-10.2472, 40.0, -10.2471, 40.1)).to.be.false;
    });
    // line intersection
    it('lines through (15,10) to (49,25) & (29,5) to (32,32) intersect', function () {
        expect(__geomUtils.linesIntersect(15, 10, 49, 25, 29, 5, 32, 32)).to.be.true;
    });
    it('lines through (1,1) to (7,7) & (2,2) to (8,8) do not intersect', function () {
        expect(__geomUtils.linesIntersect(1, 1, 7, 7, 2, 2, 8, 8)).to.be.false;
    });
    it('lines through (1,1) to (7,1) & (2,2) to (8,2) do not intersect', function () {
        expect(__geomUtils.linesIntersect(1, 1, 7, 1, 2, 2, 8, 2)).to.be.false;
    });
    it('lines through (1,1) to (1,7) & (2,2) to (2,8) do not intersect', function () {
        expect(__geomUtils.linesIntersect(1, 1, 1, 7, 2, 2, 2, 8)).to.be.false;
    });
    // line segment intersection
    it('line segment (1,1) to (8,5) & (5,2) to (6,-1) do not intersect', function () {
        expect(__geomUtils.segmentsIntersect(1, 1, 8, 5, 5, 2, 6, -1)).to.be.false;
    });
    it('line segment (1,1) to (8,5) & (2,2) to (8,6) do not intersect', function () {
        expect(__geomUtils.segmentsIntersect(1, 1, 8, 5, 2, 2, 9, 6)).to.be.false;
    });
    it('line segment (1,1) to (8,5) & (5,4) to (6,-1) do intersect', function () {
        expect(__geomUtils.segmentsIntersect(1, 1, 8, 5, 5, 4, 6, -1)).to.be.true;
    });
    it('line segment (1,1) to (8,5) & (1,1) to (6,-1) do intersect', function () {
        expect(__geomUtils.segmentsIntersect(1, 1, 8, 5, 1, 1, 6, -1)).to.be.true;
    });
    // intersection point of two (infinte) lines
    it('line through (15,10) and (49,25) & (29,5) to (32,32) intersect at (30,17)', function () {
        var coord = __geomUtils.lineIntersection(15, 10, 49, 25, 29, 5, 32, 32);
        var x = parseFloat(coord['x']);
        var y = parseFloat(coord['y']);
        expect(Math.abs(x - 30.305) < 0.01).to.be.true;
        expect(Math.abs(y - 16.75) < 0.01).to.be.true;
    });
    // interior angle
    it('interior angle of (1,2), (7,12) and (-1,18) is approx. 95.91 deg.', function () {
        var angle = __geomUtils.interiorAngle(1, 2, 7, 12, -1, 18, true);
        expect(Math.abs(angle - 95.91) < 0.01).to.be.true;
    });
    // point-sequence clockwise or counter-clockwise
    it('point sequence (1,1), (5,8) and (12,-2) is CW', function () {
        expect(__geomUtils.isClockwise(1, 1, 5, 8, 12, -2)).to.be.true;
    });
    it('point sequence (1,1), (10,2) and (5,8) is CCW', function () {
        expect(__geomUtils.isClockwise(1, 1, 10, 2, 5, 8)).to.be.false;
    });
    // point on line segment
    it('point (4,5) not to be on segment from (1,2) to (9,8)', function () {
        expect(__geomUtils.pointOnLine(4, 5, 1, 2, 9, 8)).to.be.false;
    });
    it('point (5,5) to be on segment from (1,2) to (9,8)', function () {
        expect(__geomUtils.pointOnLine(5, 5, 1, 2, 9, 8)).to.be.true;
    });
    // area of triangle
    it('area of triangle from (1,8) to (3,12) to (17,-2) is 42', function () {
        var a = __geomUtils.triangleArea(1, 8, 3, 12, 17, -2);
        expect(Math.abs(a - 42) < 0.01).to.be.true;
    });
    it('area of triangle with coincident points to be zero', function () {
        var a = __geomUtils.triangleArea(1, 8, 1, 8, 1, 8);
        expect(Math.abs(a) < 0.001).to.be.true;
    });
    // circle-circle intersection
    it('circle at (-2,-3), r=3 and (-1,1), r=4 to intersect at (0.96, -2.49) and (-4.37, -1.16)', function () {
        var intersect = __geomUtils.circleToCircleIntersection(-2, -3, 3, -1, 1, 4);
        var p = intersect[0];
        var x1 = parseFloat(p['x']);
        var y1 = parseFloat(p['y']);
        p = intersect[1];
        var x2 = parseFloat(p['x']);
        var y2 = parseFloat(p['y']);
        expect(Math.abs(x1 - 0.96) < 0.01).to.be.true;
        expect(Math.abs(y1 + 2.49) < 0.01).to.be.true;
        expect(Math.abs(x2 + 4.37) < 0.01).to.be.true;
        expect(Math.abs(y2 + 1.16) < 0.01).to.be.true;
    });
    // point to segment distance
    it('dist. from (5,6) to line passing through (2,0) & (8,4) is approx. 3.3', function () {
        var d = __geomUtils.pointToSegmentDistance(2, 0, 8, 4, 5, 6);
        expect(Math.abs(d - 3.3) < 0.1).to.be.true;
    });
    // reflect point cloud around a line segment
    it('reflection about line y = x', function () {
        var p = [{ x: 2, y: 1 }, { x: 1, y: -1 }, { x: -1, y: 0 }, { x: 4, y: 7 }, { x: 6, y: -4 }, { x: 7, y: 2 }];
        // empty in - empty out
        expect(__geomUtils.reflect([], 0, 0, 2, 2).length).to.equal(0);
        // can not reflect about degenerate line segment
        expect(__geomUtils.reflect(p, 1, 1, 1, 1).length).to.equal(p.length);
        // reflecting about y = x causes x- and y-coordinates to switch, so this is easier to test
        var r = __geomUtils.reflect(p, 0, 0, 2, 2);
        var point = r[0];
        expect(p[0]['x']).to.equal(point['y']);
        point = r[1];
        expect(p[1]['x']).to.equal(point['y']);
        point = r[2];
        expect(p[2]['x']).to.equal(point['y']);
        point = r[3];
        expect(p[3]['x']).to.equal(point['y']);
        point = r[4];
        expect(p[4]['x']).to.equal(point['y']);
        point = r[5];
        expect(p[5]['x']).to.equal(point['y']);
    });
    // closest points in a cloud
    it('closest distance returns empty array for empty inputs', function () {
        var points = __geomUtils.closestPoints([], []);
        expect(points.length).to.equal(0);
    });
    it('closest distance returns zero-distance output for singleton input', function () {
        var points = __geomUtils.closestPoints([0], [0]);
        expect(points.length).to.equal(2);
        expect(points[0]['x']).to.equal(0);
        expect(points[0]['y']).to.equal(0);
        expect(points[1]['x']).to.equal(0);
        expect(points[1]['y']).to.equal(0);
    });
    it('closest distance returns empty output for mismatched coordinate array lengths', function () {
        var points = __geomUtils.closestPoints([0], [0, 1]);
        expect(points.length).to.equal(0);
    });
    it('closest distance returns correct output for arbitrary point cloud', function () {
        var xcoord = [-2, 1, 2, 0, -8, -7, -8, 5, 1, 1, -2, 5, 4, 3, -5, 8, 4, 2, 1, 0];
        var ycoord = [0, 3, 4, -2, -3, 4, 2, 0, 1, 2, -2, -1, 4, 0, 2, -2, 3, -3, -2, 1];
        var points = __geomUtils.closestPoints(xcoord, ycoord);
        expect(points.length).to.equal(2);
        // solution is not unique, (0,1) to (1,1) and (0,-2) to (1,-2) work - min distance is 1.0
        var dx = points[0]['x'] - points[1]['x'];
        var dy = points[0]['y'] - points[1]['y'];
        var d = Math.sqrt(dx * dx + dy * dy);
        expect(Math.abs(d - 1) < 0.001).to.be.true;
    });
});
