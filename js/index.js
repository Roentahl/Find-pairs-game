(() => {
  function createTitle(titleTag, text) {
    const title = document.createElement(titleTag);
    title.classList.add('title');
    title.textContent = text;
    return title;
  };
  
  function createHeader() {
    const header = document.createElement('header');
    const container = document.createElement('div');
    const title = createTitle('h1', 'Найди Пару');
    const menu = document.createElement('ul');
    const infoBtn = document.createElement('button');
    const settingsBtn = document.createElement('button');
    const gameTimer = document.createElement('span');
    const infoIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
        <path class="info-icon-animate-part" d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
        <rect x="11" y="17" width="2" height="2" rx="1"/>
      </svg>
    `;
    const settingsIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
        <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
        <path class="settings-icon-animate-part" d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
      </svg>
    `;
    const infoBtnTooltip = document.createElement('div');
    const settingsBtnTooltip = document.createElement('div');
  
    const menuBtns = [infoBtn, settingsBtn];
  
    for (let i = 0; i < menuBtns.length; i++) {
      const menuItem = document.createElement('li');
      menuItem.classList.add('menu__item');
      menuItem.append(menuBtns[i]);
      menu.append(menuItem);
    };
  
    header.classList.add('header');
    container.classList.add('container', 'header__container');
    title.classList.add('header__title');
    menu.classList.add('list-reset', 'header__menu', 'menu');
    infoBtn.classList.add('btn-reset', 'menu__btn');
    settingsBtn.classList.add('btn-reset', 'menu__btn');
    gameTimer.classList.add('header__timer');
    infoBtnTooltip.classList.add('menu__tooltip');
    settingsBtnTooltip.classList.add('menu__tooltip');

    gameTimer.textContent = '00:00'
    infoBtnTooltip.textContent = 'Помощь';
    settingsBtnTooltip.textContent = 'Настройки';
  
    infoBtn.innerHTML = infoIcon;
    settingsBtn.innerHTML = settingsIcon;
    infoBtn.append(infoBtnTooltip);
    settingsBtn.append(settingsBtnTooltip);
    container.append(
      menu,
      title,
      gameTimer
    );
    header.append(container);
  
    return header;
  };
  
  function createApp() {
    const header = createHeader();

    document.body.append(header);
  };

  createApp();
})();