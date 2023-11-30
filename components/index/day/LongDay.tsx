import Image from "next/image";
import styled from "styled-components";
import NumberOfReceivedPresents from "../NumberOfReceivedPresents";
interface LongDayProps {
    day: number;
    handleShow(day: number): void;
}

const LongDay = (props:LongDayProps) => {
  const {day,handleShow} = props;
  let color : string = '#1C3249';
  let open = 'off'

  const date = new Date()
  const today = date.getDate();
  const month = date.getMonth();
  if(day<=today && month == 12 || month == 1){
      color = '#FBCF6E';
      open = 'on'
    }

  return (
        <td rowSpan={2}>
            <NumberOfReceivedPresents day={day}/>
            <DayImg src={`/asset_ver2/image/day/${open}/${open}_day${day}.png`}
                    width={`100`}
                    height={`100`}
                    color={color}
                    onClick={() => handleShow(day)}
                    alt={`day${day}`}/>
        </td>
    );
};
export default LongDay;
const DayImg = styled(Image)<{ color?: string }>` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  background-color:  ${(props) => props.color || '#1C3249'};
  border-radius: 15px;
`;