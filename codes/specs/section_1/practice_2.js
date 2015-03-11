
describe('practice-1-2', function () {

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

    it("add_data_to_array_last", function () {
        var last_data = Math.floor(Math.random()*10+30);
        console.log("it add a data "+ last_data+" to array last");
        var temp_data = nums.concat();
        var temp_data2 = nums.concat();
        add_data_to_array_last(temp_data, last_data);
        console.log("Add the data to the array, your function exec , the array : " + temp_data);
        temp_data2.push(last_data);
        console.log("Add the data to the array, true function exec , the array : " + temp_data2);
        expect(same_between_array(temp_data, temp_data2)).toBe(true);
    });

    it("add_data_to_array_first", function () {
        var last_data = Math.floor(Math.random()*10+30);
        console.log("it add a data "+ last_data + " to array first");
        var temp_data = nums.concat();
        var temp_data2 = nums.concat();
        temp_data2.unshift(last_data);
        add_data_to_array_first(temp_data, last_data);
        console.log("Add the data to the array, your function exec , the array : " + temp_data);
        console.log("Add the data to the array, true function exec , the array : " + temp_data2);
        expect(same_between_array(temp_data, temp_data2)).toBe(true);
    });




});




