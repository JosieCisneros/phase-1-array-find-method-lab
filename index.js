function superbowlWin(array) {
    for (let record of array) {
        if (record.result === "W") {
            return record.year
        }
    }
}

record.find(superbowlWin)