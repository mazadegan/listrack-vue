import { createStore } from 'vuex'

export default createStore({
    state: {
        api_url: 'https://listrack.herokuapp.com',
        createTabIsActive: false,
        createScreenIsActive: true,
        notificationsTabIsActive: false,
        boardsSidebarIsActive: false,
        starredBoardsIsActive: true,
        recentBoardsIsActive: true,
    },
    mutations: {
        toggleCreateScreenIsActive(state) {
            state.notificationsTabIsActive = false;
            state.boardsSidebarIsActive = false;
            state.createTabIsActive = false;
            state.createScreenIsActive = !state.createScreenIsActive;
        },
        toggleCreateTabIsActive(state) {
            state.notificationsTabIsActive = false;
            state.boardsSidebarIsActive = false;
            state.createScreenIsActive = false;
            state.createTabIsActive = !state.createTabIsActive;
        },
        toggleNotificationsTabIsActive(state) {
            state.createTabIsActive = false;
            state.boardsSidebarIsActive = false;
            state.createScreenIsActive = false;
            state.notificationsTabIsActive = !state.notificationsTabIsActive;
        },
        toggleBoardsSidebarIsActive(state) {
            state.createTabIsActive = false;
            state.notificationsTabIsActive = false;
            state.createScreenIsActive = false;
            state.boardsSidebarIsActive = !state.boardsSidebarIsActive;
        },
        toggleStarredBoardsIsActive(state) {
            state.starredBoardsIsActive = !state.starredBoardsIsActive;
        },
        toggleRecentBoardsIsActive(state) {
            state.recentBoardsIsActive = !state.recentBoardsIsActive;
        },
    },
    actions: {
    },
    modules: {
    }
})
