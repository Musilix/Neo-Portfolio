const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  console.log(process.env.WAKA_API_KEY);
  const waka_url =
    "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=" +
    process.env.WAKA_API_KEY;

  const waka_res = await fetch(waka_url).then((res) => res.json());

  console.log("hit");
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(waka_res),
  };
};
