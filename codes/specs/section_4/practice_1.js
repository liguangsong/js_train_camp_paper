
describe('practice-4-1', function () {

    it("create open link hash table", function () {
        console.log("create open link hash table, table size is 137");
        var hash_table = HashTable.create_hash_table(137);
        console.log("your create function exec, table size is "+hash_table.table.length);
        expect(hash_table.table.length == 137).toBe(true);
        for (var i = 0 ; i != 137; i++)
        {
            expect(hash_table.table[i] instanceof Array).toBe(true)
            if (!(hash_table.table[i] instanceof Array)) break;
        }
        if (i == 137)
            console.log("your create function exec, all table is a array");
        else
            console.log("your create function exec, not all table is a array");

    });
});