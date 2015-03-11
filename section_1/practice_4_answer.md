    function insert_data_to_array( array_a ,insert_index, array_b)
    {
        var result = array_a.concat();
        for (var i = 0 ; i != array_b.length; i++)
        {
            result.splice(insert_index + i, 0 , array_b[i]);
        }
        return result;
    }
    
    
