const validateFields = () => {
  const name = document.getElementById("nameToContact").value;
  const email = document.getElementById("email");
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("messsage").value;
  const btn = document.getElementById("button");
  if (name && email.value && email.validity.valid && subject && msg) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

const submitForm = () => {
  const name = document.getElementById("nameToContact").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("messsage").value;

  const msgBody = `<p><b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Subject:</b> ${subject}<br><b>Message:</b> ${msg}</p>`;
  console.log(msgBody);
  sendEmail(msgBody);
};

const sendEmail = (msgBody) => {
  Email.send({
    Host: "smtp.sendgrid.net",
    Username: "apikey",
    Password:
      "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",
    // To: 'hgsahan3@gmail.com',
    To: "sriyabro@gmail.com",
    From: "hsriyanjith@gmail.com",
    Subject: "New Contact Form Message",
    Body: msgBody,
  }).then((res) => {
    console.log(res);
    if (res === "OK") {
      showSnackbar(true);
    } else {
      showSnackbar(false);
    }
  });
};

const showSnackbar = (success) => {
  const sucessMsg = "Message sent sucessfully. Thank you !!";
  const errMsg = "Error sending message. Please try again later !!";

  const snackbar = document.getElementById("snackbar");
  if (success) {
    snackbar.classList.add("success");
    snackbar.innerHTML = sucessMsg;
  } else {
    snackbar.classList.add("error");
    snackbar.innerHTML = errMsg;
  }
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.className = "";
    location.reload();
  }, 3000);
};
