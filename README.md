NdutaAPP Projeto React Native com o Redux e o Redux Toolkit:


Nesta estrutura, os arquivos e pastas são organizados por tipo de recurso ou funcionalidade e, em seguida, divididos em subpastas para ações, reducers, slices, seletores, serviços, componentes, etc. Aqui está uma breve descrição de cada pasta:

assets/: contém recursos estáticos, como imagens, fontes e outros arquivos.

components/: contém componentes reutilizáveis e comuns, bem como componentes específicos da tela.

features/: contém as pastas para cada recurso ou funcionalidade, como autenticação, perfil do usuário, etc. Cada pasta deve conter as subpastas ações, reducers, slices, seletores, serviços e outros arquivos necessários.

navigation/: contém arquivos relacionados à navegação, como os navegadores, rotas e outras configurações.

services/: contém arquivos de serviços como o serviço de API, armazenamento local, entre outros.

store/: contém arquivos relacionados à configuração e gerenciamento da store Redux, como o arquivo configureStore.js e os middlewares.

theme/: contém arquivos relacionados ao estilo da aplicação, como paletas de cores, espaçamentos, fontes, entre outros.

utils/: contém utilitários comuns que podem ser usados em todo o aplicativo.

php artisan config:cache //flush all cached env variable
php artisan config:clear   //repopulate all the env variable
php artisan cache:clear    //flush all the cached content





Links importantes

Setup vscode: https://www.youtube.com/watch?v=mrjy92pW0kM


https://morioh.com/p/de127cf7c45a

https://thoughtbot.com/blog/getting-started-with-redux-toolkit

https://shopify.engineering/react-redux-toolkit-migration


# Aplicação 



Sistema de Táxi

Descrição Geral:
O sistema de táxi é projetado para fornecer uma plataforma eficiente e fácil de usar para solicitar e gerenciar serviços de táxi, como reserva, aluguel, casamento e turismo. O sistema conectará clientes e motoristas, facilitando a comunicação e garantindo uma experiência de usuário agradável e confiável.

Módulos Principais:

Módulo de Usuário (Cliente):
Este módulo permitirá que os clientes se registrem, façam login, atualizem suas informações pessoais e gerenciem suas reservas e solicitações de serviço.
1.1. Registro e autenticação:
Os clientes poderão criar uma conta fornecendo informações pessoais, como nome, telefone e endereço de e-mail.

1.2. Solicitar serviço:
Os clientes podem escolher entre os serviços disponíveis (booking, aluguel, casamento e turismo) e fornecer informações relevantes, como local de coleta, destino e data/horário desejados.

1.3. Gerenciar reservas:
Os clientes poderão visualizar, modificar ou cancelar suas reservas e solicitações de serviço.

Módulo de Motorista:
Este módulo permitirá que os motoristas se registrem, façam login, atualizem suas informações pessoais e veiculares, aceitem solicitações de serviço e gerenciem seu histórico de corridas.
2.1. Registro e autenticação:
Os motoristas podem criar uma conta fornecendo informações pessoais e veiculares, como nome, telefone, endereço de e-mail, placa do veículo, marca e modelo.

2.2. Aceitar solicitações de serviço:
Os motoristas podem visualizar e aceitar solicitações de serviço com base em sua localização e disponibilidade.

2.3. Gerenciar histórico de corridas:
Os motoristas podem visualizar e gerenciar seu histórico de corridas, incluindo informações sobre cada viagem, como cliente, destino, tempo e pagamento.

Módulo de Administração:
Este módulo permitirá que os administradores gerenciem motoristas, clientes, solicitações de serviço, tarifas e relatórios.
3.1. Gerenciar motoristas e clientes:
Os administradores podem adicionar, modificar ou remover motoristas e clientes do sistema.

3.2. Gerenciar solicitações de serviço:
Os administradores podem visualizar, modificar ou cancelar solicitações de serviço e atribuir motoristas a clientes, se necessário.

3.3. Gerenciar tarifas:
Os administradores podem definir e atualizar tarifas para cada tipo de serviço (booking, aluguel, casamento e turismo).

3.4. Relatórios:
Os administradores podem gerar relatórios detalhados sobre o uso do sistema, incluindo informações sobre clientes, motoristas, serviços e receitas.

Módulo de Pagamento:
Este módulo gerencia o pagamento dos serviços, permitindo que os clientes paguem pelo serviço selecionado usando diferentes métodos de pagamento, como cartão de crédito, débito ou dinheiro.
4.1. Processamento de pagamento:
O sistema processa pagamentos em tempo real e fornece recibos digitais aos clientes e motoristas.

4.2. Gerenciar histórico de pagamento:
Os clientes e motoristas podem visualizar e gerenciar seu histórico de pagamentos.


Módulo de Notificação:
Este módulo é responsável por enviar notificações em tempo real para clientes e motoristas, mantendo-os informados sobre o status das solicitações de serviço e outras informações relevantes.
5.1. Notificações para clientes:
Os clientes receberão notificações sobre o status de suas solicitações, como confirmação de reserva, chegada do motorista, alterações no itinerário e conclusão da viagem.

5.2. Notificações para motoristas:
Os motoristas receberão notificações sobre novas solicitações de serviço, atualizações de reserva, informações de pagamento e outras comunicações relevantes.

Módulo de Suporte e Feedback:
Este módulo permite que clientes e motoristas entrem em contato com o suporte ao cliente para resolver problemas, tirar dúvidas e fornecer feedback sobre a experiência de uso do sistema.
6.1. Central de ajuda:
Uma central de ajuda estará disponível com perguntas frequentes, dicas e informações úteis para ajudar clientes e motoristas a usar o sistema de táxi de forma eficiente.

6.2. Contato com o suporte:
Os usuários poderão entrar em contato com a equipe de suporte através de chat, e-mail ou telefone para obter ajuda e resolver problemas.

6.3. Avaliação e feedback:
Clientes e motoristas poderão avaliar e fornecer feedback sobre suas experiências, ajudando a melhorar continuamente o sistema e a qualidade do serviço.

Módulo de Geolocalização e Rotas:
Este módulo auxilia motoristas e clientes a encontrar o melhor caminho para seus destinos, fornecendo informações de localização em tempo real e sugestões de rotas otimizadas.
7.1. Mapas e geolocalização:
Os motoristas e clientes terão acesso a mapas com informações detalhadas sobre localização, tráfego e rotas.

7.2. Rotas otimizadas:
O sistema fornecerá sugestões de rotas otimizadas com base no tráfego, distância e outros fatores relevantes.

7.3. Monitoramento em tempo real:
O sistema permitirá que os clientes monitorem o progresso de sua viagem em tempo real, enquanto os administradores poderão monitorar a localização de todos os veículos e motoristas.




# Informações

O arquivo customMapStyle.json

Ocultará os pontos de interesse, estradas e rótulos no mapa, deixando visíveis apenas os marcadores que você adicionou. Você pode personalizar o estilo do mapa ainda mais, ajustando o arquivo customMapStyle.json de acordo com suas necessidades.
Veja mais aqui: https://developers.google.com/maps/documentation/javascript/styling.



## Função  para calcular o preço com base na distância, tempo de viagem e fator de tarifa dinâmica:

const calculatePrice = (distance, time, dynamicFareFactor) => {
  const baseFare = 5.0;
  const pricePerKm = 1.5;
  const pricePerMinute = 0.25;

  const price = baseFare + distance * pricePerKm + time * pricePerMinute;
  return price * dynamicFareFactor;
};


Neste exemplo, o preço é calculado com base na distância percorrida ( 1,50Kz por km), no tempo de viagem (0,25Kz por minuto) e no fator de tarifa dinâmica (1.2 como exemplo). O fator de tarifa dinâmica pode ser ajustado com base em diversos fatores, como hora do dia, demanda do serviço ou eventos específicos como chuva, frio etc. O cliente que define a lógica necessária para determinar o fator de tarifa dinâmica no exemplo acima.



https://github.com/GIScience/openrouteservice
https://giscience.github.io/openrouteservice/documentation/Documentation.html

https://github.com/GIScience/graphhopper

pesquisem sobre openrouteservice

https://hub.docker.com/r/mediagis/nominatim/