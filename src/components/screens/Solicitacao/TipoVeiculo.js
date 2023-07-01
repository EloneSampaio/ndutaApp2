import React, {useState} from 'react';
import {View, Text} from 'react-native';
import estilo from './style/TipoVeiculoEstilo';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useGetTipoVeiculosAllQuery} from '../../../features/servico/services/servicoService';
import {useSelector} from 'react-redux';
import ItemTipoVeiculo from './parts/ItemTipoVeiculo';
import Mapa from '../Corrida/MapaScreen';
import MenuSuperior from '../Home/parts/MenuSuperiorHome';

const App = ({tipoServico}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const servicoId = route.params?.servicoId || 0;

  const [selectedItem, setSelectedItem] = useState(null);
  const token = useSelector(state => state.auth.token);

  const {data: categoriaServico = []} = useGetTipoVeiculosAllQuery(null, {
    skip: !token,
  });

  const itemSelecionado = tipoVeiculoId => {
    setSelectedItem(tipoVeiculoId);
    navigation.navigate('InserirEndereco', {
      tipoVeiculoId: tipoVeiculoId,
      idServico: servicoId,
    });
  };

  const renderContent = () => {
    return (
      <View style={{flex: 1}}>
        <MenuSuperior />
        <Mapa />
        <View style={estilo.estilo.modalContainer}>
          <View style={estilo.estilo.GrupoBotao}>
            <View style={estilo.estilo.GrupoBotaoColuna}>
              {categoriaServico?.length > 0 ? (
                categoriaServico.map((veiculo, index) => (
                  <ItemTipoVeiculo
                    key={veiculo.id}
                    iconName={veiculo?.icon}
                    text={veiculo?.tipo_veiculo}
                    handlePress={() => itemSelecionado(veiculo.id)}
                    selectedItem={selectedItem}
                  />
                ))
              ) : (
                <Text style={estilo.estilo.texto}>
                  Nenhum tipo de veículo disponível.
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

export default App;
