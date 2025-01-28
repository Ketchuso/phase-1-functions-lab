// Code your solution in this file!
function distanceFromHqInBlocks(Location){
    if (Location > 42){
        return Location - 42
    }
    else {
        return 42 - Location
    }
}

function distanceFromHqInFeet(Location){
    return distanceFromHqInBlocks(Location) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264
    }
    else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination){
    const feetTravelled = distanceTravelledInFeet(start, destination)

    if (feetTravelled < 400){
        return 0
    }
    else if (feetTravelled< 2000){
        return .02 * (feetTravelled - 400)
    }
    else if (feetTravelled < 2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }
}