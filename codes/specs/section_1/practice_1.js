
describe('practice-1-1', function () {

    var names = ["Enid","ShockingLee","laijin.LU","James.Tong"];

    it("find data 1 from data array", function () {
        var index = find_data_index_from_array(names,"Enid");
        console.log("Array find data index:"+index);
        expect(index).toBe(0);
    });

    it("find data 2 from data array", function () {
        var index = find_data_index_from_array(names,"ShockingLee");
        console.log("Array find data index:"+index);
        expect(index).toBe(1);
    });

    it("find data 3 from data array", function () {
        var index = find_data_index_from_array(names,"laijin.LU");
        console.log("Array find data index:"+index);
        expect(index).toBe(2);
    });

    it("find data 4 from data array", function () {
        var index = find_data_index_from_array(names,"James.Tong");
        console.log("Array find data index:"+index);
        expect(index).toBe(3);
    });


    it("should return -1 when data doesn't exist in data array", function () {
        var index = find_data_index_from_array(names,"NoOne");
        console.log("Array find data index:"+index);
        expect(index).toBe(-1);
    });

});




