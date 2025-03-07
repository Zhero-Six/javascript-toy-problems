// speed-detector.js
function speedDetector(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) return "Ok";
    let points = Math.floor((speed - speedLimit) / 5);
    return points > 12 ? "License suspended" : `Points: ${points}`;
  }
  console.log(speedDetector(80)); // Output: Points: 2
  