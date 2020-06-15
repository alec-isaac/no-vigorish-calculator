const chalk = require('chalk');

//For No Vig ML
const roundML = (num) => (Math.round(num * 10) / 10).toFixed(2);

//For Probabilities
const roundProbs = (num) => (Math.round(num * 100) / 100).toFixed(2);

//For Converting the No-Vig Probs to No-Vig ML
const convertNoVigProbsToNoVigML = (no_Vig_Prob_One, no_Vig_Prob_Two) => {
  let no_Vig_ML_One;
  let no_Vig_ML_Two;

  if (no_Vig_Prob_One > 50) {
    no_Vig_ML_One = -(no_Vig_Prob_One / (100 - no_Vig_Prob_One)) * 100;
    no_Vig_ML_Two = ((100 - no_Vig_Prob_Two) / no_Vig_Prob_Two) * 100;
  } else if (no_Vig_Prob_One < 50) {
    no_Vig_ML_One = ((100 - no_Vig_Prob_One) / no_Vig_Prob_One) * 100;
    no_Vig_ML_Two = -(no_Vig_Prob_Two / (100 - no_Vig_Prob_Two)) * 100;
  } else {
    no_Vig_ML_One = 100;
    no_Vig_ML_Two = 100;
  }

  no_Vig_ML_One = roundML(no_Vig_ML_One);
  no_Vig_ML_Two = roundML(no_Vig_ML_Two);

  return { no_Vig_ML_One, no_Vig_ML_Two };
};

// Accepts the sportsbooks ml for each team, returns the vig probs, no-vig probs, no-vig MLs, and total Vig added
const convertMLtoProbs = (ml_One, ml_Two) => {
  let vig_Probs_One;
  let vig_Probs_Two;
  let total_Vig_Added;

  let no_Vig_Probs_One;
  let no_Vig_Probs_Two;

  if (Math.sign(ml_One) == 1) {
    vig_Probs_One = (100 / (100 + ml_One)) * 100;
    vig_Probs_Two = (Math.abs(ml_Two) / (100 + Math.abs(ml_Two))) * 100;
  } else {
    vig_Probs_One = (Math.abs(ml_One) / (100 + Math.abs(ml_One))) * 100;
    vig_Probs_Two = (100 / (100 + ml_Two)) * 100;
  }

  if (ml_One == -110 && ml_Two == -110) {
    vig_Probs_One = 50;
    vig_Probs_Two = 50;
  }

  total_Vig_Added = vig_Probs_One + vig_Probs_Two - 100;

  no_Vig_Probs_One = (vig_Probs_One / (vig_Probs_Two + vig_Probs_One)) * 100;

  no_Vig_Probs_Two = (vig_Probs_Two / (vig_Probs_Two + vig_Probs_One)) * 100;

  const { no_Vig_ML_One, no_Vig_ML_Two } = convertNoVigProbsToNoVigML(
    no_Vig_Probs_One,
    no_Vig_Probs_Two
  );

  console.log(chalk`
    {white.bold.underline No Vig Calculator}
  `);

  console.log(chalk`
    {white.bold.underline ml_One:} {cyan.bold ${ml_One}}  
    {white.bold.underline no_Vig_ML_One:} {cyan.bold ${no_Vig_ML_One}}  
    {white.bold.underline vig_Probs_ML_One:} {cyan.bold ${roundProbs(
      vig_Probs_One
    )}%}  
    {white.bold.underline no_Vig_Probs_One:} {cyan.bold ${roundProbs(
      no_Vig_Probs_One
    )}%}
    `);

  console.log(chalk`
    {cyan.bold.underline ml_Two:} {white.bold ${ml_Two}}  
    {cyan.bold.underline no_Vig_ML_Two:} {white.bold ${no_Vig_ML_Two}}  
    {cyan.bold.underline vig_Probs_ML_Two:} {white.bold ${roundProbs(
      vig_Probs_Two
    )}%}  
    {cyan.bold.underline no_Vig_Probs_Two:} {white.bold ${roundProbs(
      no_Vig_Probs_Two
    )}%}
    `);

  console.log(
    chalk`
    {white.bold.underline Total Vig Added By SportsBook:} {red.bold ${roundProbs(
      total_Vig_Added
    )}%}`
  );

  console.log('')
};

module.exports = convertMLtoProbs;
