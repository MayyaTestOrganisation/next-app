// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Fetch the template...
  const stringWithPlaceholders = `To place a legal ad in the {name}, call {phone} with extension {extension} or send an email to {email}.\nOur notice specialists will be able to walk you through the process – but be prepared with:\nYour name, billing address, telephone number and email address\nThe text of the ad you wish to place\nAny images you must place in the ad (such as maps or logos)\nThe dates you’d like the ad to begin to run (subject to our deadlines). Some ads must run multiple times under state law; if so, let us know how many times (and on which dates) you want the ad to be published\nAll ads are automatically published on our website, {domain} and are automatically sent to the statewide public-notice site operated by the Florida Press Association`;
  
  // Fetch the replacements...
  const replacements = {
    name: 'App',
    phone: '088',
    extension: '3',
    email: 'test@gmail.com',
    domain: 'http://app.com/public-notices'
  }

  // Fill the template
  const formattedStr = stringWithPlaceholders.replace(
    /{(\w+)}/g, 
    (placeholderWithDelimiters, placeholderWithoutDelimiters) =>
    replacements.hasOwnProperty(placeholderWithoutDelimiters) ? 
      replacements[placeholderWithoutDelimiters] : placeholderWithDelimiters
  );

  // Create an array of paragraphs
  const template = formattedStr.split("\n");

  res.status(200).json({ template });
}
