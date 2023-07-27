// App.js
import React from 'react';
import { View, StyleSheet, Text, Button, TouchableHighlight} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useState } from 'react';

export default function App() {

  const [result, setResult] = useState('0')
  const [upresult, setupResult] = useState('')
  const [bool, setBool]= useState(true)
  const [dat,setDat] = useState(true)
  const [equal, setEqual] = useState(true)
  const [backup, setBackup] = useState('')

  const numbers = (value) =>{

    if(equal === false || result.includes("=")){
      if(value ==="0" && result=== "=0" || result=== "=0" && value === "00"){
        setResult('0')
        setupResult('')
        setEqual(true)
      }
      else if(result === "=0"){
        setResult(value)
        setupResult('')
        setEqual(true)
      }
      else{
        setResult(backup+value)
        setupResult('')
        setEqual(true)
      }
    }
    else if(result.length ===1 && value==="00"){
      setResult("0")
    }
    else if(result.length ===1 && result==="0"){
      setResult(value)
      
    }
    else if(result === "Error"){
      setResult(value)
      setupResult('')
      setEqual(true)
      setBool(true)
    }
    else{
      setResult(result+value)
      setBool(true)
    }
  };


  const dats = (value) =>{
    if (dat === true){
      setResult(result+value)
      setDat(false)
      setBool(true)
    }
    else{
      console.log("a")
    }
  };


  const process = (value)=>{
    if(equal === false || result.includes("=")){
      setResult(backup+value)
      setupResult('')
      setEqual(true)
      
    }
    else if(result === "Error"){
      setResult("0"+value)
      setupResult('')
      setEqual(true)
    }
    else if (bool === true){
      setResult(result+value)
      setBool(false)
      setDat(true)
    }
    else{
      setResult(result.slice(0, -1).concat(value))
    }
  };

  const Allclear = () =>{
    setResult('0')
    setupResult('')
    setDat(true)
    setBool(true)
    setBackup('')
  };

  const Clear = () => {
    console.log(equal)
    if(equal=== false){
      if(backup.length === 1){
        setResult('0')
        setBackup('')
      }
      else{
        setResult(split(backup,1))
      }
    }
    else if(result.length ===1){
      setResult("0")
      setBool(true)
      setDat(true)
    }
    else if ( result[result.length - 1] === ".") {
      setResult(split(result, 1));
      setDat(true);
    }
    else if(result[result.length - 1] === "+" || result[result.length - 1] === "-" || result[result.length - 1] === "x" || result[result.length - 1] === "÷" || result[result.length - 1] === "%" ){
      setResult(split(result, 1));
      setBool(true)
    }
     else {
      setResult(split(result, 1));
    }
  };

  function split(str,count){
    return str.slice(0, -count)
  };

  const results = ()=> {
    try{
      if(equal === true){
        const withx = result.split("").join("").replace(/x/g, '+')
        const withslash = withx.split("").join("").replace(/÷/g, '/')
        const final = eval(withslash)
        const backups = final.toString()
        const finalstr = "="+final.toString()
        
        
        setupResult(result)
        setResult(finalstr)
        setEqual(false)
        setBackup(backups)
      }
    }
    catch (error) {
      setResult("Error")
    }
    
  };






  return (
    <View style={styles.container}>
      <View style={styles.containera}>
        <Text style={styles.virtual}>{upresult}</Text>
        <Text style={styles.value}>{result}</Text>
      </View>
      <View style={styles.containerb}>
      <Grid>
        <Row>
          <Col style={styles.li}>
            <TouchableHighlight onPress={()=> Allclear()} style={styles.button}>
              <Text style={styles.process}>AC</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>Clear()} style={styles.button}>
              <Text style={styles.process}>C</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> process('%')} style={styles.button}>
              <Text style={styles.process}>%</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> process('÷')} style={styles.button}>
              <Text style={styles.process}>÷</Text>
            </TouchableHighlight>
          </Col>
        </Row>
        <Row>
          <Col style={styles.li}>
            <TouchableHighlight onPress={()=> numbers('7')} style={styles.button}>
              <Text style={styles.fonts}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('8')} style={styles.button}>
              <Text style={styles.fonts}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('9')} style={styles.button}>
              <Text style={styles.fonts}>9</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>process('x')} style={styles.button}>
              <Text style={styles.process}>x</Text>
            </TouchableHighlight>
          </Col>
        </Row>
        <Row>
          <Col style={styles.li}>
            <TouchableHighlight onPress={()=>numbers('4')} style={styles.button}>
              <Text style={styles.fonts}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('5')} style={styles.button}>
              <Text style={styles.fonts}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('6')} style={styles.button}>
              <Text style={styles.fonts}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>process('-')} style={styles.button}>
              <Text style={styles.process}>-</Text>
            </TouchableHighlight>
          </Col>
        </Row>
        <Row>
          <Col style={styles.li}>
            <TouchableHighlight onPress={()=>numbers('1')} style={styles.button}>
              <Text style={styles.fonts}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('2')} style={styles.button}>
              <Text style={styles.fonts}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('3')} style={styles.button}>
              <Text style={styles.fonts}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>process('+')} style={styles.button}>
              <Text style={styles.process}>+</Text>
            </TouchableHighlight>
          </Col>
        </Row>
        <Row>
          <Col style={styles.li}>
            <TouchableHighlight onPress={()=>numbers('0')} style={styles.button}>
              <Text style={styles.fonts}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>numbers('00')} style={styles.button}>
              <Text style={styles.fonts}>00</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>dats('.')} style={styles.button}>
              <Text style={styles.fonts}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>results('=')} style={styles.button}>
              <View style={styles.equals}><Text style={styles.equal}>=</Text></View>
            </TouchableHighlight>
          </Col>
        </Row>
      </Grid>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    padding: 8,
    borderRightColor:'blue',
  },
  containera:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    color: 'white',
    marginBottom:0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  value:{
    fontSize:70,
    color:'white',
  },
  virtual:{
    fontSize:40,
    color:'rgba(255, 255, 255, 0.3)',
  },
  fonts:{
    fontSize:25,
    color:'white',
  },
  process:{
    fontSize:25,
    color:'orange',
  },
  containerb:{
    flex:1,
  },
  li:{
    flex:1,
    flexDirection:'row',
    marginLeft:9,
    backgroundColor:'rgba(255, 255, 255, 0)',
  },
  button:{
    alignItems:'center',
    flex:1,
    padding:11,
    paddingLeft:20,
  },
  equal:{
    flex:1,
    fontSize:40,
    color:'orange',
  },
  equals:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:60,
    width:55,
  },
});

