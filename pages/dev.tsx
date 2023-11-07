import styled from "styled-components";

const Dev = () => {

    return (
        <>
            <a href="https://port-0-back-santas-euegqv2llojq1wch.sel5.cloudtype.app/oauth2/authorization/kakao">
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