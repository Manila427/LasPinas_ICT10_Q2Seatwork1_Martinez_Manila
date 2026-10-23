const clubMembers = [
  "gabby chua",
  "manila martinez",
  "yza santiago",
  "kate velo",
  "yna sabulao",
  "sophie gamban",
  "becca vinco",
  "athena silva"
];

const form = document.getElementById("membership-form");
const resultBox = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNameInput = document.getElementById("first_name");
  const lastNameInput = document.getElementById("last_name");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (!firstName || !lastName) {
    resultBox.textContent = "Please enter both your first and last name.";
    resultBox.classList.remove("success", "error");
    resultBox.classList.add("error");
    return;
  }

  const candidate = `${firstName} ${lastName}`.toLowerCase();
  const isMember = clubMembers.includes(candidate);

  if (isMember) {
    resultBox.textContent = `Congratulations ${firstName} ${lastName}, you are part of Glee Club.`;
    resultBox.classList.remove("error");
    resultBox.classList.add("success");
  } else {
    resultBox.textContent = `Sorry ${firstName} ${lastName}, your name is not on the list.`;
    resultBox.classList.remove("success");
    resultBox.classList.add("error");
  }
});
