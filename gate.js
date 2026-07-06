// ponytail: not real security, password visible in source — fine for "don't look yet".
// An overlay form instead of prompt(): mobile/in-app browsers suppress dialogs during page load.
(function () {
  if (localStorage.getItem('gate') === 'open') return;
  document.documentElement.style.visibility = 'hidden';
  addEventListener('DOMContentLoaded', function () {
    var gate = document.createElement('div');
    gate.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#eaf4ea,#c8e1d2)';
    gate.innerHTML = '<form style="display:flex;gap:.5rem">' +
      '<input type="password" placeholder="Password" style="font:inherit;padding:.5rem .75rem;border:1px solid #96c8a5;border-radius:8px;background:#fdfcf6">' +
      '<button style="font:inherit;padding:.5rem 1rem;border:1px solid #96c8a5;border-radius:8px;background:#fdfcf6;cursor:pointer">Enter</button></form>';
    document.body.appendChild(gate);
    document.documentElement.style.visibility = '';
    var input = gate.querySelector('input');
    input.focus();
    gate.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value === 'runot') {
        localStorage.setItem('gate', 'open');
        gate.remove();
      } else {
        input.value = '';
      }
    });
  });
})();
