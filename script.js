document.getElementById("passwordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const currentPassword = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (newPassword.length < 6) {
    message.textContent = "New password must be at least 6 characters.";
    message.className = "error";
    return;
  }

  if (newPassword !== confirmPassword) {
    message.textContent = "New password and confirm password do not match.";
    message.className = "error";
    return;
  }

  // Simulate success
  message.textContent = "Password updated successfully!";
  message.className = "success";

  // Clear form
  document.getElementById("passwordForm").reset();
});

function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}
