
// Allow to return a DOM element
import React from "react";

// Unique key generation
import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a parallax item as instance
 * @constructor
 * @param {String} alt alternative text if img is not available
 * @param {Number} startX initial X absolute position from left
 * @param {Number} startY initial Y absolute position from to top OR bottom
 * @param {Boolean} isFromTop select if item depends on top OR bottom of page
 * @param {Number} XSpeedRatio
    FALSE // 0 => item doesn't move // ]0,1[ => item moves slower than scroll // 1 => item follows scroll // > 1 => item moves faster than scroll // negative value reverses direction
 * @param {Number} YSpeedRatio
    FALSE // 0 => item doesn't move // ]0,1[ => item moves slower than scroll // 1 => item follows scroll // > 1 => item moves faster than scroll // negative value reverses direction
 * @param {String} asset imported asset
 * @param {Number} assetStartWidth imported asset inital width
 * @param {Number} modifyWidthRatio imported asset width evolution through scrolling // < 0 => item shrinks // = 0 => item doesn't change size // > 0 => item grows
 * @param {Function} DOMElem(scrollYValue) return img DOM element
 */

export function ParallaxItem(alt, startX, startY, isFromTop, XSpeedRatio, YSpeedRatio, asset, assetStartWidth, modifyWidthRatio) {

    this.uuid = uuidv4();

    this.distanceToLeft = (scrollYValue) => `${startX + scrollYValue * XSpeedRatio}px`;
    this.distanceToTopOrBottom = (scrollYValue) => `${startY + scrollYValue * YSpeedRatio}px`;

    this.updateWidth = (scrollYValue) => `${assetStartWidth + (scrollYValue * modifyWidthRatio)}px`

    this.DOMElem = (scrollYValue) => {
        if (isFromTop) {
            return (
                <img
                    style={{
                        position: "absolute",
                        left: this.distanceToLeft(scrollYValue),
                        width: this.updateWidth(scrollYValue),
                        top: this.distanceToTopOrBottom(scrollYValue)
                    }}
                    src={asset}
                    key={this.uuid}
                    alt={alt}
                />
            )
        } else {
            return (
                <img
                    style={{
                        position: "absolute",
                        left: this.distanceToLeft(scrollYValue),
                        width: this.updateWidth(scrollYValue),
                        bottom: this.distanceToTopOrBottom(scrollYValue)
                    }}
                    src={asset}
                    key={this.uuid}
                    alt={alt}
                />
            )
        }
    }
}