import {Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const hello = new GestureDescription('hello');

// Thumb
hello.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.00)
hello.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
hello.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
hello.addCurl(Finger.Index, FingerCurl.NoCurl, 1.00);
hello.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
hello.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.00);
hello.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Ring
hello.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.00);
hello.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.25);

// Middle
hello.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.00);
hello.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);
