export interface VolumetricItem {
    qty: number;
    length: number;
    width: number;
    height: number;
}

export interface Dimensions {
    length: number;
    width: number;
    height: number;
}

export const calculate = (items: VolumetricItem[]): Dimensions => {
    if (!items || items.length === 0) {
        return { length: 0, width: 0, height: 0 };
    }

    let lVert = 0, wVert = 0, hVert = 0;
    let lHor = 0, wHor = 0, hHor = 0;
    let lSide = 0, wSide = 0, hSide = 0;

    for (const it of items) {
        const qty = it.qty < 1 ? 1 : it.qty;
        const l = it.length;
        const w = it.width;
        const h = it.height;

        // Vertical stacking: heights add up
        hVert += h * qty;
        if (l > lVert) lVert = l;
        if (w > wVert) wVert = w;

        // Horizontal stacking: lengths add up
        lHor += l * qty;
        if (h > hHor) hHor = h;
        if (w > wHor) wHor = w;

        // Side-by-side stacking: widths add up
        wSide += w * qty;
        if (h > hSide) hSide = h;
        if (l > lSide) lSide = l;
    }

    const volVert = lVert * wVert * hVert;
    const volHor = lHor * wHor * hHor;
    const volSide = lSide * wSide * hSide;

    if (volVert <= volHor && volVert <= volSide) {
        return { length: lVert, width: wVert, height: hVert };
    }
    if (volHor <= volSide) {
        return { length: lHor, width: wHor, height: hHor };
    }
    return { length: lSide, width: wSide, height: hSide };
};

export const Volumetric = { calculate };
