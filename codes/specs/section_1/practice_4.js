
describe('practice-1-4', function () {

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


    it("insert_array_to_array", function () {
        var new_count = Math.floor(Math.random()*5);
        var new_nums = create_random_data(new_count);
        var insert_index = Math.floor(Math.random()*5);

        var temp_data = nums.concat();
        var temp_data2 = nums.concat();
        console.log("Insert the new array("+new_nums+") to the old array("+nums+"),the new array is behind the old index "+insert_index);

        var result_data = insert_data_to_array(temp_data, insert_index, new_nums);
        console.log("Your function exec, Inserted array is "+result_data);
        var result_data2 = insert_new_nums(temp_data2,insert_index,new_nums);
        console.log("True function exec, Inserted array is "+result_data2);

        expect(same_between_array(result_data,result_data2 )).toBe(true);

    function insert_new_nums(temp_data, insert_index, new_nums) {
        for (var i = 0; i != new_nums.length; i++) {
            temp_data.splice(insert_index + i, 0, new_nums[i]);
        }
        return temp_data;
    }

    });

});




