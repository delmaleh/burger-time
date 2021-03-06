// USA - bomb()

// 1 - USA  -- 1234
// 2 - France  -- 2546
// 3 - Chine -- 9696
// 4 - Russie -- 7777
// 5 - Israel -- 2626
// daniel --4325

getFranceCode(1234)
  .then(getChineCode)
  .then(getRussieCode)
  .then(getIsraelCode)
  .then(getDanielCode)
  .then(successHandler)
  .catch(errorHandler)
  .finally(() => {
    console.log(
      "I'm done for the day.  I dont care what happened with the bomb"
    );
  });

function successHandler(result) {
  alert("The final code is: " + result);
}

function errorHandler(error) {
  alert("There was a problem, error: " + error);
}

function getFranceCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("France is soooo nice");
      if (code === 1234) {
        resolve(2546);
      } else {
        reject("USA gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getDanielCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Daniel biuffle");
      if (code === 2626) {
        resolve(4325);
      } else {
        reject("israel gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getChineCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The china wall is huuuuge");
      if (code === 2546) {
        resolve(9696);
      } else {
        reject("France gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getRussieCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Why is it so coooold here");
      if (code === 9696) {
        resolve(7777);
      } else {
        reject("China gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getIsraelCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I dont want to leave this plaaaaace");
      if (code === 7777) {
        const Soldiers = [
          "haim",
          "dudu",
          "lili",
          "shushu",
          "wewe",
          "vivi",
          "toto",
        ];

        const AllPromises = [];
        Soldiers.forEach((s) => {
          AllPromises.push(
            new Promise((resolve, reject) => {
              console.log(s + " has departed");
              setTimeout(() => { 
                resolve(s + " has arrived")
              }, parseInt(Math.floor() * 2000));
            })
          );
        });

        Promise.all(AllPromises).then(arr=> {
          arr.forEach(p=> {
            console.log(p)
          })
        })

        resolve(2626);
      } else {
        reject("Russia gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });

}