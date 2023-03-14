import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import Input from '../Input'
import {HiOutlineSearch} from 'react-icons/hi'
import clsx from 'clsx';
import { TabBar } from '../'

import {AiFillHome} from 'react-icons/ai';
import {MdOutlineOndemandVideo} from 'react-icons/md';
import {IoStorefrontOutline} from 'react-icons/io5';
import {HiUserGroup} from 'react-icons/hi'
import {CgGames} from 'react-icons/cg'

const tabs = [
      {
        id: "home",
        title: "Home",
        Icon: AiFillHome,
      },
      {
        id: "watch",
        title: "Watch",
        Icon: MdOutlineOndemandVideo,
      },
      {
        id: "marketplace",
        title: "Marketplace",
        Icon: IoStorefrontOutline,
      },
      {
        id: "groups",
        title: "Groups",
        Icon: HiUserGroup,
      },
      {
        id: "gaming",
        title: "Gaming",
        Icon: CgGames,
      },
    ]

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: tabs[0]
    }
  }
  render() {
    const row = "flex items-center"
    return (
      <div className={clsx('h-16 shadow-md bg-white justify-between px-4', row)}>
        {/* Left Column */}
        <div className={clsx('gap-x-3', row)}>
          <img src={Logo} alt='logo image' width="44px" />
          <div className={clsx("bg-[#f0f2f5] rounded-full h-12 w-72 px-2", row)}>
            <HiOutlineSearch size={20} />
            <Input className="bg-transparent outline-none border-none py-0" placeholder="Search facebook" />
          </div>
        </div>
        {/* Mid Column */}
          <TabBar 
            tabs={tabs} 
            selected={this.state.selectedTab} 
            onTabClick={(tab) => this.setState({selectedTab: tab})}
            className="min-w-[680px]"
          />
        {/* Right Column */}
        <div>
          <h1>right</h1>
        </div>
      </div>
    )
  }
}
