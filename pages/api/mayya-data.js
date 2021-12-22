// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const str = `To place a legal ad in the <NAME>, call <PHONE> with extension <EXTENSION> or send an email to <EMAIL>.\nOur notice specialists will be able to walk you through the process – but be prepared with:\nYour name, billing address, telephone number and email address\nThe text of the ad you wish to place\nAny images you must place in the ad (such as maps or logos)\nThe dates you’d like the ad to begin to run (subject to our deadlines). Some ads must run multiple times under state law; if so, let us know how many times (and on which dates) you want the ad to be published\nAll ads are automatically published on our website, <DOMAIN> and are automatically sent to the statewide public-notice site operated by the Florida Press Association`;
  
  const replacements = {
    "<NAME>": 'App',
    "<PHONE>": '088',
    "<EXTENSION>": '3',
    "<EMAIL>": 'test@gmail.com',
    "<DOMAIN>": 'http://app.com/public-notices'
  }

  const formattedStr = str.replace(/<\w+>/g, function(all) {
    return Object.prototype.hasOwnProperty.call(replacements, all) ? replacements[all] : all;
  });

  const template = formattedStr.split("\n");
  console.log(formattedStr, template)

  res.status(200).json({ template });
}
