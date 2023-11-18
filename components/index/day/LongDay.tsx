import Image from "next/image";
import styled from "styled-components";
interface LongDayProps {
    day: number;
    idx: number;
}

const LongDay = (props:LongDayProps) => {
    const {day, idx} = props;
    return (
        <td rowSpan={2} key={idx}>
            <DayImg src={`/asset_ver2/image/days/day${day}.svg`}
                    width={`100`}
                    height={`100`}
                    key={idx}
                    alt={`day${day}`}/>
        </td>
    );
};
export default LongDay;
const DayImg = styled(Image)` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 10;
`;