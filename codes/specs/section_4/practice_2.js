
describe('practice-4-2', function () {

    it("insert hash table, insert index is right ", function () {
        console.log("create open link hash table, table size is 137");
        var hash_table = HashTable.create_hash_table_for_test(137);
        console.log("insert \'abc\' to hash table");
        console.log(hash_table);
        var index = hash_table.insert_str_from_hash('abc');
        console.log("right index is 20, your function index is "+index);
        expect(index == 20).toBe(true);
    });
    it("insert hash table, insert same index", function () {
        var hash_table = HashTable.create_hash_table_for_test(137);
        console.log("insert hash table, insert same index");
        hash_table.insert_str_from_hash('abc');
        hash_table.insert_str_from_hash('bac');
        var index = hash_table.insert_str_from_hash('acb');
        expect(hash_table.table[index].length ).toEqual(3);
        expect(hash_table.table[index].pop() ).toEqual('acb');
        expect(hash_table.table[index].pop() ).toEqual('bac');
        expect(hash_table.table[index].pop() ).toEqual('abc');

    });

    it("insert hash table, insert different index", function () {
        var hash_table = HashTable.create_hash_table_for_test(137);
        console.log("insert hash table, insert different index");
        var index1 = hash_table.insert_str_from_hash('abc');
        var index2 = hash_table.insert_str_from_hash('bbc');
        expect(hash_table.table[index1].pop() ).toEqual('abc');
        expect(hash_table.table[index2].pop() ).toEqual('bbc');
    });

});