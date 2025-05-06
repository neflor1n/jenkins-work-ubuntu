const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/movie',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (data === 'Мой любимый фильм: Побег из Шоушенка') {
      console.log('✅ Тест пройден');
      process.exit(0);
    } else {
      console.error(`❌ Ожидалась другая строка, а получено: ${data}`);
      process.exit(1);
    }
  });
});

req.on('error', error => {
  console.error(`❌ Ошибка подключения: ${error.message}`);
  process.exit(1);
});

req.end();
