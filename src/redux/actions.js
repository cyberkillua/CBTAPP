export function startT() {
  return {
    type: "START_TIMER",
  };
}
export function stopT(){
  return {
    type: "STOP_TIMER"
  }
}
export function Tick(){
  return{
    type: "TICK"
  }
}



