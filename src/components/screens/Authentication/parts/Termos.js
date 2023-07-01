import { View, Text, SafeAreaView,StyleSheet, StatusBar,Button,TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import Botao_Voltar from '../../componenteGeral/botao/botaoVoltar';
import { widthPercentageToDP,heightPercentageToDP, listenOrientationChange as loc,
  removeOrientationListener as rol } from 'react-native-responsive-screen';


  export default class principal extends React.Component {
  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render(){
    const estilo= StyleSheet.create({
      container:{
        flex:1,
         backgroundColor:'#D6001B',
         width:('100%'),
         height:('100%'), 
      },
      camada1:{
        
        backgroundColor:'white',
        width:widthPercentageToDP('100%'),
        height:heightPercentageToDP('100%'),
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    
      },

    
    })
    return (
      <SafeAreaView style={estilo.container}>

        <StatusBar backgroundColor={'#D6001B'} />
     
        <View style={estilo.camada1} >
          <Botao_Voltar />
        <Text style={{color:"#D6001B",fontSize:34,bottom:170,margin:12}}>Termos e Condições</Text>
       <View>
         <Text style={{bottom:160,padding:20,fontSize:18}}>web, este documento também é chamado de “Termos de Serviço” (Tos), “Termos de Uso”, EULA (“Contrato de Licença de Usuário Final”), “Condições Gerais” ou “Notas Legais”.
      
          Os Termos e Condições são nada mais que um contrato em que o proprietário esclarece as condições de uso de seu serviço. Entre alguns exemplos rápidos estão o uso do conteúdo (copyright), as regras que os usuários devem seguir ao interagirem uns com os outros no website/app e, por fim, regras relacionadas ao cancelamento ou suspensão de uma conta de usuário, etc.</Text>
       </View>
        </View>
      
      </SafeAreaView>
    )
   
    
    
   }
  
   }
