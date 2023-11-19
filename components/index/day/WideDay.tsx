import Image from "next/image";
import styled from "styled-components";

interface WideDayProps {
    day: number;
    handleShow(day: number): void;
}

const WideDay = (props:WideDayProps) => {
    const {day,handleShow} = props;
    return (
        <td colSpan={2}>
            <DayImg src={`/asset_ver2/image/days/day${day}.svg`}
                    width={100}
                    height={100}
                    layout="responsive"
                    onClick={() => handleShow(day)}
                    alt={`day${day}`}/>
        </td>
    );
};
export default WideDay;

const DayImg = styled(Image)` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 10;
`;