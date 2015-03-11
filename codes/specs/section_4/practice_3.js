
describe('practice-4-3', function () {


    it("find hash table, it is succ", function () {
        console.log("create open link hash table, table size is 137");
        var hash_table = HashTable.create_hash_table_for_test(137);
        var index1 = hash_table.insert_str_from_hash_for_test('abc');
        var index2 = hash_table.insert_str_from_hash_for_test('bac');
        console.log("insert \'abc\' and \'bac\' to hash_table");

        var find_info = hash_table.find_str_from_hash('bac');

        console.log("find \'bac\' in hash_table,the index is "+find_info.row
        + ",the column is "+find_info.column);
        expect(find_info.row ).toEqual(20);
        expect(find_info.column ).toEqual(1);
        find_info = hash_table.find_str_from_hash('abc');

        console.log("find \'abc\' in hash_table,the index is "+find_info.row
            + ",the column is "+find_info.column);
        expect(find_info.row ).toEqual(20);
        expect(find_info.column ).toEqual(0);
    });

    it("find hash table, it is fails", function () {
        console.log("create open link hash table, table size is 137");
        var hash_table = HashTable.create_hash_table_for_test(137);
        var index1 = hash_table.insert_str_from_hash_for_test('abc');
        console.log("insert \'abc\' to hash_table, the index is "+index1);
        var find_info = hash_table.find_str_from_hash('bac');
        console.log("find \'bac\' in hash_table, the index is "+find_info.row
                     + ",the column is "+find_info.column);
        expect(find_info.row).toEqual(20);
        expect(find_info.column).toEqual(-1);
    });
});