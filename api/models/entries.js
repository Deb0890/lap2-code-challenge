const db = require ('../dbConfig')

class Entry {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.story = data.story
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const entriesData = await db.query(`SELECT * FROM entries;`)
                const entries = entriesData.rows.map(d = new Entry(d))
                resolve(entries);
            } catch (err) {
                reject("Error retrieving entries")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let entryData = await db.query(`SELECT * FROM entries WHERE id = $1;`, [ id ]);
                let entry = new Entry(entryData.rows[0]);
                resolve (entry);
            }
        })
    }

}