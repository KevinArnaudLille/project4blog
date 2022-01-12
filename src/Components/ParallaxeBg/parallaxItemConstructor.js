
// Allow to return JSX
import React from "react";

export function ParallaxItem(startX, startY, XSpeedRatio, YSpeedRatio, asset, assetStartWidth, modifyWidthRatio) {
    this.startX = startX;
    this.startY = startY;

    // 0 => item doesn't move
    // ]0,1[ => item moves slower than scroll
    // 1 => item follows scroll
    // > 1 => item moves faster than scroll
    // negative values reverse direction
    this.XSpeedRatio = XSpeedRatio;
    this.YSpeedRatio = YSpeedRatio;

    this.asset = asset;
    this.assetStartWidth = assetStartWidth;

    // < 0 => item shrinks
    // 0 => item doesn't change size
    // > 0 => item grows
    this.modifyWidthRatio = modifyWidthRatio;

    this.distanceToLeft = (scrollYValue) => `${this.startX + scrollYValue * this.XSpeedRatio}px`;
    this.distanceToTop = (scrollYValue) => `${this.startY + scrollYValue * this.YSpeedRatio}px`;

    this.updateWidth = (scrollYValue) => `${this.assetStartWidth + (scrollYValue * this.modifyWidthRatio)}px`

    this.DOMElem = (scrollYValue) => {
        return (
            <img
                style={{
                    position: "absolute",
                    left: this.distanceToLeft(scrollYValue),
                    top: this.distanceToTop(scrollYValue),
                    width: this.updateWidth(scrollYValue)
                }}
                src={this.asset}
                alt="" />
        )
    }
}