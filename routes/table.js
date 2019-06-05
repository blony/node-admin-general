const fs = require('fs')
const items = [{
    "id":0,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"published",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":1,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"draft",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":2,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"deleted",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":3,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"published",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":4,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"published",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":5,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"deleted",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":6,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"published",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
},{
    "id":7,
    "title":"lskdjflksjdlkfjslkdjfllkajdskfljlklsdjflskdjflk",
    "status":"draft",
    "author":"name",
    "display_time":"2010-08-09 13:22:59",
    "pageviews":4567
}]

exports.list = (req,res) => {
    res.json({
        code:20000,
        data:{
            total:items.length,
            items:items
        }
    })
 
}