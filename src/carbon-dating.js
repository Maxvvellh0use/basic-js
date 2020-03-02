const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== 'string' || /[a-z]/i.test(sampleActivity) === true
        || sampleActivity <= 0 || sampleActivity > 15 ) {
    return false
  }
  else {
    const activity = parseFloat(sampleActivity);
    const reactionSpeed = .693 / HALF_LIFE_PERIOD;
    const result = Math.ceil(Math.log(MODERN_ACTIVITY/activity) / reactionSpeed);
    return result
  }
};


