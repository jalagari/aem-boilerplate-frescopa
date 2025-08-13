import { getConfigValue } from './__dropins__/tools/lib/aem/configs.js';

function getAEMPublish() {
  return getConfigValue('aem.publish');
}

function getAEMAuthor() {
  return getConfigValue('aem.author');
}

export { getAEMPublish, getAEMAuthor };
