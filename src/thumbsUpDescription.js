import {Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// describe thumbs up gesture 👍
export const thumbsUpDescription = new GestureDescription('thumbs up');

// thumb:
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)
thumbsUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsUpDescription.addCurl(finger, FingerCurl.FullCurl, 0.0);
  thumbsUpDescription.addCurl(finger, FingerCurl.FullCurl, 0.0);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
//thumbsUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpDescription.addDirection(Finger.Index, FingerDirection.FullCurl, 0.0);
thumbsUpDescription.addDirection(Finger.Index, FingerDirection.FullCurl, 0.0);
//thumbsUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

