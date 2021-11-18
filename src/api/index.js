import request from '../utils/request';

export const fetchData = query => {
    return request({
        // url: './table.json',
        url: '/selectList',
        method: 'post',
        params: query
    });
};

export const removeData = query => {
    return request({
        url: '/removeById',
        method: 'get',
        params: query
    });
};


export const modifyData = user => {
    // return request({
    //     // url: './table.json',
    //     url: '/editById',
    //     method: 'put',
    //     params: user
    // });

    return request({
        method: 'post',
        url: 'editById',
        data: user
    });
};
