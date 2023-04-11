import React, { Component } from "react";
import clsx from "clsx";
import { Tooltip } from "..";
import { Link } from "react-router-dom";

export default class TabBar extends Component {
  render() {
    return (
      <div className={clsx("flex items-center", this.props.className)}>
        {this.props.tabs.map((tab, index) => (
          <Tab
            key={`tab-${tab.id}`}
            {...tab}
            active={this.props.selected.id === tab.id}
            onClick={() => this.props.onTabClick(tab)}
            disableTooltip={this.props.disableTooltip}
            displayTitle={this.props.displayTitle}
            controlFromNavigation={this.props.controlFromNavigation}
          />
        ))}
      </div>
    );
  }
}

function Tab({
  id,
  title,
  Icon,
  url,
  active,
  onClick,
  disableTooltip,
  displayTitle,
  controlFromNavigation,
}) {
  let content = (
    <div
      className="relative md:min-w-[90px] w-full cursor-pointer"
      onClick={controlFromNavigation ? () => {} : onClick}
    >
      <div
        className={clsx(
          "hover:bg-[#f0f2f5] w-full py-3 rounded-md flex items-center justify-center",
          active && "hover:bg-transparent",
          displayTitle && "gap-x-2"
        )}
      >
        <Icon
          size={displayTitle ? 22 : 27}
          className={clsx("text-blue-500", !active && "text-gray-500")}
        />
        {displayTitle ? (
          <span className={clsx("text-blue-500", !active && "text-gray-500")}>
            {title}
          </span>
        ) : null}
      </div>
      {active ? (
        <div className="absolute inset-x-0 -bottom-2 w-full h-1 bg-blue-500 rounded-full" />
      ) : null}
    </div>
  );

  if (url) {
    content = (
      <Link className="md:min-w-[90px] w-full" to={url}>
        {content}
      </Link>
    );
  }

  if (disableTooltip) {
    return content;
  }

  return <Tooltip title={title}>{content}</Tooltip>;
}
