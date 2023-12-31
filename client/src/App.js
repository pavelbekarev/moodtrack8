import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

import { 
	View, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol, 
	Epic,
	ModalRoot,
	Div,
	Cell,
	ModalPageHeader,
	ModalCard,
	Text,
	Image

} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

import CalendarPage from "./panels/CalendarPage";
import MainTabbar from './components/MainTabbar';
import ProfilePage from './panels/ProfilePage';
import EmotionPage from './panels/EmotionPage';

import "./css/MainPage.css";
import "./css/EmotionPage.css"
import EmotionHappy from './panels/EmotionList/EmotionHappy';
import EmotionAnger from './panels/EmotionList/EmotionAnger';
import EmotionSadness from './panels/EmotionList/EmotionSadness';
import EmotionSurprise from './panels/EmotionList/EmotionSurprise';
import EmotionDislike from './panels/EmotionList/EmotionDislike';
import EmotionIntensivity from './panels/EmotionIntensivity';
import EmotionIntensivityVertical from './panels/EmotionIntensivityVertical';
import { Actions } from './panels/Actions';

import frame20 from "./img/Frame20.svg";
import frame21 from "./img/Frame21.svg";
import frame22 from "./img/Frame22.svg";
import frame23 from "./img/Frame23.svg";
import frame24 from "./img/Frame24.svg";

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import EmotionDescription from './panels/EmotionDescription';
import FinishPage from './panels/FinishPage';

import { useDispatch } from 'react-redux';
import { setEmotionImage } from './store/setEmotion';
import ArticlePage from './panels/ArticlePage';
import MenuPage from './panels/MenuPage';



const App = () => {
	const routeNavigator = useRouteNavigator();
	const dispatch = useDispatch();

	const [fetchedUser, setUser] = useState(null);
	const [activeStory, setActiveStory] = useState("");
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView("default_view");
    const [activeModal, setActiveModal] = useState(null);

	const [frame20Flag, setFrame20Flag] = useState(false);
	const [frame21Flag, setFrame21Flag] = useState(false);
	const [frame22Flag, setFrame22Flag] = useState(false);
	const [frame23Flag, setFrame23Flag] = useState(false);
	const [frame24Flag, setFrame24Flag] = useState(false);
	const [isReactionSelected, setIsReactionSelected] = useState(false);
	const [emotion_id, setEmotion_id] = useState("");


	const setCalendarDate = () => {
		let currentDate = new Date();
	
		const month = {
			1: "января",
			2: "февраля",
			3: "марта",
			4: "апреля",
			5: "мая",
			6: "июня",
			7: "июля",
			8: "августа",
			9: "сентября",
			10: "октября",
			11: "ноября",
			12: "декабря"
		}
	
		const [currentDay, setCurrentDay] = useState(currentDate.getDate());
		const [currentMonth, setCurrentMonth] = useState(month[currentDate.getMonth() + 1]);
		const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());



	
		currentDate = `${currentDay} ${currentMonth}, ${currentYear}`

		return currentDate;
	}

	const changeActiveModal = (activeModal) => {
        setActiveModal(activeModal);
    }

	const modalBack = () => {
		setActiveModal(null);
	}

	const modal = (
        <ModalRoot activeModal={activeModal}>
            <ModalCard
                id="EMOTIONS_MODAL_PAGE"
				height={360}
                settlingHeight={100}
				onClose={modalBack}
                header={
                    <ModalPageHeader>
						<Text className='text-chooseEmotion'>
                        	Выбери свою эмоцию!
						</Text>
                    </ModalPageHeader>
                }
            >
                <Div className="emotions_wrapper">
                    <Cell 
                        id="frame20"
						onClick={() => {
							setFrame20Flag(true);
							dispatch(setEmotionImage(frame20));
							setTimeout(() => {
								routeNavigator.push(`/emotion_list:happy`);
								setActiveModal(null);
								setFrame20Flag(false);
							}, 1000)
						}}
                    >
						<div className='cell'>
							{/* <Image className="cell_img" src={frame20} alt="" /> */}
							<div className='cell_img20 cell_img'></div>
							{frame20Flag && <span className="emotionText emotionText20">Радость</span>}
						</div>
                        
                    </Cell>
                    <Cell 
                        id="frame24"
						onClick={() => {
							setFrame24Flag(true);
							dispatch(setEmotionImage(frame24));
							setTimeout(() => {
								routeNavigator.push(`/emotion_list:anger`);
								setActiveModal(null);
								setFrame24Flag(false);
							}, 1000)
						}}
                    >
                        <div className='cell'>
							{/* <img className="cell_img" src={frame24} alt="" /> */}
							<div className='cell_img24 cell_img'></div>
							{frame24Flag && <span className="emotionText emotionText24">Злость</span>}
						</div>
                    </Cell>
                    <Cell 
                        id="frame21"
						onClick={() => {
							setFrame21Flag(true);
							dispatch(setEmotionImage(frame21));
							setTimeout(() => {
								routeNavigator.push(`/emotion_list:sadness`);
								setActiveModal(null);
								setFrame21Flag(false);
							}, 1000)
						}}
                    >
                        <div className="cell">
                            {/* <img className="cell_img" src={frame21} alt="" /> */}
							<div className='cell_img21 cell_img'></div>
							{frame21Flag && <span className="emotionText emotionText21">Грусть</span>}
                        </div>
                    </Cell>
                    <Cell 
                        id="frame22"
						onClick={() => {
							setFrame22Flag(true);
							dispatch(setEmotionImage(frame22));
							setTimeout(() => {
								routeNavigator.push(`/emotion_list:surprise`);
								setActiveModal(null);
								setFrame22Flag(false);
							}, 1000)
						}}
                    >
                        <div className="cell">
                            {/* <img className="cell_img" src={frame22} alt="" /> */}
							<div className='cell_img22 cell_img'></div>
							{frame22Flag && <span className="emotionText emotionText22">Удивление</span>}
                        </div>
                    </Cell>
                    <Cell 
                        id="frame23"
						onClick={() => {
							setFrame23Flag(true);
							dispatch(setEmotionImage(frame23));
							setTimeout(() => {
								routeNavigator.push(`/emotion_list:dislike`);
								setActiveModal(null);
								setFrame23Flag(false);
							}, 1000)
						}}
                    >
                        <div className="cell">
                            {/* <img className="cell_img" src={frame23} alt="" /> */}
							<div className='cell_img23 cell_img'></div>
							{frame23Flag && <span className="emotionText emotionText23">Неприязнь</span>}
                        </div>
                    </Cell>
                </Div>
            </ModalCard>
        </ModalRoot>
    );
	

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user.id);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider webviewType="vkapps">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout modal={modal}>
						<SplitCol>
							<Epic activeStory={activeView} tabbar={<MainTabbar />}>
								<View nav={activeView} activePanel={activePanel}>
									<CalendarPage changeActiveModal={changeActiveModal} nav="home_panel" />
									<ProfilePage nav="profile_panel" />
									<MenuPage nav="menu_panel" />
									{/* <EmotionPage nav="emotions_panel"/> */}
									<EmotionHappy nav="emotionHappy_panel" />
									<EmotionAnger nav="emotionAnger_panel" />
									<EmotionSadness nav="emotionSadness_panel" />
									<EmotionSurprise nav="emotionSurprise_panel" />
									<EmotionDislike nav="emotionDislike_panel" />

									{/* Вариант с горизонтальной шкалой */}
									<EmotionIntensivity nav="emotionIntensivity_panel" />

									{/* <EmotionIntensivityVertical nav="emotionIntensivity_panel"/> */}
									<Actions nav="actions_panel" />
									<EmotionDescription nav="emotionDescription_panel" />
									<FinishPage nav="finishPage_panel" />
									<ArticlePage nav="articlePage_panel" />
								</View>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

