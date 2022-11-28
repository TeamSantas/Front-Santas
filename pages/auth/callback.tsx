import {useEffect, useState} from "react";
import styled from "styled-components";

const Div = styled.div` 
    color: white;
    text-align: center;
`

const Callback = () => {
    const [code, setCode] = useState(null);

    useEffect(()=>{
        setCode(new URL(window.location.href).searchParams.get("code"))
        console.log(window.location.href);
        console.log(code);
    },[code])

    return (
        <Div>
            <h2>토큰 나올 자리</h2>
            {code}
            {window.location.href}
        </Div>
    )
}
export default Callback
