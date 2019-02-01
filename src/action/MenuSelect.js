export const menuSelect = (menuKey) => {
    console.log("You clicked on menu: " + menuKey);
    return {
        type: "MENU_SELECTED",
        payload: menuKey
    }
};