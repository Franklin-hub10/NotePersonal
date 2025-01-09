import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Portada from "../screens/Portada";
import RegistroNote from "../screens/RegistroNote";
import LeerNote from "../screens/LeerNote";
import EditarNote from "../screens/EditarNote";
import ListaApi from "../screens/ListaApi";

export type RootStackParams = {
    Login: undefined;
    Portada: undefined;
    Menu: undefined;
    Leer: undefined;
    Editar: undefined;
    Lista: undefined;

};

const Top = createMaterialTopTabNavigator();

function MyTops() {
    return (
        <View style={{ marginTop: '10%', flex: 1, backgroundColor: '#f0f0f0' }}>
            <Top.Navigator >
                <Top.Screen name="Registro" component={RegistroNote} />
                <Top.Screen name="Leer" component={LeerNote} />
                <Top.Screen name="Editar" component={EditarNote} />
                <Top.Screen name="Lista" component={ListaApi} />
            </Top.Navigator>
        </View>

    );
}

//////////

const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
            <Stack.Screen name='Portada' component={Portada} />
            <Stack.Screen name='Menu' component={MyTops} />
        </Stack.Navigator>
    );
}

//////


export default function MainNavigador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}