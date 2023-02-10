// Q1
const dividingWatermelon = (weight: number) => {
  if (weight % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

// Q2
const convertStrings = (text: string, chars: number) => {
  const wordsArray = text.split("");
  const firstLetter = wordsArray[0];
  const lastLetter = wordsArray[wordsArray.length - 1];

  let redundantChars = 0;
  for (let i = 1; i < wordsArray.length - 1; i++) {
    redundantChars += 1;
  }

  if (redundantChars >= chars && chars >= 1 && chars <= 100) {
    console.log(`${firstLetter}${redundantChars}${lastLetter}`);
  } else {
    console.log(text);
  }
};

// Q3
const foundAnswerOrNot = (questionsCount: number) => {
  let answers = [];
  for (let i = 0; i < questionsCount; i++) {
    answers.push([
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
    ]);
  }

  let foundSolutions = 0;
  for (let j of answers) {
    let positiveViews = 0;
    for (let k of j) {
      if (k === 1) {
        positiveViews += 1;
      }
    }

    if (positiveViews >= 2) {
      foundSolutions += 1;
    }
  }

  console.log(foundSolutions);
};

foundAnswerOrNot(2);
