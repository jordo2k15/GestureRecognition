import {Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const letterA = new GestureDescription('A');

//Thumb
letterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterA.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
letterA.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
letterA.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
letterA.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.0);
letterA.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.0);

//Middle
letterA.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
letterA.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.0);
letterA.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.0);

//Ring
letterA.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
letterA.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.0);

//Pinky
letterA.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
letterA.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.0);