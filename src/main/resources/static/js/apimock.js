var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "T-8000",
            points: [
                {
                    x: 77,
                    y: 88
                },
                {
                    x: 55,
                    y: 35
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        },
        {
            author: 'LexLuthor',
            name: 'LuthorCorp',
            points: [
                {
                    x: 10,
                    y: 60
                },
                {
                    x: 60,
                    y: 60
                },
                {
                    x: 60,
                    y: 10
                },
                {
                    x: 10,
                    y: 10
                }
            ]
        }
    ]

    mockdata['PeterParker'] = [
        {
            author: 'PeterParker',
            name: 'Spiderman',
            points: [
                {
                    x: 60,
                    y: 15
                },
                {
                    x: 30,
                    y:45
                }
            ]
        }
    ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})();