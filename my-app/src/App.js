import Button from './component.js';
import {MyButton} from './component';
function Heading(){
  return(
    <h1>TRAINS SCHEDULE</h1>
  );
}
                                                                                                    
export default function app(){
  return(
    <>
    <Heading/>
    <Button/>
    <MyButton/>
    </>
  );
}
