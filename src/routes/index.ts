import express from 'express'; 

import  resizeApi from './api/resizeApi';

const routes = express.Router();

// routes.get('/', (req, res) => {

// });


routes.use('/resize', resizeApi);
export default routes;