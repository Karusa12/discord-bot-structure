import client from './bot';
import cron from 'node-cron';

import cron_func from './function/cron';

cron.schedule('*/5 * * * *', async () => { // Every 5 minutes

  await cron_func(client);

});

export default cron;