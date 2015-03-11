
describe('practice-1-3', function () {

    var count = Math.floor(Math.random()*10) + 5;
    var nums = create_random_data(count);

    function create_random_data(count)
    {
        var nums = [];
        for ( i = 0; i != count; i++)
        {
            nums.push(Math.floor(Math.random()*30));
        }
        return nums;
    }

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

    it("delete_data_from_array_last", function () {
        var temp_data = nums.concat();
        var temp_data2 = nums.concat();
        console.log("it delete a data from the array last, the array : " + nums);
        delete_data_from_array_last(temp_data);
        console.log("Delete the data from the array, your function exec , the array : " + temp_data);
        temp_data2.pop()
        console.log("Delete the data from the array, true function exec , the array : " + temp_data2);
        expect(same_between_array(temp_data,temp_data2)).toBe(true);

    });

});




