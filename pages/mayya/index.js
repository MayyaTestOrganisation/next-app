import { useState, useEffect } from 'react';

const obj = {
  contact_us: {
    text_template: "Test {testA}",
    text_elements: {
      phone_number: { 
      type : "number",
      value : "088"
    },
  }
}}

const str = `To place a legal ad in the <NAME>, call <PHONE> with extension <EXTENSION> or send an email to <EMAIL>. 
Our notice specialists will be able to walk you through the process – but be prepared with:
&#8226; Your name, billing address, telephone number and email address
&#8226; The text of the ad you wish to place
&#8226; Any images you must place in the ad (such as maps or logos)
&#8226; The dates you’d like the ad to begin to run (subject to our deadlines). Some ads must run multiple times under state law; if so, let us know how many times (and on which dates) you want the ad to be published
All ads are automatically published on our website, <DOMAIN> and are automatically sent to the statewide public-notice site operated by the Florida Press Association`;

const replacements = {
  NAME: 'App',
  PHONE: '088',
  EXTENSION: '3',
  EMAIL: 'test@gmail.com',
  DOMAIN: 'http://app.com/public-notices'
}

function Mayya() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/mayya-data");

      if (!response.ok) {
        console.log(`Error: ${response.status}`);
      }
    const data = await response.json();
    console.log(data.formatted)
    setData(data.template);
    })();
  }, []);

  return data.length > 0 
    ? <div>
        {data.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div> 
    : null
}

export default Mayya;
