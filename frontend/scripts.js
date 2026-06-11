const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');
const message = document.getElementById('message');

function toggleForm() {
  loginBox.classList.toggle('hidden');
  registerBox.classList.toggle('hidden');
  message.textContent = '';
}

// LOGIN
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      message.style.color = 'green';
      message.textContent = 'Login Successful!';
    } else {
      message.style.color = 'red';
      message.textContent = data.message || 'Login Failed';
    }
  } catch (err) {
    message.style.color = 'red';
    message.textContent = 'Server Error';
  }
});

// REGISTER
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullname = document.getElementById('name').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const res = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullname, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      message.style.color = 'green';
      message.textContent = 'Registration Successful!';
    } else {
      message.style.color = 'red';
      message.textContent = data.message || 'Registration Failed';
    }
  } catch (err) {
    message.style.color = 'red';
    message.textContent = 'Server Error';
  }
});
