// Code your solution in this file!
function distanceFromHqInBlocks(startingLoc) {
    let hQ = 42
    if(startingLoc > 42){
        return startingLoc - hQ
    }
    else if (startingLoc < 42)
    return Math.abs(startingLoc - 42)
}

function distanceFromHqInFeet(startingLoc) {
    return distanceFromHqInBlocks(startingLoc) * 264
}

function distanceTravelledInFeet(start, end) {
    const travelledInFeet = Math.abs((end - start) * 264)
    if(end > start)
        return travelledInFeet
    else if (end < start)
        return travelledInFeet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let farePrice = 0
    if(distance < 400) {
        return farePrice
    }
    else if(distance >= 400 && distance <= 2000 ) {
        return ((farePrice + distance) - 400) * 0.02
    }
    else if(distance >= 2000 && distance <= 2500) {
        return farePrice + 25
    }
    else if(distance > 2500) {
        return "cannot travel that far"
    }
}


