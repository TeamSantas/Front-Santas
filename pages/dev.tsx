import styled from "styled-components";

const Dev = () => {

    return (
        <>
            <a href="https://port-0-back-santas-euegqv2llojq1wch.sel5.cloudtype.app/login/oauth2/code/kakao">
                <Button type="button" value="Facebook">이동하기</Button>
            </a>
        </>
    )
}

export default Dev

const Button = styled.button`
  width: 100px;
  display: flex;
  margin: auto;
`