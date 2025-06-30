import express from 'express';
import nunjucks from 'nunjucks';
import routes from './routes'

const app = express();
const PORT = 3000;

nunjucks.configure('src', {
    autoescape: true,
    express: app,
});
  
app.use(routes);

app.use(express.static('src/public'));
  
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});