eventsApp.factory('eventData', function ($resource) {

    var resource = $resource('/data/event/:id', { id: '@id' });
    return {
        getEvent: function (id_event) {
            return resource.get({ id:id_event});
        },
        save: function (event) {
            event.id = 999;
            return resource.save(event);
        }
    };
});
