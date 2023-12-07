const CardCurve = ({ color }) => (
    <div className="card-curve">

<svg width="200px" height="213px" viewBox="0 0 200 213" version="1.1">
    <defs>
        <path d="M200.218063,31.1673434 C200.442448,43.2270893 194.817437,56.8136034 179.207031,71.511954 C150.342521,98.8975156 202.614756,151.136412 183.798257,186.82205 C168.368728,216.177121 124.752082,185.321471 61.4533785,178.568867 C23.030087,174.489168 0.224489796,194.865306 0.224489796,194.865306 L0.224489796,239.865306 L200.22449,239.865306 C199.794237,77.8392809 199.792095,8.27329336 200.218063,31.1673434 Z" id="path-6197u2p_vl-1"></path>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="necklace-card" transform="translate(0.000000, -27.000000)">
            <g id="Group" transform="translate(-0.224490, 0.134694)">
                <mask id="mask-6197u2p_vl-2" fill="white">
                    <use xlinkHref="#path-6197u2p_vl-1"></use>
                </mask>
                <g id="Mask"></g>
                <g mask="url(#mask-6197u2p_vl-2)" id="color-red">
                    <g transform="translate(0.224490, -0.134694)">
                        <rect id="Rectangle" class="curve-color" fill={`#${color}`} x="0" y="0" width="200" height="240"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</div>
);

export default CardCurve;
