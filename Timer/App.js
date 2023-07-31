import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Vibration } from 'react-native';
import { AntDesign,MaterialCommunityIcons,MaterialIcons,Feather,Entypo } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
export default function App() {

  const [beginning, setBeginning] = useState(true)
  const [start,setStart] = useState(false)
  const [startt,setStartt] = useState(false)
  const [pause,setPause] = useState(true)
  const [pausee,setPausee] = useState(true)
  const [count,setCount] = useState(0)
  const [min,setMin] = useState(false)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    let interval;
    
    if (start & pause ==! false) {
      interval = setInterval(() => {
        setCount(prevcount => prevcount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start,pause]);

  useEffect(() => {
    let interval;
    
    if (startt & pausee ==! false) {
      interval = setInterval(() => {
        setNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : finish()));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startt,pausee]);


  const minutes = Math.floor(count / 60)
  const seconds = count % 60

  
  const clickedW = () =>{
    setStart(true)
  }
  const clickedWW = () =>{
    number > 0 ? setStartt(true) : setStartt(false)
  }
  const clickedB = () =>{
    setStart(false)
    setPause(true)
    setCount(0);
  }
  const finish = () =>{
    setStartt(false)
    setPausee(true)
    setNumber(0);
    Vibration.vibrate(500)
  }
  const clickedBB = () =>{
    setStartt(false)
    setPausee(true)
    setNumber(0);
  }
  const clickedS = () =>{
    setPause(false)
  }
  const clickedSS = () =>{
    setPausee(false)
  }
  const clickedSw = () =>{
    setPause(true)
  }
  const clickedSww = () =>{
    setPausee(true)
  }

  const Swaiting = ()=>{
    return <AntDesign onPress={()=> clickedSw()} name="caretright" size={24} color="white" />
  }
  const Swaitingg = ()=>{
    return <AntDesign onPress={()=> clickedSww()} name="caretright" size={24} color="white" />
  }
  const Waiting = () =>{
    return <AntDesign onPress={()=> clickedW()} name="caretright" size={24} color="black" />
  }
  const Waitingg = () =>{
    return <AntDesign onPress={()=> clickedWW()} name="caretright" size={24} color="black" />
  }
  const Stop = () =>{
    return (
    <TouchableHighlight style={styles.buttons}>
      <Text style={styles.buttontext}> { pause === true ? <Feather onPress={()=> clickedS()} name="pause" size={24} color="white" /> : <Swaiting onPress={()=> clickedSw()} />} </Text>
    </TouchableHighlight>
    );
  }
  const Stopp = () =>{
    return (
    <TouchableHighlight style={styles.buttons}>
      <Text style={styles.buttontext}> { pausee === true ? <Feather onPress={()=> clickedSS()} name="pause" size={24} color="white" /> : <Swaitingg onPress={()=> clickedSww()} />} </Text>
    </TouchableHighlight>
    );
  }

  const Breaks = () =>{
    return <Entypo onPress={()=> clickedB()} name="controller-stop" size={24} color="white" />
  }
  const Breakss = () =>{
    return <Entypo onPress={()=> clickedBB()} name="controller-stop" size={24} color="white" />
  }
  const Counter = () =>{
    return(
      <View style={styles.container}>
      <View style={styles.options}>
        <TouchableHighlight style={styles.selectedbut} onPress={()=>{setBeginning(true)}}>
          <Text style={styles.buttontext}><MaterialCommunityIcons name="timer" size={24} color="black" /></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.optionbut} onPress={()=>{setBeginning(false)}}>
          <Text style={styles.buttontext}><MaterialCommunityIcons name="timer-sand-empty" size={24} color="black" /></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.numcontainer}>
        <Text style={styles.numbers}>
          {minutes.toString().padStart(2,'0')}:
          {seconds.toString().padStart(2,'0')}
        </Text>
      </View>
      <View style={styles.butcontainer}>
          <TouchableHighlight style={styles.buttons}>
            <Text style={styles.buttontext}> {start === true ? <Breaks /> : <Waiting  />} </Text>
          </TouchableHighlight>
          {start === true ? <Stop /> : null}
          
      </View>
    </View>
    );
  }

  


  


  const one = () =>{
    min === false ? setNumber(prevcount => prevcount + 1) : setNumber(prevcount => prevcount + 60)
  }

  const five = () =>{
    min === false ? setNumber(prevcount => prevcount + 5) : setNumber(prevcount => prevcount + 300)
  }
  
  const twenty = () =>{
    min === false ? setNumber(prevcount => prevcount + 20) : setNumber(prevcount => prevcount + 1200)
  }

  const minutess = Math.floor(number / 60)
  const secondss = number % 60

  const Recounter= () =>{
    return(
      <View style={styles.container}>
      <View style={styles.options}>
        <TouchableHighlight style={styles.optionbut} onPress={()=>{setBeginning(true)}}>
          <Text style={styles.buttontext}><MaterialCommunityIcons name="timer" size={24} color="black" /></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.selectedbut} onPress={()=>{setBeginning(false)}}>
          <Text style={styles.buttontext}><MaterialCommunityIcons name="timer-sand-empty" size={24} color="black" /></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.numcontainer}>
        <Text style={styles.numbers}>
          {minutess.toString().padStart(2,'0')}:{secondss.toString().padStart(2,'0')}
        </Text>
        <View style={styles.timecontainer}>
          <TouchableOpacity style={min === true ? styles.minside : styles.normal} onPress={()=>{setMin((min => !min))}}>
            <Text style={styles.timesection}>Min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={min === false ? styles.secside : styles.normal} onPress={()=>{setMin((min => !min))}}>
            <Text style={styles.timesection}>Sec</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addcontainer}>
          <TouchableOpacity style={styles.addnumbers} onPress={()=>one()}>
            <Text style={styles.sumnum}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addnumbers} onPress={()=>five()}>
            <Text style={styles.sumnum}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addnumbers} onPress={()=>twenty()}>
            <Text style={styles.sumnum}>20</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginBottom:55,}}>
      <TouchableOpacity style={styles.addnumbers} onPress={()=>{setNumber(0)}}>
            <Text style={styles.sumnum}>C</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.butcontainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttontext}> {startt === true ? <Breakss /> : <Waitingg  />} </Text>
          </TouchableOpacity>
          {startt === true ? <Stopp /> : null}
          
      </View>
    </View>
    );
  }


  return (
   <View style={styles.container}>{beginning ?  <Counter />: <Recounter/>}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    padding: 8,
  },
  addnumbers:{
    width:70,
    height:70,
    borderRadius:40,
    justifyContent:'center',
    borderColor:'white',
    borderWidth:5,
    alignItems:'center',
  },
  sumnum:{
    fontSize:30, 
    color:'white',
  },
  addcontainer:{
    width:320,
    flex:0,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginTop:105,
  },
  timecontainer:{
    width:100,
    height:50,
    backgroundColor:'rgba(101, 101, 101, 0.8)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:30,
    marginTop:35,
  },
  timesection:{
    fontSize:15,
  },
  normal:{
    color:'white',
  },
  secside:{
    backgroundColor:'white',
    width:50,
    height:50,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:25,
  },
  minside:{
    backgroundColor:'white',
    width:50,
    height:50,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
    marginRight:25,
  },
  numcontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  numbers:{
    fontSize:80,
    color:'white',
  },
  butcontainer:{
    flex:0.1,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
  },
  buttons:{
    width:55,
    height:55,
    borderRadius:40,
    backgroundColor:'rgba(101, 100, 100, 0.54)',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
  },
  optionbut:{
    width:55,
    height:55,
    borderRadius:40,
    backgroundColor:'rgba(101, 100, 100, 0.54)',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
  },
  selectedbut:{
    width:55,
    height:55,
    borderRadius:40,
    backgroundColor:'rgba(250, 250, 250, 1)',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
  },
  buttontext:{
    fontSize:25,
  },
  options:{
    flex:0.2,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
  }
});
