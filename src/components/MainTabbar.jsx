import { Icon28MenuOutline, Icon28User } from '@vkontakte/icons';
import Icon48CameraOnGridOutline from "../components/Icon48CameraOnGridOutline";
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "../css/MainTabbar.css";

export default function MainTabbar() {
    const routeNavigator = useRouteNavigator();
    const { panel: activePanel } = useActiveVkuiLocation();

    return(
        <Tabbar style={{backgroundColor: "#79AADA"}}>
            <TabbarItem
                selected={activePanel === "menu_panel"}
                onClick={() => routeNavigator.push('/menu')}
                style={{fill: "red"}}
            >
                <Icon28MenuOutline style={{color: "white"}}/>
            </TabbarItem>
            <TabbarItem
                selected={activePanel === "home_panel"}
                onClick={() => routeNavigator.push('/')}
                style={{fill: "red"}}
            >
                <Icon48CameraOnGridOutline />
            </TabbarItem>
            <TabbarItem
                selected={activePanel === "profile_panel"}
                onClick={() => routeNavigator.push('/profile')}
                className='tabItem'
            >
                <Icon28User style={{color: "white"}}/>
            </TabbarItem>
        </Tabbar>
    );
}