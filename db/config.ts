import { column, defineDb, defineTable } from 'astro:db'

const Dummies = defineTable({
    columns: {
        id: column.text(),
        txt: column.text()
    }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Dummies }
});
