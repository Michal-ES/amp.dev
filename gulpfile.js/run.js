/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const grow = require('@lib/utils/grow');
const config = require('@lib/config');
const signale = require('signale');

async function run() {
  signale.info('Starting Grow ...');

  config.configureGrow();
  await grow(`run --port 8081`).catch(() => {
    signale.fatal('Grow had an error starting up. See log above for details.');
    process.exit(1);
  });

  const Platform = require('@lib/platform');
  new Platform().start();
}

exports.run = run;
