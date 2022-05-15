import React, { useEffect, useRef } from "react";
import raf from "rc-util/lib/raf";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "rc-tooltip/assets/bootstrap.css";
import "./Slider.css";

const wrapperStyle = { margin: 50 };

const SliderDemo = (props) => {
  const { value } = props;

  const HandleTooltip = (props) => {
    const {
      value,
      children,
      visible,
      tipFormatter = (val) => `$${val}`,
      ...restProps
    } = props;

    const tooltipRef = useRef();
    const rafRef = useRef();

    function cancelKeepAlign() {
      raf.cancel();
    }

    function keepAlign() {
      rafRef.current = raf(() => {
        tooltipRef.current?.forcePopupAlign();
      });
    }

    useEffect(() => {
      if (visible) {
        keepAlign();
      } else {
        cancelKeepAlign();
      }

      return cancelKeepAlign;
    }, [value, visible]);

    return (
      <Tooltip
        placement="top"
        overlay={tipFormatter(value)}
        overlayInnerStyle={{ minHeight: "auto" }}
        ref={tooltipRef}
        visible={true}
        {...restProps}
      >
        {children}
      </Tooltip>
    );
  };

  const handleRender = (node, param) => {
    return (
      <HandleTooltip value={param.value} visible={param.dragging}>
        {node}
      </HandleTooltip>
    );
  };

  return (
    <div>
      <div style={wrapperStyle}>
        <Slider
          marks={{ 0: "$0" }}
          max={50}
          handleRender={handleRender}
          defaultValue={value}
          onAfterChange={(value) => props.setMoney(value)}
        />
      </div>
    </div>
  );
};

export default SliderDemo;
