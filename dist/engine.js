// Pure simulation functions: independent of the page and easy to test.
export const experiments = [
 {id:'blink',name:'Blink an LED',category:'Digital output',duration:'8 min',label:'Blink interval',unit:'ms',min:100,max:2000,step:100,value:500,description:'Your first signal. Make an LED blink and see how code becomes a physical action.',learn:'A digital output has two states: HIGH and LOW. delay() holds each state for the chosen interval.',question:'With two 500 ms delays, how long is one complete blink cycle?',answers:['500 ms','1 second','2 seconds'],correct:1,explanation:'One cycle includes 500 ms on and 500 ms off: 1,000 ms in total.'},
 {id:'pwm',name:'Fade with PWM',category:'Analog-style output',duration:'10 min',label:'PWM duty value',unit:'/ 255',min:0,max:255,step:1,value:128,description:'Explore how rapidly switching a pin changes the apparent brightness of an LED.',learn:'PWM switches between HIGH and LOW. The duty cycle sets the fraction of time spent HIGH; it does not produce a true analog voltage.',question:'What does a PWM value of 255 represent in this 8-bit sketch?',answers:['Always LOW','About 50% duty','Always HIGH'],correct:2,explanation:'255 is the maximum 8-bit PWM value, so the output stays HIGH.'},
 {id:'analog',name:'Read a sensor',category:'Analog input',duration:'12 min',label:'Potentiometer position',unit:'%',min:0,max:100,step:1,value:50,description:'Turn a virtual potentiometer and watch a changing voltage become a digital reading.',learn:'An ADC converts an input voltage into a number. This model uses 10-bit readings (0–1023) and the selected board’s supply as its reference.',question:'At half of the reference voltage, a 10-bit ADC reads approximately…',answers:['128','512','1023'],correct:1,explanation:'Half of the 0–1023 range is approximately 512.'}
];
export function sample(id,value,elapsed,voltage=5){
 if(id==='blink')return {high:Math.floor(elapsed/value)%2===0,reading:Math.floor(elapsed/value)%2===0?1:0};
 if(id==='pwm')return {high:value>0,reading:Math.round(value/255*100),brightness:value/255};
 return {high:false,reading:Math.round(value/100*1023),voltage:value/100*voltage};
}
export function sketch(id,value,board){
 const pin=id==='blink'?13:9;
 const resolution=board==='teensy'?(id==='analog'?'  analogReadResolution(10);\n':id==='pwm'?'  analogWriteResolution(8);\n':''):'';
 if(id==='analog')return `// Potentiometer wiper → A0\nvoid setup() {\n  Serial.begin(9600);\n${resolution}}\n\nvoid loop() {\n  int value = analogRead(A0);\n  Serial.println(value);\n  delay(100);\n}`;
 return `// ${id==='blink'?'Blink the onboard LED':'External LED on pin 9 through 330 Ω'}\nconst int LED_PIN = ${pin};\n\nvoid setup() {\n${resolution}  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n${id==='blink'?`  digitalWrite(LED_PIN, HIGH);\n  delay(${value});\n  digitalWrite(LED_PIN, LOW);\n  delay(${value});`:`  analogWrite(LED_PIN, ${value});`}\n}`;
}
