
describe('practice-5-4', function () {

    var array_data = [23, 45, 16, 37, 3, 99, 22];
    var array_data_v3 = [27, 16, 45, 3, 22, 37, 99, 15, 2, 20, 25, 36, 40, 70, 120];

    function same_between_array(src_data, desc_data)
    {
        if (src_data.length != desc_data.length) return false;

        for(var i = 0; i != src_data.length; i++)
        {
            if (src_data[i] != desc_data[i])
            {
                return false;
            }
        }
        return true;
    }



    it("shell sort", function () {
        console.log("sort 23, 45, 16, 37, 3, 99, 22, from small to large");
        console.log("right sort is 3, 16, 22, 23, 37, 45, 99");
        var test_data = new ArraySort(array_data);
        var desc = test_data.shell_sort();
        console.log("your function exec, sort is "+desc.desc_sort);
        expect(same_between_array(desc.desc_sort,
            [3, 16, 22, 23, 37, 45, 99])).toBe(true);
    });


});