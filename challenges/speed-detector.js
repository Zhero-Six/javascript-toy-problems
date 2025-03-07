function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
const speed = prompt("Enter the car's speed:");
speedDetector(Number(speed));
