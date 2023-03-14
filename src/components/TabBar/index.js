import React, { Component } from 'react'
import clsx from 'clsx';

export default class TabBar extends Component {
  render() {
    return (
      <div className={clsx('flex items-center', this.props.className)}>
        {
          this.props.tabs.map((tab, index) => <Tab 
          key={`tab-${tab.id}`} 
          {...tab} 
          active={this.props.selected.id === tab.id} 
          onClick={() => this.props.onTabClick(tab)}
        />)
        }  
      </div>
    )
  }
}


function Tab({id, title, Icon, active, onClick}){
  return <div className='relative min-w-[90px] w-full' onClick={onClick}>
      <div className={clsx(
      "hover:bg-[#f0f2f5] w-full py-3 rounded-md flex items-center justify-center",
      active && "hover:bg-transparent"

      )}>
      <Icon size={27} className={clsx("text-blue-500", !active && "text-gray-500")} />
    </div>
    {active ? <div className='absolute inset-x-0 -bottom-2 w-full h-1 bg-blue-500 rounded-full' /> : null}
  </div>
}