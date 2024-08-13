package com.sist.jwt_mem.result;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResultData<T> {
    private int totalCount;
    private String msg;
    private T data;

    public static <T> ResultData<T> of(int totalCount,
                                   String msg,
                                   T data){
        return new ResultData<>(totalCount,msg,data);
    }

    public static <T> ResultData<T> of(int totalCount,
                                   String msg){
        return new ResultData<>(totalCount,msg,null);
    }
}
