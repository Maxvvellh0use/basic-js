module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const quantity = Math.pow(2, disksNumber) - 1;
    const allTime = quantity/(turnsSpeed/3600);
    return  {
        turns: quantity,
        seconds: allTime
    };
};

// console.log(calculateHanoi(736, 78853564));