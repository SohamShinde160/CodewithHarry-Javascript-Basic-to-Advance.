let a = [
  'Initializing hack tool.....',
  'Connecting to all social media account....',
  'Connecting to server .....',
  'Connection failed... Retrying.....',
  'Connection Established....',
  'Server found ....',
  'Connecting to Whatsapp....',
  'Whatsapp Connection Established....',
  'Connecting to facebook....',
  'Trying a combination of 4.5 Trillion passwords...',
  'Username password found....  ',
  'Connecting to Instagram.....',
  'Access denied.....Reconnecting....',
  'Trying Brute Force Attack .... using Keylocker...',
  'Access Granted to instagram account.... ',
  'Victim hack performed Successfully....!!!!'
];

const sleep = async (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, second * 1000);
  });
};

const showhack = async (messages) => {
  await sleep(2);
  let sidebar = document.getElementById('sidebar');
  sidebar.innerHTML += messages + "<br>";
  let sidebar1 = document.getElementById('sidebar1');
  sidebar1.innerHTML += messages + "<br>";
};

const startHacking = async () => {
  let startButton = document.getElementById('startButton');
  startButton.disabled = true;

  for (let i = 0; i < a.length; i++) {
    await showhack(a[i]);
  }

  startButton.disabled = false;
};

let startButton = document.getElementById('startButton');
startButton.addEventListener('click', startHacking);
