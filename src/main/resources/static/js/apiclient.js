var apimock = (function () {
    return {
        const blueprints = {
            url: /blueprints/${author},
            contentType:application/json
        },
        const promise = $.get( blueprints )
        /*
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author] || [] );
        }*/
        ,

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            if( mockdata[author] === null ) return;
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, [blueprint] || []);
        },
        getMockaData: ()=>{
            return mockdata;
        }
    }
})();

//path ="/{author}"
//path ="/{author}/{name}"