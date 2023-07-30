setTimeout(function () {
  const primary = document.getElementById('primary');
  const suggestElem = document.getElementById("secondary-inner");
  const comments = document.getElementById("comments");
  const contents = document.getElementById("contents");
  const acc_name = document.getElementById("account-name");

  if (suggestElem) {
    // Request user data from the background script

    // (async () => {
    //   const response = await chrome.runtime.sendMessage({greeting: "hello"});
    //   // do something with response here, not outside the function
    //   console.log(response);
    // })();

    suggestElem.style.display = "none";
    comments.style.display = "none";
    contents.style.display = "none";

    // Adding a new message
    const para = document.createElement('h2');
    const node = document.createTextNode(`Hello you should focus on studying.. ${acc_name.innerText
    }`);
    para.appendChild(node);

    para.style.fontSize = "50px";
    para.style.color = "#fff";
    para.style.textAlign = "center";

    primary.appendChild(para);
  }
  console.log("amit ", suggestElem);
  console.log(suggestElem);  
}, 700);
