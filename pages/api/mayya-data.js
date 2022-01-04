// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Fetch the template...
  const stringWithPlaceholders = `<h3>To place a legal ad in the <i>{name}</i>, call <i>{phone}</i> with extension <i>{extension}</i> or send an email to <i>{email}</i>.</h3>\nOur notice specialists will be able to walk you through the process – but be prepared with:\n<ul><li>Your name, billing address, telephone number and email address</li><li>The text of the ad you wish to place</li><li>Any images you must place in the ad (such as maps or logos)</li><li>The dates you’d like the ad to begin to run (subject to our deadlines).</li></ul>\nSome ads must run multiple times under state law; if so, let us know how many times (and on which dates) you want the ad to be published.\nAll ads are automatically published on our website, <a href="{domain}" target="_blank">{domain}</a> and are automatically sent to the statewide public-notice site operated by the <strong>Florida Press Association</strong>.`;
  
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
