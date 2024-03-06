// Synchronous
// console.log("First");
// console.log("Second");
// console.log("Third");

// Asynchronous - setTimeout()
// console.log("First");
// setTimeout(() => console.log("Second"), 2000) // wait for 2 seconds before running
// console.log("Third");

// // Async - JS Callbacks
// const getData = (callback) => {
//     setTimeout(() => {
//         const data = "This is the data.";
//         callback(data);
//     }, 2000); // simulate the waiting time for fetching data
// }

// const processData = (data) => {
//     console.log("Processed data:", data)
// }

// getData(processData);

// Callback Hell
// const step1 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 1 complete.")
//         callback();
//     }, 1000);
// }

// const step2 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 2 complete.")
//         callback();
//     }, 1000);
// }

// const step3 = (callback) => {
//     setTimeout(() => {
//         console.log("Step 3 complete.")
//         callback();
//     }, 1000);
// }

// callback hell
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps complete.");
//         })
//     })
// })

const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
    //   reject(Error("I'm an Error !!"))
      resolve();
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
    //   throw Error("Throw Error")
      resolve();
    }, 1000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      resolve();
    }, 1000);
  });
};

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => console.log("All Steps completed."))
//   .catch((error) => {
//     console.error("An Error occurred:", error);
//   });

// async - await keyword

const performSteps = async () => {
  try {
    await step1();
    await step2();
    await step3();
    console.log("All Steps completes.");
  } catch (error) {
    console.error('Ann error >>> :>> ', error);
  }
};
performSteps()