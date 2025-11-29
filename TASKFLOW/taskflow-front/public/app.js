const api = 'http://localhost:3000/tasks';
const form = document.getElementById('form');
const list = document.getElementById('tasks');

async function fetchTasks(){
  const res = await fetch(api);
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(t => {
    const li = document.createElement('li');
    li.className = 'task';
    li.textContent = `${t.title} - ${t.status}`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  await fetch(api, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ title })});
  document.getElementById('title').value = '';
  fetchTasks();
});

fetchTasks();
