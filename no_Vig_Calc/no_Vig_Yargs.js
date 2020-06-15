const yargs = require('yargs');
const convertMLtoProbs = require('./no_Vig_Calc');

yargs.command({
  command: 'convertML',
  describe: 'Input two ML to get recieve the non-vig ML',
  builder: {
    ml_One: {
      describe: "The First Team's ML",
      demandOption: true,
      type: 'Number',
    },
    ml_Two: {
      describe: "The Second Team's ML",
      demandOption: true,
      type: 'number',
    },
  },
  handler: (argv) => {
    convertMLtoProbs(argv.ml_One, argv.ml_Two);
  },
});

yargs.parse();
