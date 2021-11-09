const express = require('express');

const candidateRouter = require('./routes/candidateRoutes');
const statusRouter = require('./routes/statusRoutes');
const roleRouter = require('./routes/roleRoutes');
const outcomeRouter = require('./routes/outcomeRoutes');
const commonRouter = require('./routes/commonRoutes');

const app = express();
app.use(express.json());

app.use('/api/candidates', candidateRouter);
app.use('/api/outcomes', outcomeRouter);
app.use('/api/roles', roleRouter);
app.use('/api/statuses', statusRouter);
app.use('/api', commonRouter);

module.exports = app;
