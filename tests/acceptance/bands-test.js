import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';


module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
   test('List bands', async function(assert) {
     window.server.create('band', { name: 'Radiohead' });
     window.server.create('band', { name: 'Long Distance Calling' });

     await visit('/');
  
    let bandLinks = document.querySelectorAll('.rr-band-link');
     assert.equal(bandLinks.length, 2, 'All band links are rendered');
     assert.ok(bandLinks[0].textContent.includes('Radiohead'),
    'First band link contains the band name');
     assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'), 'The other band link contains the band name');
    });
    
});