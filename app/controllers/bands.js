import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingBand: false,
    newBandName: '',

    isAddButtonDisabled: empty('newBandName'),

    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },
        async saveBand(event) {
            event.preventDefault();
            let newBand = this.get('store').createRecord({ name: this.get('newBandName') });
            await newBand.save();
            this.setProperties({
                newBandName: '',
                isAddingBand: false
            });
            this.transitionToRoute('bands.band.songs', newBand);
        },
        cancelAddBand() {
            this.set('isAddingBand', false);
        }

    }

});
