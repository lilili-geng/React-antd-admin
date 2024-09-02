import "./index.less"
import { HomeOutlined, RightOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router';
import { useLayout } from "../hooks/index";
import { IRouterConfig } from "@/types";
import { useEffect, useState } from "react";
import iconDart from "@/assets/layout/icon-dart.png"
import iconLight from "@/assets/layout/icon-light.png"
import { useLayoutProvider } from "@/provider/modules/layout";

export const Siders = () => {

  const navigate = useNavigate();

  const { active, showSidersWarp, menuList, setActive, setMenuListItem, _showRightStateTrue, _showRightStateFalse } = useLayout()


  const { currentMode, clickCurrentMode } = useLayoutProvider()

  const handleIconClick = (route: IRouterConfig) => {
    setActive(route.path);
    setMenuListItem(route.children);
    _showRightStateTrue();
    navigate(route?.path);
    localStorage.setItem('menuListItem', JSON.stringify(route.children));
    localStorage.setItem('menuListTitlte', route.title);
  };


  useEffect(() => {
    localStorage.setItem('active', active);
  }, [active]);

  return (
    <div className="li-slide h-full no-drawer bg-li-bg border-r-1 border-li-border-color flex flex-col justify-between">
      <div className="w-full  h-[90%] flex-1 flex-col justify-between items-center">

        <div className="slide-icons">
          <HomeOutlined
            className={`${active === '/' ? 'active' : ''} flex justify-center`}
            onClick={() => { navigate('/'); setActive('/'); _showRightStateFalse() }}
          />
        </div>


        {menuList.map((route, index) => (
          <div
            key={index}
            className={`slide-icons`}
          >
            {
              (!showSidersWarp && active !== '/') && <div className="mb-[10px]">
                <div className="iconButton"  >
                  <RightOutlined onClick={_showRightStateTrue} />
                </div>
              </div>
            }


            <div className={`${route.path == active ? 'active' : ''}`} onClick={() => handleIconClick(route)}>
              {route.icon}
            </div>

          </div>
        ))}
      </div>

      <div className="theme-icons flex justify-center">
        {
          currentMode == 'light' ? <img
            width="15"
            height="15"
            src={iconDart}
            alt="dart"
            onClick={() => { clickCurrentMode('dart') }}
          /> : <img
            width="15"
            height="15"
            src={iconLight}
            alt="light"
            onClick={() => { clickCurrentMode('light') }}
          />
        }
      </div>
    </div>
  )
}
