import Image from "next/image";
import styled from "styled-components";
import NumberOfReceivedPresents from "../NumberOfReceivedPresents";

interface WideDayProps {
    day: number;
    handleShow(day: number): void;
}

const WideDay = (props:WideDayProps) => {
    const {day,handleShow} = props;
    let color : string = '#1C3249';
    let open = 'off'

    const date = new Date()
    const today = date.getDate();
    const month = date.getMonth()+1;
    if(day<=today){
      if(month == 12 || month == 1){
        color = '#FBCF6E';
        open = 'on'
      }
    }

  return (
        <td colSpan={2}>
            <NumberOfReceivedPresents day={day}/>
            <DayImg src={`/asset_ver2/image/day/${open}/${open}_day${day}.png`}
                    width={100}
                    height={100}
                    layout="responsive"
                    color={color}
                    onClick={() => handleShow(day)}
                    alt={`day${day}`}/>
        </td>
    );
};
export default WideDay;

const DayImg = styled(Image)<{ color?: string }>` 
  justify-content: center;
  padding: 2px;
  align-items: center;
  width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 10;
  background-color:  ${(props) => props.color || '#1C3249'};
  border-radius: 15px;
`;