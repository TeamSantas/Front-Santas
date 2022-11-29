import {NextPage} from "next";
import {useEffect, useState} from "react";
import styled from "styled-components";
import AuthService from "../../../api/AuthService";
import {kakaoLogin} from "../../../api/hooks/getKakaoLogin";


const Div =styled.div`
  color:white;
`

const Kakao : NextPage = () => {
    const [code, setCode] = useState("");
    const [state, setState] = useState("");
    const [result, setResult] = useState("");

    let result2 = null;
    useEffect(()=> {
        const url = new URL(window.location.href);
        setCode(url.searchParams.get("code"));
        setState(url.searchParams.get("state"));
        console.log(new URL(window.location.href).searchParams.get("code"));
        console.log(new URL(window.location.href).searchParams.get("state"));

        result2=kakaoLogin(new URL(window.location.href).searchParams.get("code"), new URL(window.location.href).searchParams.get("state"));
        setResult(result2);
    },[])

    //code를
    return (
        <Div>
            <h1>인가코드 들어올자리</h1>
            <h3>code : </h3>{code}
            <h1>결과 들어올자리</h1>
            {result}
        </Div>
    )

}
export default Kakao
