import http from 'k6/http';
import { sleep } from 'k6';
export let options = { stages: [ { duration: '30s', target: 10 }, { duration: '60s', target: 50 }, { duration: '30s', target: 100 } ] };
export default function() {
  http.get('http://localhost:3000/tasks');
  sleep(1);
}
