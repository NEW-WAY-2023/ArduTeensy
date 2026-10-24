import test from 'node:test';
import assert from 'node:assert/strict';
import {sample,sketch,experiments} from '../dist/engine.js';
test('blink transitions and repeats at exact boundaries',()=>{for(const [time,high] of [[0,true],[499,true],[500,false],[999,false],[1000,true]])assert.equal(sample('blink',500,time).high,high)});
test('PWM endpoints and midpoint',()=>{assert.equal(sample('pwm',0,0).brightness,0);assert.equal(sample('pwm',255,0).brightness,1);assert.equal(sample('pwm',128,0).reading,50)});
test('ADC endpoints and board-specific voltage',()=>{assert.equal(sample('analog',0,0).reading,0);assert.equal(sample('analog',100,0).reading,1023);assert.equal(sample('analog',50,0).reading,512);assert.equal(sample('analog',100,0,3.3).voltage,3.3)});
test('sketch reflects changed interval, pin and board resolution',()=>{assert.equal((sketch('blink',800,'uno').match(/delay\(800\)/g)||[]).length,2);assert.match(sketch('pwm',200,'teensy'),/analogWriteResolution\(8\)/);assert.match(sketch('pwm',200,'uno'),/analogWrite\(LED_PIN, 200\)/);assert.match(sketch('analog',50,'teensy'),/analogReadResolution\(10\)/);assert.match(sketch('analog',50,'uno'),/analogRead\(A0\)/)});
test('each lesson has a valid answer and valid default parameter',()=>{for(const e of experiments){assert.ok(e.correct>=0&&e.correct<e.answers.length);assert.ok(e.value>=e.min&&e.value<=e.max)}});
