async function harry() {
  let FSDweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 deg");
    }, 2000);
  });
  let LHRweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("19 deg");
    }, 5000);
  });
  //   FSDweather.then(alert)
  //   LHRweather.then(alert)
  console.log("Fetching FSD Weather... Please wait...");

  let fsdw = await FSDweather;

  console.log("FSD Weather Has been Fetched " + fsdw);

  console.log("Fetching LHR Weather... Please wait...");

  let lhrw = await LHRweather;

  console.log("LHR Weather Has been Fetched " + lhrw);

  return [fsdw, lhrw];
}
 
const cherry = async () => {
  console.log("Hey, I'm Cherry and I'm waiting!");
};


const main1 = async () => {
  console.log("Welcome to Weather Control Room!");
  let a = await harry();
  let b = await cherry();
};
main1();
