// ==UserScript==
// @name         hamivideo sidebar switch
// @namespace    http://tampermonkey.net/
// @version      2025-05-09
// @description  在 HamiVideo 網站上添加一個按鈕，點擊後可以隱藏或顯示側邊欄。
// @author       You
// @match        https://hamivideo.hinet.net/*
// @icon         https://hamivideo.hinet.net/hamivideo/favicon_hamivideo_new.ico
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) {
      return;
    }

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

    const player = document.getElementById('player');
    const css = player.style.cssText;
    player.style.cssText = `${css}
      height: 100%;
    `;
  }


  const target = document.querySelector('.wrapper > header');

  const button = document.createElement('button');
  button.id = 'toggleButton';
  button.type = 'button';
  button.innerHTML = '⇄';
  button.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: right 0.3s ease;
  `;
  button.addEventListener('click', toggleSidebar);

  target.appendChild(button);

  button.click();
})();
