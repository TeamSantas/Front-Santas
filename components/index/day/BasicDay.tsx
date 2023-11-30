import Image from "next/image";
import styled from "styled-components";
import NumberOfReceivedPresents from "../NumberOfReceivedPresents";

interface BasicDayProps {
    day: number;
    handleShow(day: number): void;
}

const BasicDay = (props:BasicDayProps) => {
    const {day,handleShow} = props;
    return (
        <td>
            <NumberOfReceivedPresents day={day}/>
            <DayImg src={`/asset_ver2/image/days/day${day}.svg`}
                    width={100}
                    height={100}
                    layout="responsive"
                    onClick={() => handleShow(day)}
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