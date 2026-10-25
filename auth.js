(function () {
  const form = document.querySelector('.auth-form');
  if (!form) return;

  const mode = form.dataset.mode;
  const message = document.getElementById('auth-message');
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirm-password');

  function showError(id, text) {
    const el = document.getElementById(id);
    if (el) { el.textContent = text; el.classList.add('show'); }
  }
  function clearErrors() { form.querySelectorAll('.field-error').forEach(e => { e.textContent=''; e.classList.remove('show'); }); if(message) message.textContent=''; }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); clearErrors();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const values = { name: name?.value.trim() || '', email: email?.value.trim().toLowerCase() || '', password: password?.value || '', confirm: confirm?.value || '' };
    let ok = true;

    if (mode === 'signup' && values.name.length < 2) { showError('name-error','Please enter your full name.'); ok=false; }
    if (!values.email || !validEmail(values.email)) { showError('email-error','Enter a valid email address.'); ok=false; }
    if (values.password.length < 6) { showError('password-error','Password must be at least 6 characters.'); ok=false; }
    if (mode === 'signup' && values.password !== values.confirm) { showError('confirm-error','Passwords do not match.'); ok=false; }
    if (!ok) return;

    const users = JSON.parse(localStorage.getItem('carCurator_users') || '{}');
    if (mode === 'signup') {
      if (users[values.email]) { showError('email-error','An account with this email already exists.'); return; }
      users[values.email] = { name: values.name, password: values.password };
      localStorage.setItem('carCurator_users', JSON.stringify(users));
      localStorage.setItem('carCurator_currentUser', JSON.stringify({ name: values.name, email: values.email }));
      if (message) message.textContent = 'Account created successfully. Redirecting to the homepage...';
    } else {
      const user = users[values.email];
      if (!user || user.password !== values.password) { showError('password-error','Email or password is incorrect.'); return; }
      localStorage.setItem('carCurator_currentUser', JSON.stringify({ name: user.name, email: values.email }));
      if (message) message.textContent = `Welcome back, ${user.name}! Redirecting...`;
    }
    setTimeout(() => { window.location.href = 'index.html'; }, 700);
  });
})();
