import Route from '@ember/routing/route';

export default Route.extend({

    redirect(band) {
        if (band.get('description')) {
            this.transitionTo('bands.band.details');
        }
        else{
            this.transitionTo('bands.band.songs')
        }
    }
});