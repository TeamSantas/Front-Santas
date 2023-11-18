import Image from "next/image";
import styled from "styled-components";

interface BasicDayProps {
    day: number;
    idx: number;
}

const BasicDay = (props:BasicDayProps) => {
    const {day, idx} = props;
    return (
        <td key={idx}>
            <DayImg src={`/asset_ver2/image/days/day${day}.svg`}
                    width={100}
                    height={100}
                    layout="responsive"
                    key={idx}
                    alt={`day${day}`}/>
        </td>
    );
};
export default BasicDay;
const DayImg = styled(Image)` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 10;
`;