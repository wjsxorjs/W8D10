"use client"

import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function page() {

    const router = useRouter();

    const API_URL = "http://localhost:8080/api/member/logout";

    function logout(){
        axios({
            url: API_URL,
            method:"POST",
        }).then((res)=>{
            console.log(res);
            if(res.data.msg == "logout"){
                console.log("access_token: "+Cookies.get("accessToken"));
                console.log("refresh_token: "+Cookies.get("refreshToken"));
                Cookies.remove("accessToken");
                Cookies.remove("refreshToken");
                router.push("/");
            }
        });
    }

    useEffect(()=>{
        logout();
    },[]);

        
    return (
        <div>page</div>
    )
}
